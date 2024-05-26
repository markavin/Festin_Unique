// pages/about-us.tsx

import React from 'react';
import Image from 'next/image';
import { bebas_Neue, mansalva, teko } from '@/app/ui/fontz';
import { alegreya, oswald } from '@/app/ui/fonts';
import Link from 'next/link';

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
                    <div className="md:order-2">
                        <img src="/buffet.jpg" alt="buffet" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="md:order-1">
                        <h1 className={`${mansalva.className} text-4xl text-red-700 mb-6`}>About Us</h1>
                        <p className={`${teko.className} text-6xl mb-4 bg-gray-100 text-justify`}>
                            Festin Unique Japanese BBQ dan Shabu-shabu
                        </p>
                        <p className={`${oswald.className} text-xl mb-4 bg-gray-100 text-justify`}>
                            Selamat datang di Festin Unique! Kami adalah restoran yang menawarkan pengalaman menarik dengan konsep All You Can Eat yang memiliki berbagai pilihan paket yang sesuai dengan kebutuhan Anda. Kami menyajikan menu paket dengan hidangan favorit seperti daging, ayam, seafood, sayuran segar, dan makanan penutup.
                        </p>
                        <p className={`${oswald.className} text-xl mb-4 bg-gray-100 text-justify`}>
                            Untuk momen spesial, Paket Pasangan Romantis menyajikan hidangan terbaik dari menu premium dengan makanan penutup spesial dan dekorasi meja romantis. Dengan lebih dari 100++ pilihan menu yang menggunakan bahan segar dan berkualitas tinggi, kami siap memanjakan lidah Anda dalam suasana restoran yang nyaman dan ramah, didukung oleh pelayanan terbaik dari staf kami. Selamat menikmati pengalaman kuliner tak terlupakan di Festin Unique!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}