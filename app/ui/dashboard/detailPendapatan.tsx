import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { kanit } from '@/app/ui/fonts';
import { fetchDetailPendapatan } from '@/app/lib/data';
import { bebas_Neue } from '../fontz';

export default async function DetailPendapatanChart() {
  const detailpendapatan = await fetchDetailPendapatan();
  const chartHeight = 350;

  if (!detailpendapatan || detailpendapatan.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  const maxRevenue = 100000000; // 100 million
  const yAxisLabels = Array.from({ length: 5 }, (_, i) => `${(i * maxRevenue) / 4 / 1000000}M`);

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${bebas_Neue.className} mb-4 text-xl md:text-2xl`}>
        Detail Pendapatan Terbaru
      </h2>
      <div className="rounded-xl bg-gradient-to-b from-red-900 to-gray-950 p-4">
        <div className="sm:grid-cols-13 mt-0 grid g
        rid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-black-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label, index) => (
              <p key={index}>{label}</p>
            )).reverse()}
          </div>

          {detailpendapatan.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300 bg-gradient-to-b from-amber-900 to-gray-950"
                style={{
                  height: `${(chartHeight / maxRevenue) * Math.min(month.revenue, maxRevenue)}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-black-400 sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-black-500" />
         <strong> <h3 className="ml-2 text-sm text-white">Last 12 months</h3></strong>
        </div>
      </div>
    </div>
  );
}

// utils.js

