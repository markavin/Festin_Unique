import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  DocumentIcon
} from '@heroicons/react/24/outline';
import { kanit } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  Berhasil: BanknotesIcon,
  pelanggan: UserGroupIcon,
  paket: DocumentIcon,
  Gagal: ClockIcon,
  transaksi: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfTransaksi,
    numberOfPelanggan,
    numberOfPaket,
    totalBerhasilransaksi,
    totalGagalTransaksi,
  } = await fetchCardData();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Berhasil" value={totalBerhasilransaksi} type="Berhasil" />
      <Card title="Gagal" value={totalGagalTransaksi} type="Gagal" />
      <Card title="Total Transaksi" value={numberOfTransaksi} type="transaksi" />
      <Card
        title="Total Pelanggan"
        value={numberOfPelanggan}
        type="pelanggan"
      />
      <Card
        title="Total Paket"
        value={numberOfPaket}
        type="paket"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'transaksi' | 'pelanggan' | 'Gagal' | 'Berhasil' | 'paket';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gradient-to-b from-red-900 to-gray-950 p-2">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-white" /> : null}
        <h3 className="ml-2 text-sm font-medium text-white">{title}</h3>
      </div>
      <p
        className={`${kanit.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-gray-950 text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}