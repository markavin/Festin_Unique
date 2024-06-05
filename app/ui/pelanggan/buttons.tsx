import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deletePelanggan } from '@/app/lib/actions';


export function CreatePelanggan() {
  return (
    <Link
      href="/dashboard/pelanggan/create"
      className="flex h-10 items-center rounded-lg bg-gradient-to-b from-gray-800 to-red-800 px-4 text-sm font-medium text-white transition-colors hover:from-red-700 hover:to-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Pelanggan</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdatePelanggan({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/pelanggan/${id}/edit`}
      className="rounded-md border p-2 bg-gradient-to-b from-gray-800 to-red-800 hover:from-red-700 hover:to-amber-600"
    >
      <PencilIcon className="w-5 h-5 text-white" />
    </Link>
  );
}

export function DeletePelanggan({ id }: { id: string }) {
  const deletePelangganWithId = deletePelanggan.bind(null, id);
  return (
    <form action={deletePelangganWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}