'use client'

import { PelangganField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  EnvelopeIcon,
  UserCircleIcon,
  InboxArrowDownIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createPelanggan } from '@/app/lib/actions';
import { useState } from 'react';

export default function Form({ pelanggan }: { pelanggan: PelangganField[] }) {
  return (
    <form action={createPelanggan}>
      <div className="rounded-md bg-gradient-to-b from-gray-700 to-red-950 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium text-white">
            Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="string"
                step="0.01"
                placeholder="Enter a Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Pelanggan Email */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium text-white">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="string"
                accept='image/*'
                placeholder="Enter an Email "
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* pelanggan No hp */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium text-white">
            No Hp
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nohp"
                name="nohp"
                type="string"
                placeholder="Enter an No Hp "
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Customers Image_url */}
        {/* <div className="mb-4">
          <label htmlFor="file" className="mb-2 block text-sm font-medium">
            Upload Image
          </label>
          <div>
            <div className="flex items-center border border-gray-200 rounded-md px-3 py-1">
              <InboxArrowDownIcon className="h-5 w-03 mr-2 text-gray-500" />
              <input
                name="image"
                type="file"
                accept='image/*'
                className="peer block w-full font-small  "
              />
            </div>
          </div>
        </div> */}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/pelanggan"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit" className="bg-gradient-to-b from-gray-800 to-red-900 text-white hover:bg-amber-600">
        Create Pelanggan</Button>
      </div>
    </form>
  );
}