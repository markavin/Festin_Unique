import Image from 'next/image';
// import { up, DeleteInvoice } from '@/app/ui/transaksi/buttons';
import { formatDateToLocal, formatCurrency} from '@/app/lib/utils';
import { fetchfilteredPaket } from '@/app/lib/data';
import { DeletePaket, UpdatePaket } from './buttons';

export default async function PaketsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const paket = await fetchfilteredPaket(query );
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
          {paket?.map((paket) => (
              <div
                key={paket.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={paket.gambar_paket}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${paket.nama_paket}'s profile picture`}
                      />
                      <p>{paket.nama_paket}</p>
                      <p className="text-sm text-gray-500">
                        {paket.durasi}
                      </p>
                    </div>
                    {/* <TransaksiStatus status={transaksiItem.status} /> */}
                  </div>
                  {/* <TransaksiMetodeBayar metode_bayar={transaksiItem.metode_bayar} /> */}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                  <p className="text-xl font-medium">
                      {paket.harga}
                    </p>
                    {/* <p>{formatDateToLocal(transaksiItem.tanggal_transaksi)}</p> */}
                  </div>
                  <div className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
                    <UpdatePaket id={paket.id} />
                    <DeletePaket id={paket.id} />
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
                  Harga
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                 Durasi
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
            {paket?.map((paket) => (
                <tr
                  key={paket.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={paket.gambar_paket}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${paket.nama_paket}'s profile picture`}
                      />
                      <p>{paket.nama_paket}</p>
                      <p className="text-sm text-gray-500">
                        {paket.nama_paket}
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {paket.nama_paket}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {paket.harga}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {paket.durasi}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                    <UpdatePaket id={paket.id} />
                    <DeletePaket id={paket.id} />
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
