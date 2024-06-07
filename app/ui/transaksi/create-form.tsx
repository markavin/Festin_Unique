import { PaketField, PelangganField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  EnvelopeIcon,
  InboxArrowDownIcon,
  QrCodeIcon,
  BanknotesIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createTransaksi } from '@/app/lib/actions';
import { DocumentIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid';

export default function Form({ pelanggans, pakets }: { pelanggans: PelangganField[], pakets: PaketField[] }) {
  return (
    <form action={createTransaksi}>
      <div className="rounded-md bg-gradient-to-b from-gray-700 to-red-950 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="pelanggan" className="mb-2 block text-sm font-medium text-white">
            Pilih Pelanggan
          </label>
          <div className="relative">
            <select
              id="pelanggan"
              name="pelangganId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                pilih pelanggan
              </option>
              {pelanggans.map((pelanggan) => (
                <option key={pelanggan.id} value={pelanggan.id}>
                  {pelanggan.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-900" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="paket" className="mb-2 block text-sm font-medium text-white">
            Pilih Paket
          </label>
          <div className="relative">
            <select
              id="paket"
              name="paketId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                pilih paket
              </option>
              {pakets.map((paket) => (
                <option key={paket.id} value={paket.id}>
                  {paket.nama_paket}
                </option>
              ))}
            </select>
            <DocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="total_bayar" className="mb-2 block text-sm font-medium text-white">
            Total Bayar
          </label>
          <div className="relative">
            <select
              id="total_bayar"
              name="total_bayar"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Pilih harga paket
              </option>
              {pakets.map((paket) => (
                <option key={paket.id} value={paket.harga}>
                  {paket.harga}
                </option>
              ))}
            </select>
            <BanknotesIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium text-white">
            Pilih metode pembayaran
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-6">
              <div className="flex items-center">
                <input
                  id="Qris"
                  name="metode_bayar"
                  type="radio"
                  value="Qris"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="Qris"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Qris <QrCodeIcon className="h-4 w-4 bg-gray-100" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="Tunai"
                  name="metode_bayar"
                  type="radio"
                  value="Tunai"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="Tunai"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-lime-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Tunai <BanknotesIcon className="h-4 w-4 text-white" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="Debit"
                  name="metode_bayar"
                  type="radio"
                  value="Debit"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="Debit"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-blue-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Debit <CreditCardIcon className="h-4 w-4 text-white" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 block text-sm font-medium text-white">
            Pilih status pembayaran
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="Berhasil"
                  name="status"
                  type="radio"
                  value="Berhasil"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="Berhasil"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Berhasil <CheckIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="Gagal"
                  name="status"
                  type="radio"
                  value="Gagal"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="Gagal"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Gagal <ExclamationCircleIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/transaksi"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit" className="bg-gradient-to-b from-gray-800 to-red-900 text-white hover:bg-amber-600">
        Create Transaksi
        </Button>
      </div>
    </form>
  );
}
