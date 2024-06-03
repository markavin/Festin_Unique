'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import email from 'next-auth/providers/email';


// ...
const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  nohp: z.string(),
});

const CreatePelanggan = FormSchema.omit({ id: true, date: true });


export async function createPelanggan(formData: FormData) {
  const { name, email, nohp } = CreatePelanggan.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    nohp: formData.get('nohp'),
  });
  const date = new Date().toISOString().split('T')[0];

  await sql`
    INSERT INTO pelanggan (name, email, nohp)
    VALUES (${name}, ${email}, ${nohp})
  `;

  revalidatePath('/dashboard/pelanggan');
  redirect('/dashboard/pelanggan');
}

export async function deletePelanggan(id: string) {
  await sql`DELETE FROM pelanggan WHERE id = ${id}`;
  revalidatePath('/dashboard/Pelanggan');
  return { message: 'Deleted Pelanggan' };

}

// Use Zod to update the expected types
const UpdatePelanggan = FormSchema.omit({ id: true, date: true });

// ...

export async function updatePelanggan(id: string, formData: FormData) {
  const { name, email, nohp } = UpdatePelanggan.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    nohp: formData.get('nohp'),
  });

  await sql`
    UPDATE pelanggan
    SET name = ${name}, email = ${email}, nohp = ${nohp}
    WHERE id = ${id}
  `;

  revalidatePath('/dashboard/pelanggan');
  redirect('/dashboard/pelanggan');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}