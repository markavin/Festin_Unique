// pages/menu.tsx

import React from 'react';
import Image from 'next/image';
import { ClockIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { bebas_Neue } from '@/app/ui/fontz';
import { mansalva } from '@/app/ui/fontz';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-red-700 mb-10">
        <div className="container mx-auto py-10">
          <div className="flex space-x-4 items-center justify-center"> {/* Menengahkan tulisan */}
            <div className="flex space-x-4">
              <Link href="/">
                <button className="hidden md:block px-6 py-2 text-white text-sm transition duration-500 ease-out text-xs bg-transparent rounded-lg hover:text-red-900 hover:underline hover:decoration-red-900 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 focus:outline-none focus:text-red-900 active:bg-white active:bg-opacity-10">
                  <strong className={`${bebas_Neue.className} text-2xl md:text-2xl`}>HOME</strong>
                </button>
              </Link>
              <Link href="/menu">
                <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-red-900 hover:underline hover:decoration-red-900 hover:bg-white hover:bg-opacity-10 focus:bg-opacity-10 md:flex-none md:justify-start md:p-2 md:px-3">
                  <strong className={`${bebas_Neue.className} text-2xl md:text-2xl`}>PACKAGE</strong>
                </button>
              </Link>
              <Link href="/about-us">
                <button className="hidden md:block px-6 py-2 text-white text-sm transition duration-500 ease-out text-xs bg-transparent rounded-lg hover:text-red-900 hover:underline hover:decoration-red-900 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 focus:outline-none focus:text-red-900 active:bg-white active:bg-opacity-10">
                  <strong className={`${bebas_Neue.className} text-2xl md:text-2xl`}>ABOUT US</strong>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="md:order-1 mb-10">
          <h1 className={`${mansalva.className} text-4xl text-red-700 mb-6 text-center`}>Menu Package</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menu Item 1 */}
          <div className="bg-red-900 shadow-md rounded-md overflow-hidden">
            <div className="relative w-full h-60">
              <Image
                src="/paket/paketreguler.jpg"
                alt="Paket Reguler"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl text-white text-center font-semibold mb-2">PAKET REGULER</h2>
              <div className="flex items-center justify-center">
                <ClockIcon className="h-5 w-5 text-white mr-1" />
                <p className="text-white">90 menit</p>
              </div>
              <div className="mt-4 text-center">
                <span className="block text-3xl text-amber-100 font-semibold">Rp 99.000++</span>
              </div>
            </div>
          </div>
          <div className="bg-red-900 shadow-md rounded-md overflow-hidden">
            <div className="relative w-full h-60">
              <Image
                src="/paket/paketpremium.jpg"
                alt="Paket Premium"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl text-white text-center font-semibold mb-2">PAKET PREMIUM</h2>
              <div className="flex items-center justify-center">
                <ClockIcon className="h-5 w-5 text-white mr-1" />
                <p className="text-white">95 menit</p>
              </div>
              <div className="mt-4 text-center">
                <span className="block text-3xl text-amber-100 font-semibold">Rp 149.000++</span>
              </div>
            </div>
          </div>

          <div className="bg-red-900 shadow-md rounded-md overflow-hidden">
            <div className="relative w-full h-60">
              <Image
                src="/paket/paketsupreme.jpg"
                alt="Paket supreme"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl text-white text-center font-semibold mb-2">PAKET SUPREME</h2>
              <div className="flex items-center justify-center">
                <ClockIcon className="h-5 w-5 text-white mr-1" />
                <p className="text-white">100 menit</p>
              </div>
              <div className="mt-4 text-center">
                <span className="block text-3xl text-amber-100 font-semibold">Rp 250.000++</span>
              </div>
            </div>
          </div>

          <div className="bg-red-900 shadow-md rounded-md overflow-hidden">
            <div className="relative w-full h-60">
              <Image
                src="/paket/paketcp.jpg"
                alt="Paket Couple"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl text-white text-center font-semibold mb-2">PAKET COUPLE</h2>
              <div className="flex items-center justify-center">
                <ClockIcon className="h-5 w-5 text-white mr-1" />
                <p className="text-white">100 menit</p>
              </div>
              <div className="mt-4 text-center">
                <span className="block text-3xl text-amber-100 font-semibold">Rp 265.000++</span>
              </div>
            </div>
          </div>

          <div className="bg-red-900 shadow-md rounded-md overflow-hidden">
            <div className="relative w-full h-60">
              <Image
                src="/paket/pakettrio.jpg"
                alt="Paket Trio"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl text-white text-center font-semibold mb-2">PAKET TRIO</h2>
              <div className="flex items-center justify-center">
                <ClockIcon className="h-5 w-5 text-white mr-1" />
                <p className="text-white">120 menit</p>
              </div>
              <div className="mt-4 text-center">
                <span className="block text-3xl text-amber-100 font-semibold">Rp 400.000++</span>
              </div>
            </div>
          </div>

          <div className="bg-red-900 shadow-md rounded-md overflow-hidden">
            <div className="relative w-full h-60">
              <Image
                src="/paket/paketKeluarga.jpg"
                alt="Paket Family"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl text-white text-center font-semibold mb-2">PAKET FAMILY</h2>
              <div className="flex items-center justify-center">
                <ClockIcon className="h-5 w-5 text-white mr-1" />
                <p className="text-white">150 menit</p>
              </div>
              <div className="mt-4 text-center">
                <span className="block text-3xl text-amber-100 font-semibold">Rp 450.000++</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/">
            <button className="flex h-[50px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-black-600 md:flex-none md:justify-start md:p-2 md:px-3 mr-2">
              <ArrowUturnLeftIcon className="w-6" />
              <span className="hidden md:block ml-1"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
