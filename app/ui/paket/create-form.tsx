'use client'

import { PelangganField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  EnvelopeIcon,
  UserCircleIcon,
  InboxArrowDownIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createPelanggan } from '@/app/lib/actions';
import { useState } from 'react';

export default function Form({pelanggan}: {pelanggan: PelangganField[]}) {
  return (
    <form action={createPelanggan}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="paket" className="mb-2 block text-sm font-medium">
            Nama Paket
          </label>
          <div className="relative mt-2 rounded-md">
          <div className="relative">
          <input
            id="nama_paket"
            name="nama_paket"
            type="string"
            step="0.01"
            placeholder="Enter a Name"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
          <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>
    </div>

        {/* Customers Email */}
        <div className="mb-4">
          <label htmlFor="durasi" className="mb-2 block text-sm font-medium">
          Durasi
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="durasi"
                name="durasi"
                type="string"
                placeholder="Enter an Durasi "
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
         {/* Invoice Amount */}
         <div className="mb-4">
          <label htmlFor="harga" className="mb-2 block text-sm font-medium">
            Choose an harga
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="harga"
                name="harga"
                type="number"
                step="0.01"
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        {/* Customers Image_url */}
        <div className="mb-4">
          <label htmlFor="file" className="mb-2 block text-sm font-medium">
            Gambar Paket
          </label>
          <div>
          <div className="flex items-center border border-gray-200 rounded-md px-3 py-1">
          <InboxArrowDownIcon className="h-5 w-03 mr-2 text-gray-500" />
          <input
                name ="image"
                type ="file"
                accept='image/*'
                className="peer block w-full font-small  "
              />
        </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/pelanggan"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Paket</Button>
      </div>
    </form>
  );
}