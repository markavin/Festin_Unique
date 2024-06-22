import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteTransaksi } from '@/app/lib/actions';
 

export function CreateTransaksi() {
  return (
    <Link
      href="/dashboard/transaksi/create"
      className="flex h-10 items-center rounded-lg bg-gradient-to-b from-gray-800 to-red-900 px-4 text-sm font-medium text-white transition-colors  hover:from-red-700 hover:to-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Transaksi</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateTransaksi({ id }: { id: string }) {
  return (
    <Link
    href={`/dashboard/transaksi/${id}/edit`}
      className="rounded-md border p-2 bg-gradient-to-b from-gray-800 to-red-900  hover:from-red-700 hover:to-amber-600 text-white"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteTransaksi({ id }: { id: string }) {
  const deleteTransaksiWithId = deleteTransaksi.bind(null, id);
  return (
    <form action={deleteTransaksiWithId}>
      <button className="rounded-md border p-2 bg-gradient-to-b from-gray-800 to-red-900  hover:from-red-700 hover:to-amber-600 text-white">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
