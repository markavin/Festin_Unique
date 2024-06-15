'use client';

import { PaketField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  ClockIcon,
  UserCircleIcon,
  InboxArrowDownIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
// import { CreatePaket } from './buttons';
import { createPaket } from '@/app/lib/actions';


export default function Form({ pakets }: { pakets: PaketField[] }) {
  return (
    <form action={createPaket} method="post" encType="multipart/form-data">
      <div className="rounded-md bg-gradient-to-b from-gray-700 to-red-950 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="nama_paket" className="mb-2 block text-sm font-medium text-white">
            Nama Paket
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="nama_paket"
              name="nama_paket"
              type="text"
              placeholder="masukkan Nama paket Baru"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              // required // Added required attribute
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="durasi" className="mb-2 block text-sm font-medium text-white">
            Durasi
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="durasi"
              name="durasi" 
              type="string" // Changed to number for better validation
              placeholder="Masukkan Durasi yang baru"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              // required // Added required attribute
            />
            <ClockIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="harga" className="mb-2 block text-sm font-medium text-white">
            Masukkan Harga paket
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="harga"
              name="harga"
              type="number"
              placeholder="Masukkan dalam bentuk Rupiah"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              // required // Added required attribute
            />
            <BanknotesIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="mb-2 block text-sm font-medium text-white">
            Gambar Paket
          </label>
          <div className="flex items-center border border-gray-200 rounded-md px-3 py-1">
            <InboxArrowDownIcon className="h-5 w-5 mr-2 text-white" />
            <input
              // id="image"
              name="image"
              type="file"
              accept="image/*"
              className="peer block w-full font-small text-white "
              // required // Added required attribute
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/paket"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
          </Link>
          <Button type="submit" className="bg-gradient-to-b from-gray-800 to-red-900 text-white hover:bg-amber-600">
        Create Paket</Button>
      </div>
    </form>
  );
}
