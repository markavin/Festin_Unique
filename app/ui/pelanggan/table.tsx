import { kanit } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { FormattedPelangganTable } from '@/app/lib/definitions';
import { fetchFilteredPelanggan } from '@/app/lib/data';

export default async function PelangganTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const pelanggans = await fetchFilteredPelanggan(query);
  return (
    <div className="w-full">
      {/* <h1 className={${kanit.className} mb-8 text-xl md:text-2xl}>
        Pelanggan
      </h1> */}
      {/* <Search placeholder="Search Pelanggan..." /> */}
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {pelanggans.map((pelanggan) => (
                  <div
                    key={pelanggan.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2">
                          <p>{pelanggan.name}</p>
                        </div>
                        <p className="text-sm text-gray-500">
                          {pelanggan.email}
                        </p>
                        <p className="text-sm text-gray-500">
                          {pelanggan.nohp}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      ID
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Nama
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Email
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      No HP
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {pelanggans.map((pelanggan) => (
                    <tr key={pelanggan.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        {pelanggan.id}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {pelanggan.name}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {pelanggan.email}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {pelanggan.nohp}
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