import Image from 'next/image';
import { UpdateTransaksi, DeleteTransaksi } from '@/app/ui/transaksi/buttons';
import TransaksiStatus from '@/app/ui/transaksi/status';
import TransaksiMetodeBayar from '@/app/ui/transaksi/metodebayar';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredTransaksi } from '@/app/lib/data';

export default async function TransaksiTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const transaksi = await fetchFilteredTransaksi(query, currentPage);

  console.log(transaksi); // Add this line to check the structure of transaksi

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden bg-white shadow-md rounded-lg">
          <div className="md:hidden">
            {transaksi?.map((transaksiItem) => (
              <div
                key={transaksiItem.id}
                className="mb-2 w-full rounded-lg bg-white p-4 border-b border-gray-300"
              >
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-lg font-semibold">{transaksiItem.name}</p>
                      <p className="text-lg font-semibold">{transaksiItem.nama_paket}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <TransaksiStatus status={transaksiItem.status} />
                    <TransaksiMetodeBayar metode_bayar={transaksiItem.metode_bayar} />
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(transaksiItem.harga)}
                    </p>
                    <p className="text-sm text-gray-500">{formatDateToLocal(transaksiItem.tanggal_transaksi)}</p>
                  </div>
                  <div className="flex gap-2">
                    <UpdateTransaksi id={transaksiItem.id} />
                    <DeleteTransaksi id={transaksiItem.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="min-w-full divide-y divide-gray-200 text-gray-900 md:table">
            <thead className="bg-gradient-to-b from-red-800 to-amber-950 text-white">
              <tr>
                <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                  Paket
                </th>
                <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                  Nama
                </th>
                <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                  Total Bayar
                </th>
                <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                  Tanggal Transaksi
                </th>
                <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                  Metode Bayar
                </th>
                <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                  Status
                </th>
                <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transaksi?.map((transaksiItem) => (
                <tr key={transaksiItem.id} className="group">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">
                    <p className="text-sm text-gray-900 font-semibold">{transaksiItem.nama_paket}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">
                    <p className="text-sm text-gray-900 font-semibold">{transaksiItem.name}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">
                    <p className="text-sm text-gray-900">{formatCurrency(transaksiItem.harga)}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">
                    <p className="text-sm text-gray-900">{formatDateToLocal(transaksiItem.tanggal_transaksi)}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">
                    <TransaksiMetodeBayar metode_bayar={transaksiItem.metode_bayar} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">
                    <TransaksiStatus status={transaksiItem.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">
                    <div className="flex gap-2">
                      <UpdateTransaksi id={transaksiItem.id} />
                      <DeleteTransaksi id={transaksiItem.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
