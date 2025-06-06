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


export type LatestTransaksi = {
  id: string;
  name: string;
  email:string;
  harga : number;
  nama_paket : string;
  gambar_paket: string;
  total_bayar: string;
  status: 'Berhasil' | 'Gagal';
};


export type LatestPaket= {
  id: string;
  nama_paket: string;
  durasi: string;
  harga : number;
  gambar_paket : string;
};


export type LatestPelanggans= {
  id: string;
  name: string;
  email: string;
  nohp: string;
  total_transaksi: number;
};




// // The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestTransaksiRaw = Omit<LatestTransaksi, 'total_bayar'> & {
  total_bayar: number;
};


export type LatestPaketRaw = Omit<LatestPaket, 'harga'> & {
  harga: number;
};


export type LatestPelangganRaw = Omit<LatestPelanggans, 'total_transaksi'> & {
  total_transaksi: number;
};


export type TransaksiTable = {
  id: string;
  nama_paket: string;
  durasi: string;
  harga : number;
  gambar_paket : string;
};
export type TransaksiTableType = {
  id: string;
  pelanggan_id: string;
  name: string;
  paket_id : string;
  nama_paket: string;
  gambar_paket: string;
  harga : number;
  tanggal_transaksi: string;
  total_bayar: number;
  metode_bayar: 'Tunai' | 'Qris' | 'Debit';
  status: 'Berhasil' | 'Gagal';
};
export type PelangganTable = {
  id: string;
  name: string;
  email: string;
  nohp: string;
};


export type PelangganTableType = {
  id: string;
  name: string;
  email: string;
  nohp: string;
  total_transaksi: number;
  total_Berhasil:number;
  total_Gagal :number;
};
export type PaketTable = {
  id: string;
  nama_paket: string;
  durasi: string;
  harga : number;
  gambar_paket : string;
};


export type PaketTableType = {
  id: string;
  nama_paket: string;
  durasi: string;
  harga : number;
  gambar_paket : string;
};


export type FormattedPelangganTable = {
  id: string;
  name: string;
  email: string;
  nohp: string;
  total_transaksi: number;
  total_Berhasil:number;
  total_Gagal :number;
};


export type PelangganField = {
  id: string;
  name: string;
  email: string;
  nohp: string;
};


export type PaketField = {
  id: string;
  nama_paket: string;
  durasi: string;
  harga: number;
  gambar_paket: string;
};


export type TransaksiField = {
  id: string;
  pelanggan_id: string;
  paket_id : string;
  tanggal_transaksi: string;
  total_bayar: number;
  metode_bayar: 'Tunai' | 'Qris' | 'Debit';
  status: 'Berhasil' | 'Gagal';
};


export type TransaksiForm = {
  id: string;
  pelanggan_id: string;
  paket_id : string;
  total_bayar: number;
  metode_bayar: 'Tunai' | 'Qris' | 'Debit';
  status: 'Berhasil' | 'Gagal';
};


export type PelangganForm = {
  id: string;
  name: string;
  email: string;
  nohp: string;
};


export type PaketForm = {
  id: string;
  nama_paket: string;
  durasi: string;
  harga : number;
  gambar_paket : string;
};


export type Transaksi = {
  id: string; // Will be created on the database
  pelanggan_id: string;
  total_bayar: number; // Stored in cents
  status: 'Gagal' | 'Berhasil';
  date: string;
};

