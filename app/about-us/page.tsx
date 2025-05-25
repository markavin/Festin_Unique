// pages/about-us.tsx

import React from 'react';
import Image from 'next/image';
import { bebas_Neue, mansalva, teko } from '@/app/ui/fontz';
import { alegreya, oswald } from '@/app/ui/fonts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About us | Festin unique About us',
};

export default function AboutusPage() {
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
                <button className="hidden md:block px-6 py-2 text-white text-sm transition duration-500 ease-out text-xs bg-transparent rounded-lg hover:text-red-900 hover:underline hover:decoration-red-900 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 focus:outline-none focus:text-red-900 active:bg-white active:bg-opacity-10">
                  <strong className={`${bebas_Neue.className} text-2xl md:text-2xl`}>PACKAGE</strong>
                </button>
              </Link>
              <Link href="/about-us">
                <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-red-900 hover:underline hover:decoration-red-900 hover:bg-white hover:bg-opacity-10 focus:bg-opacity-10 md:flex-none md:justify-start md:p-2 md:px-">
                  <strong className={`${bebas_Neue.className} text-2xl md:text-2xl`}>ABOUT US</strong>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:order-4 pl-20">
            <img src="/buffet.jpg" alt="buffet" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:order-1">
            <h1 className={`${mansalva.className} text-4xl text-red-700 mb-6`}>About Us</h1>
            <p className={`${teko.className} text-5xl mb-4 bg-gray-100 text-justify`}>
              Festin Unique Japanese BBQ & Shabu-shabu
            </p>
            <p className={`${oswald.className} text-xl mb-4 bg-gray-100 text-justify`}>
              Welcome to Festin Unique! We are a restaurant offering an exciting dining experience with an All You Can Eat concept, featuring a variety of packages to suit your needs. Our set menus include favorite dishes like beef, chicken, seafood, fresh vegetables, and desserts.
            </p>
            <p className={`${oswald.className} text-xl mb-4 bg-gray-100 text-justify`}>
              For special occasions, the Romantic Couple Package offers the finest dishes from our premium menu, along with special desserts and romantic table decorations. With over 100++ menu options made from fresh, high-quality ingredients, we are ready to delight your palate in a comfortable and friendly restaurant atmosphere, supported by the best service from our staff.
            </p>
            <p className={`${oswald.className} text-xl mb-4 bg-gray-100 text-justify`}>
              Enjoy an unforgettable culinary experience at Festin Unique!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}