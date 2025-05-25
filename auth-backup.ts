import { sql } from '@vercel/postgres';
import bcryptjs from 'bcryptjs';
import { z } from 'zod';
import { Redirect } from 'next';

async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return undefined;
  }
}

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    console.log('Login attempt:', { email }); // Don't log password
    
    // Validation schema
    const parsed = z
      .object({
        email: z.string().email(),
        password: z.string().min(1),
      })
      .safeParse({ email, password });

    if (!parsed.success) {
      console.log('Validation failed');
      return 'Invalid input format.';
    }

    // Get user from database
    const user = await getUser(email);
    if (!user) {
      console.log('User not found:', email);
      return 'Invalid credentials.';
    }

    // Check password
    const match = await bcryptjs.compare(password, user.password);
    if (!match) {
      console.log('Password mismatch for user:', email);
      return 'Invalid credentials.';
    }

    console.log('Login success for user:', email);
    redirect('/dashboard');
    
  } catch (error) {
    console.log('Login error:', error);
    if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
      throw error;
    }
    return 'Something went wrong.';
  }
}