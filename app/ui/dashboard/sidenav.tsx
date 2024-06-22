import Link from 'next/link';
import Image from 'next/image';
import { PowerIcon, ArrowUturnLeftIcon, CurrencyDollarIcon, UserGroupIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { ArrowLongLeftIcon, ArrowRightOnRectangleIcon, HomeIcon } from '@heroicons/react/20/solid';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex flex-col h-full px-5 py-4 bg-gradient-to-b from-gray-900 to-red-950 text-white">
      <div className="mb-4 flex h-20 items-center justify-center p-4">
        <div>
          <Image
            src="/bbq3.png"
            alt="logo"
            width={300}
            height={300}
          />
        </div>
      </div>
      <nav className="flex justify-between space-x-4 mt-6 items-center">
        <Link href="/dashboard">
          <button className="flex items-center gap-2 px-8 py-2 text-white text-md transition duration-500 ease-out text-md bg-transparent rounded-lg hover:text-amber-600 hover:underline hover:decoration-amber-600 focus:bg-opacity-10 focus:outline-none focus:text-amber-600 active:bg-amber-600 active:bg-opacity-10">
            <ArrowLongLeftIcon className="w-6" />
          </button>
        </Link>
        <Link href="/dashboard">
          <button className="flex items-center gap-2 px-8 py-2 text-white text-md transition duration-500 ease-out text-md bg-transparent rounded-lg hover:text-amber-600 hover:underline hover:decoration-amber-600 focus:bg-opacity-10 focus:outline-none focus:text-amber-600 active:bg-amber-600 active:bg-opacity-10">
            <HomeIcon className="w-6" />
            <span className="hidden md:flex">Home</span>
          </button>
        </Link>
        <Link href="/dashboard/transaksi">
          <button className="flex items-center gap-2 px-8 py-2 text-white text-md transition duration-500 ease-out text-md bg-transparent rounded-lg hover:text-amber-600 hover:underline hover:decoration-amber-600 focus:bg-opacity-10 focus:outline-none focus:text-amber-600 active:bg-white active:bg-opacity-10">
            <CurrencyDollarIcon className="w-6" />
            <span className="hidden md:flex">Transaksi</span>
          </button>
        </Link>
        <Link href="/dashboard/pelanggan">
          <button className="flex items-center gap-2 px-8 py-2 text-white text-md transition duration-500 ease-out text-md bg-transparent rounded-lg hover:text-amber-600 hover:underline hover:decoration-amber-600 focus:bg-opacity-10 focus:outline-none focus:text-amber-600 active:bg-white active:bg-opacity-10">
            <UserGroupIcon className="w-6" />
            <span className="hidden md:flex">Pelanggan</span>
          </button>
        </Link>
        <Link href="/dashboard/paket">
          <button className="flex items-center gap-2 px-8 py-2 text-white text-md transition duration-500 ease-out text-md bg-transparent rounded-lg hover:text-amber-600 hover:underline hover:decoration-amber-600 focus:bg-opacity-10 focus:outline-none focus:text-amber-600 active:bg-white active:bg-opacity-10">
            <DocumentIcon className="w-6" />
            <span className="hidden md:flex">Paket</span>
          </button>
        </Link>
        <form
        action={async () => {
            'use server';
            await signOut();
          }}>
          
          <button className="flex items-center gap-2 px-8 py-2 text-white text-md transition duration-500 ease-out text-md bg-transparent rounded-lg hover:text-amber-600 hover:underline hover:decoration-amber-600 focus:bg-opacity-10 focus:outline-none focus:text-amber-600 active:bg-white active:bg-opacity-10">
            <ArrowRightOnRectangleIcon className="w-6" />
            <span className="hidden md:flex"></span>
          </button>
        </form>
      </nav>
    </div>
  );
}
