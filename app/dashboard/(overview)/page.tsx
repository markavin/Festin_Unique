import { Card } from '@/app/ui/dashboard/cards';
import DetailPendapatanChart from '@/app/ui/dashboard/detailPendapatan';
import LatestTransaksis from '@/app/ui/dashboard/latestTransaksi';
import { kanit } from '@/app/ui/fonts';
import { fetchCardData, fetchLatestTransaksi } from '../../lib/data';
import LatestPakets from '../../ui/dashboard/latestPaket';
import { Metadata } from 'next';
import CardWrapper from '@/app/ui/dashboard/cards';
import { Suspense } from 'react';
import {
  DetailPendapatanChartSkeleton,
  LatestTransaksiSkeleton,
  LatestPaketSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Homepage | Festin unique Dashboard',
};
export default async function Page() {
  // const revenue = await fetchRevenue();
  const {
    numberOfTransaksi,
    numberOfPelanggan,
    numberOfPaket,
    totalBerhasilransaksi,
    totalGagalTransaksi,
  } = await fetchCardData();
  
  const latestTransaksi = await fetchLatestTransaksi();
  return (
    <main>
      <h1 className={`${kanit.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-5  lg:grid-cols-5">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols- lg:grid-cols-8">
        <Suspense fallback={<DetailPendapatanChartSkeleton />}>
          <DetailPendapatanChart />
        </Suspense>
        <Suspense fallback={<LatestTransaksiSkeleton />}>
          <LatestTransaksis />
        </Suspense>
        <Suspense fallback={<LatestPaketSkeleton />}>
         <LatestPakets/>
         </Suspense>
      </div>
      {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <DetailPendapatanChart   />
        <LatestTransaksis />
         < LatestPakets/>
      </div> */}
    </main>
  );
}