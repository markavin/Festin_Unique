// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


  export function CardSkeleton() {
    return (
      <div className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}>
        <div className="flex p-5">
          <div className="h-5 w-5 rounded-md bg-gray-200" />
          <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
        </div>
        <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
          <div className="h-7 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    );
  }
 
  export function CardsSkeleton() {
    return (
      <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </>
    );
  }


export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}


export function TransaksiSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      {/* Remove image placeholder */}
      <div className="flex items-center">
        {/* Adjusted text placeholders */}
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      {/* Remove additional placeholder */}
    </div>
  );
}


export function PelangganSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      {/* Remove image placeholder */}
      <div className="flex items-center">
        {/* Adjusted text placeholders */}
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      {/* Remove additional placeholder */}
    </div>
  );
}


export function PaketSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}




export function LatestTransaksisSkeleton() {
  const shimmer = '';


  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
       
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}




export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestTransaksisSkeleton />
      </div>
    </>
  );
}


export function TableRowSkeleton() {
  return (
    <tr className="mb-2 w-full rounded-md bg-white p-4">
      {/* Customer Name and Image */}
      <td className="overflow-hidden whitespace-nowrap py-4 pl-6 pr-5">
        <div className="flex items-center text-center gap-3">
          {/* <div className="h-8 w-8 rounded-full bg-gray-100"></div> */}
          <div className="h-6 w-32 rounded bg-gray-100 text-center"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3 text-center">
        <div className="h-6 w-32 rounded bg-gray-100 text-center"></div>
      </td>
      {/* nohp */}
      <td className="whitespace-nowrap px-3 py-3 text-center">
        <div className="h-6 w-32 rounded bg-gray-100 text-center"></div>
      </td>
      {/* total transaksi */}
      <td className="whitespace-nowrap px-3 py-3 text-center">
        <div className="h-6 w-32 rounded bg-gray-100 text-center"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap px-2 py-2 text-center">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}


export function TableRowSkeletonpaket() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-24 rounded bg-gray-100"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}


export function TableRowSkeletontransaksi() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
     
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
       {/* Email */}
       <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}


export function TransaksiMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}


export function PelangganMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center text-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100 text-center"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}


export function PaketMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}


export function TransaksiTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <TransaksiMobileSkeleton />
            <TransaksiMobileSkeleton />
            <TransaksiMobileSkeleton />
            <TransaksiMobileSkeleton />
            <TransaksiMobileSkeleton />
            <TransaksiMobileSkeleton />
            <TransaksiMobileSkeleton />
            <TransaksiMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium  text-left pl-12">
                Package
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-left pl-12">
                Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-left ">
                Total Pay
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-left ">
                Transaction Date              
                  </th>
                <th scope="col" className="px-3 py-5 font-medium text-left">
                Payment Method
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-left pl-5 ">
                  Status
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-center pl-12 ">
                Action
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeletontransaksi />
              <TableRowSkeletontransaksi />
              <TableRowSkeletontransaksi />
              <TableRowSkeletontransaksi />
              <TableRowSkeletontransaksi />
              <TableRowSkeletontransaksi />
              <TableRowSkeletontransaksi />
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function PelangganTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <PelangganMobileSkeleton />
            <PelangganMobileSkeleton />
            <PelangganMobileSkeleton />
            <PelangganMobileSkeleton />
            <PelangganMobileSkeleton />
            <PelangganMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium text-left pl-12">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-left pl-12">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-left pl-12">
                  Phone Number
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-left ">
                  Total Transaction
                </th>
                <th scope="col" className="px-3 py-5 font-mediumtext-right pr-12">
                  Action
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function PaketTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <PaketMobileSkeleton />
            <PaketMobileSkeleton />
            <PaketMobileSkeleton />
            <PaketMobileSkeleton />
            <PaketMobileSkeleton />
            <PaketMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium text-left pl-12">
                  Package Image
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-left pl-12">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-left pl-6">
                  Duration
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-left pl-6">
                  Price
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-right pr-12">
                  Action
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeletonpaket />
              <TableRowSkeletonpaket />
              <TableRowSkeletonpaket />
              <TableRowSkeletonpaket />
              <TableRowSkeletonpaket />
              <TableRowSkeletonpaket  />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export function SearchTransaksiSkeleton() {
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <div className="peer block w-[1180px] h-[30px] rounded-sm  bg-gray-100 py-[9px] pl-10 outline-2">
      </div>
    </div>
  );
}


export function PageTransaksiSkeleton() {
  return (
    <>
    <div className="bg-gray-200 w-[160px] h-[40px] rounded-sm "></div>
    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
      <SearchTransaksiSkeleton />
      <CreatePaketSkeleton />
    </div>
       <div className="mt-6 flow-root">
        <TransaksiTableSkeleton />
      </div>
    </>
  );
}




export function SearchPelangganSkeleton() {
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <div className="peer block w-[1180px] h-[30px] rounded-sm  bg-gray-100 py-[9px] pl-10 outline-2">
      </div>
    </div>
  );
}


export function CreatePelangganSkeleton() {
  return (
    <div
      className="flex flex-wrap h-8 w-1/6 items-center rounded-lg bg-gray-300 py-[5px] text-sm font-medium text-white">
    </div>
  );
}


export function CreatePaketSkeleton() {
  return (
    <div
      className="flex flex-wrap h-8 w-1/6 items-center rounded-lg bg-gray-300 py-[5px] text-sm font-medium text-white">
    </div>
  );
}


export function PagePelangganSkeleton() {
  return (
    <>
     <div className={`${shimmer} relative mb-6 h-10 w-36 overflow-hidden rounded-md bg-gray-100`}/>
     <div className={`${shimmer} relative flex flex-wrap gap-4`}>
      <SearchPelangganSkeleton />
      <CreatePelangganSkeleton />
    </div>
        <PelangganTableSkeleton />
    </>
  );
}


export function SearchPaketSkeleton() {
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <div className="peer block w-[1180px] h-[30px] rounded-sm  bg-gray-100 py-[9px] pl-10 outline-2">
      </div>
    </div>
  );
}


export function PagePaketSkeleton() {
  return (
    <>
    <div className="bg-gray-200 w-[160px] h-[40px] rounded-sm "></div>
    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
      <SearchPaketSkeleton />
      <CreatePaketSkeleton />
    </div>
       <div className="mt-6 flow-root">
        <PaketTableSkeleton />
      </div>
    </>
  );
}


export function DetailPendapatanChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}


export function LatestTransaksiSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <TransaksiSkeleton />
          <TransaksiSkeleton />
          <TransaksiSkeleton />
          <TransaksiSkeleton />
          <TransaksiSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}


export function LatestPaketSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <PaketSkeleton />
          <PaketSkeleton />
          <PaketSkeleton />
          <PaketSkeleton />
          <PaketSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}


export function LatestPelangganSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <PelangganSkeleton />
          <PelangganSkeleton />
          <PelangganSkeleton />
          <PelangganSkeleton />
          <PelangganSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}


export function LatestPelanggansSkeleton() {
  const shimmer = '';


  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
       
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}


export function CreatePaketsSkeleton() {
  return (
   <div className="relative flex flex-1 flex shrink-0">
    <div className=" peer block w-[1000px] h-[30px] rounded-sm bg-white-200 py-[9px] pl-10 outline-2">


    </div>


   </div>
  );
}


export function CreateTransaksiSkeleton() {
  return (
   <div className="relative flex flex-1 flex shrink-0">
    <div className=" peer block w-[1000px] h-[30px] rounded-sm bg-white-200 py-[9px] pl-10 outline-2">


    </div>


   </div>
  );
}



