import { detailPendapatan } from './definitions';


export const formatCurrency = (amount: number) => {
  return (amount/1).toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
};


export const formatCurrencyy = (amount: number) => {
  return (amount/100).toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
};


export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};


export const generateYAxis = (revenue: detailPendapatan[]) => {
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000 ;


  // const increment = maxRevenue / 5;


  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`Rp${i / 1000}M`);
  }


  return { yAxisLabels, topLabel };
};


export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }


  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }


  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }


  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

