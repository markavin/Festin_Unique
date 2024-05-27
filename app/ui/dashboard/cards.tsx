import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { kanit } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  Berhasil: BanknotesIcon,
  pelanggan: UserGroupIcon,
  Gagal: ClockIcon,
  transaksi: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfTransaksi,
    numberOfPelanggan,
    totalBerhasilransaksi,
    totalGagalTransaksi,
  } = await fetchCardData();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Berhasil" value={totalBerhasilransaksi} type="Berhasil" />
      <Card title="Pending" value={totalGagalTransaksi} type="Gagal" />
      <Card title="Total Invoices" value={numberOfTransaksi} type="transaksi" />
      <Card
        title="Total Pelanggan"
        value={numberOfPelanggan}
        type="pelanggan"
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
  type: 'transaksi' | 'pelanggan' | 'Gagal' | 'Berhasil';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-400 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${kanit.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}