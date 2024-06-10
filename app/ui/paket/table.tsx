import Image from 'next/image';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchfilteredPaket } from '@/app/lib/data';
import { DeletePaket, UpdatePaket } from './buttons';

export default async function PaketsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const paket = await fetchfilteredPaket(query);

  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden bg-white rounded-lg border border-gray-300">
              <div className="md:hidden">
                {paket?.map((paket) => (
                  <div
                    key={paket.id}
                    className="mb-2 w-full rounded-lg bg-white p-4 border-b border-gray-300"
                  >
                    <div className="flex items-center justify-between pb-4">
                      <div className="flex items-center">
                        <div className="relative w-14 h-14 overflow-hidden rounded-full">
                          <Image
                            src={paket.gambar_paket}
                            layout="fill"
                            objectFit="cover"
                            alt={`${paket.nama_paket}'s profile picture`}
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-lg font-semibold">{paket.nama_paket}</p>
                          <p className="text-sm text-gray-500">{paket.durasi}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{paket.harga}</p>
                        <div className="flex gap-2">
                          <UpdatePaket id={paket.id} />
                          <DeletePaket id={paket.id} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="min-w-full divide-y divide-gray-200 text-gray-900 md:table">
                <thead className="bg-gradient-to-b from-red-800 to-amber-950 text-white">
                  <tr>
                    <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                      Gambar Paket
                    </th>
                    <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                      Nama
                    </th>
                    <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                      Durasi
                    </th>
                    <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                      Harga
                    </th>
                    <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paket?.map((paket) => (
                    <tr key={paket.id} className="group">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                        <div className="flex items-center justify-center">
                          <div className="relative w-14 h-14 overflow-hidden rounded-full">
                            <Image
                              src={paket.gambar_paket}
                              layout="fill"
                              objectFit="cover"
                              alt={`${paket.nama_paket}'s profile picture`}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm font-semibold   text-center">
                        {paket.nama_paket}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                        {paket.durasi}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                        {paket.harga}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                        <div className="flex justify-center gap-3">
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
      </div>
    </div>
  );
}
