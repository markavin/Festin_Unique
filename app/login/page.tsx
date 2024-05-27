// import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import Image from 'next/image';

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center bg-blue-100 md:h-screen" style={{ backgroundImage: "url('/nama.jpg')" }}>
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-3 p-4 md:-mt-32">
                <div className="flex flex-col items-center justify-center h-36 w-full rounded-lg bg-gradient-to-b from-gray-900 to-red-950 p-3">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/bbq3.png"
                            alt="logo"
                            width={300}
                            height={250}
                        />
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    );
}
