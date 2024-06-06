// 'use client';

// import { PelangganField, TransaksiForm } from '@/app/lib/definitions';
// import {
//   CheckIcon,
//   ClockIcon,
//   CurrencyDollarIcon,
//   UserCircleIcon,
// } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import { Button } from '@/app/ui/button';
// import { updateTransaksi } from '@/app/lib/actions';

// export default function EditTransaksiForm({
//   transaksi,
//   pelanggans,
// }: {
//   transaksi: TransaksiForm;
//   pelanggans: PelangganField[];
// }) {
//   const updateTransaksiWithId = updateTransaksi.bind(null, transaksi.id);
//   return (
//     <form action={updateTransaksiWithId}>
//       <div className="rounded-md bg-gray-50 p-4 md:p-6">
//         {/* Pelanggan Name */}
//         <div className="mb-4">
//           <label htmlFor="pelanggan" className="mb-2 block text-sm font-medium">
//             Choose pelanggan
//           </label>
//           <div className="relative">
//             <select
//               id="pelanggan"
//               name="pelangganId"
//               className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               defaultValue={transaksi.pelanggan_id}
//             >
//               <option value="" disabled>
//                 Select a pelanggan
//               </option>
//               {pelanggans.map((pelanggan) => (
//                 <option key={pelanggan.id} value={pelanggan.id}>
//                   {pelanggan.name}
//                 </option>
//               ))}
//             </select>
//             <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
//           </div>
//         </div>

//         {/* transaksi Amount */}
//         <div className="mb-4">
//           <label htmlFor="total_bayar" className="mb-2 block text-sm font-medium">
//             Masukan total Bayar
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="total_bayar"
//                 name="total_bayar"
//                 type="number"
//                 step="0.01"
//                 defaultValue={transaksi.total_bayar}
//                 placeholder="Enter USD total_bayar"
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//               <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>

//         {/* transaksi Status */}
//         <fieldset>
//           <legend className="mb-2 block text-sm font-medium">
//             Set the transaksi status
//           </legend>
//           <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
//             <div className="flex gap-4">
//               <div className="flex items-center">
//                 <input
//                   id="Gagal"
//                   name="status"
//                   type="radio"
//                   value="Gagal"
//                   defaultChecked={transaksi.status === 'Gagal'}
//                   className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
//                 />
//                 <label
//                   htmlFor="Gagal"
//                   className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
//                 >
//                   Gagal <ClockIcon className="h-4 w-4" />
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   id="Berhasil"
//                   name="status"
//                   type="radio"
//                   value="Berhasil"
//                   defaultChecked={transaksi.status === 'Berhasil'}
//                   className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
//                 />
//                 <label
//                   htmlFor="Berhasil"
//                   className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
//                 >
//                   Berhasil <CheckIcon className="h-4 w-4" />
//                 </label>
//               </div>
//             </div>
//           </div>
//         </fieldset>
//       </div>
//       <div className="mt-6 flex justify-end gap-4">
//         <Link
//           href="/dashboard/transaksi"
//           className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
//         >
//           Cancel
//         </Link>
//         <Button type="submit">Edit Transaksi</Button>
//       </div>
//     </form>
//   );
// }
