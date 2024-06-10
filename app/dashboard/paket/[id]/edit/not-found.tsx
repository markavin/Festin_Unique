import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
 
export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center gap-3 mt-20">
        <FaceFrownIcon className="w-10 text-black-400" />
        <h2 className="text-xl font-semibold">404 Not Found</h2>
        <p>Could not find the requested paket.</p>
        <Link
          href="/dashboard/paket"
          className="mt-4 rounded-md bg-gradient-to-b from-gray-900 to-red-950 px-4 py-2 text-sm text-white transition-colors hover:bg-amber-600"
        >
          Go Back
        </Link>
      </main>
    </div>
  );
}
