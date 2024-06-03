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
            <div className="overflow-hidden rounded-lg border border-gray-300">
              <div className="md:hidden">
                {paket?.map((paket) => (
                  <div
                    key={paket.id}
                    className="mb-2 w-full rounded-lg bg-white p-4 border-b border-gray-300"
                  >
                    <div className="flex items-center justify-between pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center justify-center h-20 w-20 rounded-full overflow-hidden bg-gray-100">
                            <Image
                              src={paket.gambar_paket}
                              className="object-cover"
                              layout="fill"
                              objectFit="cover"
                              alt=''
                            />
                          </div>
                          <p className="ml-2 text-sm text-gray-500">
                            {paket.durasi}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {paket.harga}
                        </p>
                        <div className="flex gap-2">
                          <UpdatePaket id={paket.id} />
                          <DeletePaket id={paket.id} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-lg bg-white border border-gray-300 text-gray-900 md:table">
                <thead className="bg-gradient-to-b from-red-800 to-amber-950 to-red-800 text-left text-sm text-white font-normal">
                  <tr>
                    <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                      Gambar Paket
                    </th>
                    <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                      Nama
                    </th>
                    <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                      Harga
                    </th>
                    <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                      Durasi
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
                        <div className="flex items-center justify-center h-12 w-12 mx-auto">
                          <Image
                            src={paket.gambar_paket}
                            className="object-cover rounded-full"
                            width={48}
                            height={48}
                            alt='54  '
                          />
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                        {paket.nama_paket}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                        {paket.harga}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                        {paket.durasi}
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
