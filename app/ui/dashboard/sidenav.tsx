import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { mansalva, bebas_Neue } from '@/app/ui/fontz';
import Image from 'next/image';
// import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gradient-to-b from-red-900 to-gray-800 text-black">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-amber-950 p-4 md:h-40 "
        href="/"
      >
        <div className={`${bebas_Neue.className} "text-l md:text-3xl text-neutral-100 md:leading-normal"`}>
        <Image
            src="/logoo.png"
            alt="logo"
            width={120}
            height={120} />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks /> 
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        
        <Link 
          href="/">
            <button className="flex h-[50px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-amber-200 hover:text-black-600 md:flex-none md:justify-start md:p-2 md:px-3 mr-2" > 
              <ArrowUturnLeftIcon className="w-6" />
              <div className="hidden md:block">Back </div>
            </button>
          </Link>
        {/* <form
            action={async () => {
              'use server';
              await signOut();
            }}> */}
          <button className="flex h-[50px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-amber-200 hover:text-black-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        {/* </form> */}
      </div>
    </div>
  );
}