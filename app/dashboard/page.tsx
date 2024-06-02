import { Card } from '@/app/ui/dashboard/cards';
import DetailPendapatanChart from '@/app/ui/dashboard/detailPendapatan';
import LatestTransaksis from '@/app/ui/dashboard/latestTransaksi';
import { kanit } from '@/app/ui/fonts';
import { fetchCardData, fetchLatestTransaksi } from '../lib/data';
import { detailPendapatan } from '../lib/placeholder-data';
import { fetchDetailPendapatan } from '@/app/lib/data';
import LatestPakets from '../ui/dashboard/latestPaket';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homepage | Festin unique Dashboard',
};
export default async function Page() {
  // const revenue = await fetchRevenue();
  const {
    numberOfTransaksi,
    numberOfPelanggan,
    totalBerhasilransaksi,
    totalGagalTransaksi,
  } = await fetchCardData();
  
  const latestTransaksi = await fetchLatestTransaksi();
  return (
    <main>
      <h1 className={`${kanit.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        
        <Card title="Berhasil" value={totalBerhasilransaksi} type="Berhasil" />
        <Card title="Gagal" value={totalGagalTransaksi} type="Gagal" /> 
       <Card title="Total Invoices" value={numberOfTransaksi} type="transaksi" />
        <Card
          title="Total Pelanggan"
          value={numberOfPelanggan}
          type="pelanggan"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <DetailPendapatanChart   />
        <LatestTransaksis />
         < LatestPakets/>
      </div>
    </main>
  );
}