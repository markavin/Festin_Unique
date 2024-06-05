import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreatePaket() {
  return (
    <Link
      href="/dashboard/paket/create"
      className="flex h-10 items-center rounded-lg bg-gradient-to-b from-gray-800 to-red-900 px-4 text-sm font-medium text-white transition-colors hover:from-red-700 hover:to-amber-600focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Paket</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdatePaket({ id }: { id: string }) {
  return (
    <Link
      href={`"/dashboard/paket/${id}/edit"`}
      className="rounded-md bg-gradient-to-t from-gray-800 to-red-900 order p-2 hover:from-red-700 hover:to-amber-600 text-white"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeletePaket({ id }: { id: string }) {
  return (
    <>
      <button className="rounded-md bg-gradient-to-b from-gray-800 to-red-900 border p-2 hover:from-red-700 hover:to-amber-600 text-white">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 " />
      </button>
    </>
  );
}
