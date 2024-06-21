import Pagination from '@/app/ui/transaksi/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/transaksi/table';
// import { CreateInvoice } from '@/app/ui/transaksi/buttons';
import { kanit } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { SearchTransaksiSkeleton, TransaksiTableSkeleton,CreateTransaksiSkeleton } from '@/app/ui/skeletons';
import { fetchTransaksiPages } from '@/app/lib/data';
import { Metadata } from 'next';
import { CreateTransaksi } from '@/app/ui/transaksi/buttons';


export const metadata: Metadata = {
  title: 'Transaksi | Festin Unique Dashboard',
};


export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  // console.log('Fetching revenue data...');
  //   await new Promise((resolve => setTimeout(resolve, 3000)));
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;


  const totalPages = await fetchTransaksiPages(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${kanit.className} text-2xl`}>List of Transaction
        </h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8 hover:from-red-700 hover:to-amber-600">
        <Suspense fallback={<SearchTransaksiSkeleton />}>
          <Search placeholder="Search transactions..." />
        </Suspense>
        <Suspense fallback={<CreateTransaksiSkeleton />}>
          <CreateTransaksi />
        </Suspense>
      </div>
      <Suspense key={query + currentPage} fallback={<TransaksiTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

