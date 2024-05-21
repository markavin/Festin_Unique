// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type pelanggan = {
  id: string;
  name: string;
  email: string;
  nohp: string;
};

export type paket = {
  id: string;
  nama_paket: string;
  durasi: string;
  harga : number;
  gambar_paket : string;
};

export type transaksi = {
  id: string;
  pelanggan_id: string;
  paket_id : string;
  tanggal_transaksi: string;
  total_bayar: number;
  metode_bayar: 'Tunai' | 'Qris' | 'Debit';
  status: 'Berhasil' | 'Gagal';
};

// export type reservasi = {
//   id: string;
//   pelanggan_id: string;
//   tanggal_reservasi: string;
//   waktu_reservasi: string;
//   jumlah_orang: number;
// };



export type detailPendapatan = {
  month: string;
  revenue: number;
};

// export type detailTransaksi = {
//   id: string;
//   transaksi_id: string;
//   menu_id : string;
//   jumlah : number;
// };

// export type LatestInvoice = {
//   id: string;
//   name: string;
//   image_url: string;
//   email: string;
//   amount: string;
// };

// // The database returns a number for amount, but we later format it to a string with the formatCurrency function
// export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
//   amount: number;
// };

// export type InvoicesTable = {
//   id: string;
//   customer_id: string;
//   name: string;
//   email: string;
//   image_url: string;
//   date: string;
//   amount: number;
//   status: 'pending' | 'paid';
// };

// export type CustomersTableType = {
//   id: string;
//   name: string;
//   email: string;
//   image_url: string;
//   total_invoices: number;
//   total_pending: number;
//   total_paid: number;
// };

// export type FormattedCustomersTable = {
//   id: string;
//   name: string;
//   email: string;
//   image_url: string;
//   total_invoices: number;
//   total_pending: string;
//   total_paid: string;
// };

// export type CustomerField = {
//   id: string;
//   name: string;
// };

// export type InvoiceForm = {
//   id: string;
//   customer_id: string;
//   amount: number;
//   status: 'pending' | 'paid';
// };
