'use client';


import { PelangganField, PelangganForm } from '@/app/lib/definitions';
import {
  InboxArrowDownIcon,
  EnvelopeIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updatePelanggan } from '@/app/lib/actions';
import { PhoneIcon } from '@heroicons/react/20/solid';


export default function EditPelangganForm({
  pelanggan,
}: {
  pelanggan: PelangganForm;
}) {
  const updatePelangganWithId = updatePelanggan.bind(null, pelanggan.id);


  return (
    <form action={updatePelangganWithId}>
      <div className="rounded-md bg-gradient-to-r from-red-950 to-gray-700 p-4 md:p-6">
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
                placeholder="Enter Name"
                defaultValue={pelanggan.name}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>


        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="string"
                step="0.01"
                placeholder="enter email"
                defaultValue={pelanggan.email}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>


        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
            No hP
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nohp"
                name="nohp"
                type="string"
                step="0.01"
                placeholder="enter nohp"
                defaultValue={pelanggan.nohp}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
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
        <Button type="submit" className="bg-gradient-to-t from-gray-800 to-red-900 px-4 text-sm font-medium text-white transition-colors hover:from-red-700 hover:to-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          Save Changes</Button>
      </div>
    </form>
  );
}





