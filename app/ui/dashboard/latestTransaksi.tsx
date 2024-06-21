import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { kanit } from '@/app/ui/fonts';
import { LatestTransaksi } from '@/app/lib/definitions';
import { fetchLatestTransaksi } from '@/app/lib/data';
import { bebas_Neue } from '../fontz';
import { Query } from '@vercel/postgres';


export default async function LatestTransaksis() {
  const latestTransaksis = await fetchLatestTransaksi();


  const berhasilTransaksis = latestTransaksis.filter(transaksi => transaksi.status === 'Berhasil');
  const gagalTransaksis = latestTransaksis.filter(transaksi => transaksi.status === 'Gagal');


  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${bebas_Neue.className} mb-4 text-xl md:text-2xl `}>
        Latest Transactions
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gradient-to-b from-red-900 to-gray-950 p-4">
        <div className="bg-white px-6 py-4 overflow-y-auto rounded-lg">
          <h3 className="mb-4 text-lg font-semibold">Successful Transactions</h3>
          {berhasilTransaksis.map((transaksi, i) => (
            <div
              key={transaksi.id}
              className={clsx(
                'flex flex-row items-center justify-between py-4',
                {
                  'border-t': i !== 0,
                },
              )}
            >
              <div className="flex items-center">
                <div className="min-w-0 ml-4">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {transaksi.name}
                  </p>
                  {transaksi.status}
                </div>
              </div>
              <p className={`${kanit.className} truncate text-sm font-medium md:text-base`}>
                {transaksi.total_bayar}
              </p>
            </div>
          ))}
        </div>


        <div className="bg-white px-6 py-4 overflow-y-auto rounded-lg mt-4">
          <h3 className="mb-4 text-lg font-semibold">Failed Transactions</h3>
          {gagalTransaksis.map((transaksi, i) => (
            <div
              key={transaksi.id}
              className={clsx(
                'flex flex-row items-center justify-between py-4',
                {
                  'border-t': i !== 0,
                },
              )}
            >
              <div className="flex items-center">
                <div className="min-w-0 ml-4">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {transaksi.name}
                  </p>
                  {transaksi.status}
                </div>
              </div>
              <p className={`${kanit.className} truncate text-sm font-medium md:text-base`}>
                {transaksi.total_bayar}
              </p>
            </div>
          ))}
        </div>


        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}



