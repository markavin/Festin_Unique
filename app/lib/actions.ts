'use server';

<<<<<<< HEAD
import { z } from 'zod';
=======
>>>>>>> f2249215dd05f926f6cb82d1defeb20075156778
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
<<<<<<< HEAD
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

=======
import { z } from 'zod';

// Use Zod to update the expected types
const FormSchema = z.object({
  id: z.string(),
  pelanggan_id: z.string(),
  total_bayar: z.coerce.number(),
  status: z.enum(['Gagal', 'Berhasil']),
  date: z.string(),
});

const UpdateTransaksi = FormSchema.omit({ id: true, date: true });

// Function to update a transaction
export async function updateTransaksi(id: string, formData: FormData) {
  const { pelanggan_id, total_bayar, status } = UpdateTransaksi.parse({
    pelanggan_id: formData.get('pelanggan_id'),
    total_bayar: formData.get('total_bayar'),
    status: formData.get('status'),
  });

  const total_bayarInCents = total_bayar * 100;

  await sql`
    UPDATE transaksi
    SET pelanggan_id = ${pelanggan_id}, total_bayar = ${total_bayarInCents}, status = ${status}
    WHERE id = ${id}
  `;

  revalidatePath('/dashboard/transaksi');
  redirect('/dashboard/transaksi');
}

const CreateTransaksi = FormSchema.omit({ id: true, date: true });

// Function to create a new transaction
export async function createTransaksi(formData: FormData) {
  const { pelanggan_id, total_bayar, status } = CreateTransaksi.parse({
    pelanggan_id: formData.get('pelanggan_id'),
    total_bayar: formData.get('total_bayar'),
    status: formData.get('status'),
  });

  const total_bayarInCents = total_bayar * 100;
  const date = new Date().toISOString().split('T')[0];

  await sql`
    INSERT INTO transaksi (pelanggan_id, total_bayar, status, date)
    VALUES (${pelanggan_id}, ${total_bayarInCents}, ${status}, ${date})
  `;

  revalidatePath('/dashboard/transaksi');
  redirect('/dashboard/transaksi');
}

// Function to delete a transaction
export async function deleteTransaksi(id: string) {
  await sql`DELETE FROM transaksi WHERE id = ${id}`;
  revalidatePath('/dashboard/transaksi');
}

// Function to handle authentication
>>>>>>> f2249215dd05f926f6cb82d1defeb20075156778
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
