import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions'; // pastikan definisi User benar

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return undefined;
  }
}

export const authOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsed = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (!parsed.success) return null;

        const { email, password } = parsed.data;
        const user = await getUser(email);
        if (!user) return null;

        const match = await bcrypt.compare(password, user.password);
        if (!match) return null;

        return user;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
};

const handler = NextAuth(authOptions);
export const { auth, signIn, signOut, handlers: { GET, POST } } = handler;
