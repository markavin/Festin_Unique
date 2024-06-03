import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { fetchLatestPaket } from '@/app/lib/data';
import { LatestPaket } from '@/app/lib/definitions';
import { kanit } from '@/app/ui/fonts';

export default async function LatestPakets(){
    const latestPakets = fetchLatestPaket()
    return (
        <div className="flex w-full flex-col md:col-span-4">
            <h2 className={`${kanit.className} mb-4 text-xl md:text-2xl`}>
                Latest Paket
            </h2>
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
                {/* NOTE: comment in this code when you get to this point in the course */}

                <div className="bg-white px-6">
                    {(await latestPakets).map((paket, i) => {
                        return (
                            <div
                                key={paket.id}
                                className={clsx(
                                    'flex flex-row items-center justify-between py-4',
                                    {
                                        'border-t': i !== 0,
                                    },
                                )}
                            >
                                <div className="flex items-center">
                                    <Image
                                        src={paket.gambar_paket}
                                        alt={`${paket.nama_paket}'s profile picture`}
                                        className="mr-4 rounded-full"
                                        width={32}
                                        height={32}
                                    />
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold md:text-base">
                                            {paket.durasi}
                                        </p>
                                        {/* <p className="hidden text-sm text-gray-500 sm:block">
                                            {paket.harga}
                                        </p> */}
                                    </div>
                                </div>
                                <p
                                    className={`${kanit.className} truncate text-sm font-medium md:text-base`}
                                >
                                    {paket.harga}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className="flex items-center pb-2 pt-6">
                    <ArrowPathIcon className="h-5 w-5 text-gray-500" />
                    <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
                </div>
            </div>
        </div>
    );
}
