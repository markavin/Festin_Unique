import Pagination from '@/app/ui/pelanggan/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/pelanggan/table';
import { kanit } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CreateCustomers } from '@/app/ui/pelanggan/buttons';
// import {
//     CustomersTableSkeleton,
//     // CreateCustomersSkeleton,
//     // SearchCustomersSkeleton,
// } from '@/app/ui/skeletons';
// import { promise } from 'zod';
import { fetchPelangganPages } from '@/app/lib/data';

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
    const totalPages = await fetchPelangganPages(query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <div>
                    <h1 className={`${kanit.className} text-xl`}>Customers Page</h1>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Suspense key={query + currentPage} fallback>
                    <Search placeholder='search reservations' />
                </Suspense>
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