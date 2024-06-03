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
  const transaksi = await fetchFilteredTransaksi(query );
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {transaksi?.map((transaksiItem) => (
              <div
                key={transaksiItem.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={transaksiItem.gambar_paket}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${transaksiItem.nama_paket}'s profile picture`}
                      />
                      <p>{transaksiItem.nama_paket}</p>
                      <p className="text-sm text-gray-500">
                        {transaksiItem.name}
                      </p>
                    </div>
                    <TransaksiStatus status={transaksiItem.status} />
                  </div>
                  <TransaksiMetodeBayar metode_bayar={transaksiItem.metode_bayar} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(transaksiItem.total_bayar)}
                    </p>
                    <p>{formatDateToLocal(transaksiItem.tanggal_transaksi)}</p>
                  </div>
                  <div className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
                    <UpdateTransaksi id={transaksiItem.id} />
                    <DeleteTransaksi id={transaksiItem.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Paket
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Nama
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Bayar
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Tanggal Transaksi
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Metode Bayar
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {transaksi?.map((transaksiItem) => (
                <tr
                  key={transaksiItem.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={transaksiItem.gambar_paket}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${transaksiItem.nama_paket}'s profile picture`}
                      />
                      <p>{transaksiItem.nama_paket}</p>
                      <p className="text-sm text-gray-500">
                        {transaksiItem.name}
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {transaksiItem.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(transaksiItem.total_bayar)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(transaksiItem.tanggal_transaksi)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <TransaksiMetodeBayar metode_bayar={transaksiItem.metode_bayar} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <TransaksiStatus status={transaksiItem.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
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
