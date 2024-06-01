import Pagination from '@/app/ui/transaksi/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/transaksi/table';
// import { CreateInvoice } from '@/app/ui/transaksi/buttons';
import { kanit } from '@/app/ui/fonts';
import { Suspense } from 'react';
// import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { fetchTransaksiPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transaksi | Acme Dashboard',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchTransaksiPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <div>
          <h1 className={`${kanit.className} text-xl`}>Transaksi Page</h1>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search transaksi..." />
        {/* <CreateInvoice /> */}
      </div>

      <Suspense key={query + currentPage} fallback>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}