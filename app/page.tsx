import { ShoppingCartIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { kanit } from '@/app/ui/fonts';
import { mansalva, bebas_Neue } from '@/app/ui/fontz';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Festin unique HomePage',
};

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-6 bg-cover" style={{ backgroundImage: "url('/bg.png')" }}>
      <nav className="fixed inset-x-0 top-0 z-10 w-full px-4 py-2 bg-transparent shadow-none border-slate-500 dark:bg-transparent shadow-none transition duration-700 ease-out flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/logoo.png"
            alt="logo"
            width={120}
            height={120} />
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            <button className="px-6 py-2 text-white text-sm transition duration-500 ease-out text-xs bg-transparent rounded-lg hover:text-red-900 hover:underline hover:decoration-red-900 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 focus:outline-none focus:text-red-900 active:bg-white active:bg-opacity-10">
              <strong className={`${bebas_Neue.className} text-2xl md:text-2xl`}>HOME</strong>
            </button>
          </Link>
          <Link href="/menu">
            <button className="px-6 py-2 text-white text-sm transition duration-500 ease-out text-xs bg-transparent rounded-lg hover:text-red-900 hover:underline hover:decoration-red-900 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 focus:outline-none focus:text-red-900 active:bg-white active:bg-opacity-10">
              <strong className={`${bebas_Neue.className} text-2xl md:text-2xl`}>PACKAGE</strong>
            </button>
          </Link>
          <Link href="/about-us">
            <button className="px-6 py-2 text-white text-sm transition duration-500 ease-out text-xs bg-transparent rounded-lg hover:text-red-900 hover:underline hover:decoration-red-900 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 focus:outline-none focus:text-red-900 active:bg-white active:bg-opacity-10">
              <strong className={`${bebas_Neue.className} text-2xl md:text-2xl`}>ABOUT US</strong>
            </button>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/login">
            <button className="px-6 py-2 text-white text-sm transition duration-500 ease-out text-xs bg-transparent rounded-lg hover:text-red-900 hover:underline hover:decoration-red-900">
              <strong className={`${bebas_Neue.className} text-2xl md:text-2xl`}>LOGIN</strong>
            </button>
          </Link>
        </div>
      </nav>

      <div className="relative flex flex-col items-center justify-center gap-10 rounded-lg px-10 text-center md-7xl md:px-5 mt-40">
        <div className="absolute inset-5 flex items-center z-0">
          <Image
            src="/coretan.png"
            alt="arsiran"
            width={750}
            height={500}
            className="opacity-70"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center rounded-lg px-5 text-center md-8xl md:px-20 mt-30">
          <strong className={`${mansalva.className} text-5xl md:text-6xl inline-block text-white`}>
            <span style={{ whiteSpace: 'nowrap', display: 'block', margin: '0 auto' }}>ALL YOU CAN EAT</span>
          </strong>
          <div>
            <h1 className={`${bebas_Neue.className} antialiased flex text-white text-[30px] justify-center`}>
              START FROM 99.000++
            </h1>
          </div>
        </div>
        <Link href="/dashboard">
          <h1 className={`${kanit.className} rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-red-950 shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-indigo-600 flex items-center relative z-10`}>
            ORDER NOW <ShoppingCartIcon className='w-4 ml-2' />
          </h1>
        </Link>
      </div>

    </main>
  );
}
