'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod';
import email from 'next-auth/providers/email';

// Use Zod to update the expected types
const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  nohp: z.string(),
});
 
const CreatePelanggan = FormSchema.omit({ id: true });
const UpdatePelanggan = FormSchema.omit({ id: true });

// const UpdateTransaksi = FormSchema.omit({ id: true, date: true });

export async function createPelanggan(formData: FormData) {
  const { name, email, nohp } = CreatePelanggan.parse({
    // id: formData.get('id'),
    name: formData.get('name'),
    email: formData.get('email'),
    nohp: formData.get('nohp'),
  });
  // Test it out:
  
  const date = new Date().toISOString().split('T')[0];

  await sql`
    INSERT INTO pelanggan (name, email, nohp)
    VALUES (${name}, ${email}, ${nohp})
  `;

  revalidatePath('/dashboard/pelanggan');
  redirect('/dashboard/pelanggan');
}

 
export async function updatePelanggan(id: string, formData: FormData) {
  const { name, email, nohp } = UpdatePelanggan.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    nohp: formData.get('nohp'),
  });

  try {
    await sql`
    UPDATE pelanggan
    SET name = ${name}, email = ${email}, nohp = ${nohp}
    WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Pelanggan.' };
  }
 
  revalidatePath('/dashboard/pelanggan');
  redirect('/dashboard/pelanggan');
}

export async function deletePelanggan(id: string) {
  await sql`DELETE FROM pelanggan WHERE id = ${id}`;
  revalidatePath('/dashboard/pelanggan');
}

// Function to update a transaction
// export async function updateTransaksi(id: string, formData: FormData) {
//   const { pelanggan_id, total_bayar, status } = UpdateTransaksi.parse({
//     pelanggan_id: formData.get('pelanggan_id'),
//     total_bayar: formData.get('total_bayar'),
//     status: formData.get('status'),
//   });

//   const total_bayarInCents = total_bayar * 100;

//   await sql`
//     UPDATE transaksi
//     SET pelanggan_id = ${pelanggan_id}, total_bayar = ${total_bayarInCents}, status = ${status}
//     WHERE id = ${id}
//   `;

//   revalidatePath('/dashboard/transaksi');
//   redirect('/dashboard/transaksi');
// }

// const CreateTransaksi = FormSchema.omit({ id: true, date: true });

// // Function to create a new transaction
// export async function createTransaksi(formData: FormData) {
//   const { pelanggan_id, total_bayar, status } = CreateTransaksi.parse({
//     pelanggan_id: formData.get('pelanggan_id'),
//     total_bayar: formData.get('total_bayar'),
//     status: formData.get('status'),
//   });

//   const total_bayarInCents = total_bayar * 100;
//   const date = new Date().toISOString().split('T')[0];

//   await sql`
//     INSERT INTO transaksi (pelanggan_id, total_bayar, status, date)
//     VALUES (${pelanggan_id}, ${total_bayarInCents}, ${status}, ${date})
//   `;

//   revalidatePath('/dashboard/transaksi');
//   redirect('/dashboard/transaksi');
// }

// // Function to delete a transaction
// export async function deleteTransaksi(id: string) {
//   await sql`DELETE FROM transaksi WHERE id = ${id}`;
//   revalidatePath('/dashboard/transaksi');
// }

// Function to handle authentication
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
