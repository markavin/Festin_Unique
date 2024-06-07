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

const FormSchemaz = z.object({
  id: z.string(),
  pelangganId: z.string(),
  paketId:z.string(),
  total_bayar: z.coerce.number(),
  tanggal_transaksi: z.string(),
  metode_bayar: z.enum(['Qris', 'Tunai', 'Debit']),
  status: z.enum(['Berhasil', 'Gagal']),
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

const CreateTransaksi = FormSchemaz.omit({ id: true, tanggal_transaksi: true });
const UpdateTransaksi = FormSchemaz.omit({ id: true, tanggal_transaksi: true });

// // Function to create a new transaction
export async function createTransaksi(formData: FormData) {
  const { pelangganId, paketId, total_bayar, metode_bayar, status } = CreateTransaksi.parse({
    pelangganId: formData.get('pelangganId'),
    paketId: formData.get('paketId'),
    total_bayar: Number(formData.get('total_bayar')),  // Convert to number
    metode_bayar: formData.get('metode_bayar'),
    status: formData.get('status'),
  });

  const total_bayarInCents = total_bayar * 100;
  const tanggal_transaksi = new Date().toISOString().split('T')[0];

  await sql`
    INSERT INTO transaksi (pelanggan_id, paket_id, tanggal_transaksi, total_bayar, metode_bayar, status)
    VALUES (${pelangganId}, ${paketId}, ${tanggal_transaksi}, ${total_bayarInCents}, ${metode_bayar}, ${status}
    )
  `;

  revalidatePath('/dashboard/transaksi');
  redirect('/dashboard/transaksi');
}


// Function to update a transaction
export async function updateTransaksi(id: string, formData: FormData) {
  const { pelangganId, paketId, total_bayar, metode_bayar, status } = UpdateTransaksi.parse({
    pelangganId: formData.get('pelangganId'),
    paketId: formData.get('paketId'),
    total_bayar: Number(formData.get('total_bayar')),  // Convert to number
    metode_bayar: formData.get('metode_bayar'),
    status: formData.get('status'),
  });

  const total_bayarInCents = total_bayar * 100;

  try {
  await sql`
  UPDATE transaksi 
  SET pelanggan_id = ${pelangganId}, paket_id = ${paketId}, total_bayar = ${total_bayarInCents}, metode_bayar = ${metode_bayar}, status=${status}
  WHERE id = ${id}
`;

  } catch (error) {
    return { message: 'Database Error: Failed to Update transaksi.' };
  }

  revalidatePath('/dashboard/transaksi');
  redirect('/dashboard/transaksi');
}

export async function deleteTransaksi(id: string) {
  await sql`DELETE FROM transaksi WHERE id = ${id}`;
  revalidatePath('/dashboard/transaksi');
  return { message: 'Deleted Reservations.' };
}

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
