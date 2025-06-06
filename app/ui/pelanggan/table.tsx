import { kanit } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { fetchFilteredPelanggan } from '@/app/lib/data';
import { formatCurrency } from '@/app/lib/utils';
import { UpdatePelanggan, DeletePelanggan } from './buttons';


export default async function PelangganTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const pelanggans = await fetchFilteredPelanggan(query, currentPage);


  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-lg border border-gray-300">
              <div className="md:hidden">
                {pelanggans.map((pelanggan) => (
                  <div
                    key={pelanggan.id}
                    className="mb-2 w-full rounded-lg bg-white p-4 border-b border-gray-300"
                  >
                    <div className="flex items-center justify-between pb-4">
                      <div>
                        <div className="mb-2">
                          <p className="text-sm font-medium text-gray-900">{pelanggan.name}</p>
                        </div>
                        <p className="text-sm text-gray-500">{pelanggan.email}</p>
                        <p className="text-sm text-gray-500">{pelanggan.nohp}</p>
                        <p className="text-sm text-gray-500">
                          {(pelanggan.total_transaksi)}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <UpdatePelanggan id={pelanggan.id} />
                        <DeletePelanggan id={pelanggan.id} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-lg bg-white border border-gray-300 text-gray-900 md:table">
                <thead className="bg-gradient-to-b from-red-800 to-amber-950 text-white">
                  <tr>
                    <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                      Name
                    </th>
                    <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                      Email
                    </th>
                    <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                      Phone Number
                    </th>
                    <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                      Total Transaction
                    </th>
                    <th scope="col" className="border border-red-950 px-4 py-3 font-medium text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pelanggans.map((pelanggan) => (
                    <tr key={pelanggan.id} className="group">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                        {pelanggan.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                        {pelanggan.email}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                        {pelanggan.nohp}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                        {(pelanggan.total_transaksi)}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                        <div className="flex justify-center items-center gap-3">
                          <UpdatePelanggan id={pelanggan.id} />
                          <DeletePelanggan id={pelanggan.id} />
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





