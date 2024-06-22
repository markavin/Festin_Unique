import Pagination from '@/app/ui/paket/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/paket/table';
// import { CreateInvoice } from '@/app/ui/transaksi/buttons';
import { kanit } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { PaketTableSkeleton, SearchPaketSkeleton,CreatePaketsSkeleton } from '@/app/ui/skeletons';
import { fetchPaketPages } from '@/app/lib/data';
import { Metadata } from 'next';
import { CreatePaket } from '@/app/ui/paket/buttons';

export const metadata: Metadata = {
  title: 'Paket | Festin Unique Dashboard',
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

  const totalPages = await fetchPaketPages(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${kanit.className} text-2xl`}>Paket
        </h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense fallback={<SearchPaketSkeleton />}>
          <Search placeholder="Search paket..." />
        </Suspense>
        <Suspense fallback={<CreatePaketsSkeleton />}>
          <CreatePaket />
        </Suspense>
      </div>
      <Suspense key={query + currentPage} fallback={<PaketTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}