import LoginForm from '@/app/ui/login-form';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Festin unique ',
};
export default function LoginPage() {
    return (
        <main className="relative flex items-center justify-center min-h-screen" style={{ backgroundImage: "url('/nama.jpg')" }}>
            <div className="absolute top-4 left-4">
                <Link href="/">
                    <button className="flex items-center gap-1 px-3 py-1 text-white text-md transition duration-500 ease-out bg-transparent border border-white rounded-full hover:text-red-600 hover:underline hover:decoration-amber-600 focus:bg-opacity-10 focus:outline-none focus:text-amber-600 active:bg-white active:bg-opacity-10">
                        <ArrowLongLeftIcon className="w-6" />
                    </button>
                </Link>
            </div>
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
                <div className="flex items-center justify-center h-36 w-full rounded-lg bg-gradient-to-b from-gray-900 to-red-950 p-3">
                    <Image
                        src="/bbq3.png"
                        alt="logo"
                        width={300}
                        height={250}
                    />
                </div>
                <LoginForm />
            </div>
        </main>
    );
}
