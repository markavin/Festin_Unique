// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];
// ksbdvjb
const pelanggan = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'ismail bin mail',
    email: 'mail@mail.com',
    nohp: '087704948222',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'upin',
    email: 'upin@robinson.com',
    nohp: '082372378382',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'sinchan',
    email: 'sinchan@sai.com',
    nohp: '088734984567',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Doraemon',
    email: 'Doray@tey.com',
    nohp: '088376827435',
  },
  

];
const paket = [
  {
    // id: '1' ,
    nama_paket: 'Paket Reguler',
    durasi: '90 menit',
    harga: 99000,
    gambar_paket: '/paket/paketreguler.jpg',
  },
  {
    // id: '2' ,
    nama_paket: 'Paket Premium',
    durasi: '95 menit',
    harga: 149000,
    gambar_paket: '/paket/paketpremium.jpg',
  },
  {
    // id : '3',
    nama_paket: 'Paket Supreme',
    durasi: '100 menit',
    harga: 250000,
    gambar_paket: '/paket/paketsupreme.jpg',
  },
  {
    // id : '4',
    nama_paket: 'Paket Couple',
    durasi: '100 menit',
    harga: 265000,
    gambar_paket: '/paket/paketcp.jpg',
  },
  {
    // id : '5',
    nama_paket: 'Paket Trio',
    durasi: '120 menit',
    harga: 400000,
    gambar_paket: '/paket/pakettrio.jpg',
  },
  {
    // id: '6' ,
    nama_paket: 'Paket Keluarga',
    durasi: '150 menit',
    harga: 450000,
    gambar_paket: '/paket/paketKeluarga.jpg',
  },
]

const transaksi = [
  {
    // id: '72367236hsdvw73',
    pelanggan_id: pelanggan[0].id,
    paket_id: 'b66baf09-2917-4cc4-b184-a5eb200b8353',
    tanggal_transaksi: '2022-12-06',
    total_bayar: 149000,
    metode_bayar: 'Tunai', 
    status: 'Berhasil',
  },
  {
    // id: '5356r4hgsdcgwc6',
    pelanggan_id: pelanggan[1].id,
    paket_id: '95de6dab-cb39-47f2-b730-a2adb3982edf',
    tanggal_transaksi: '2022-11-14',
    total_bayar: 400000,
    metode_bayar: 'Debit', 
    status: 'Berhasil',
  },
  {
    // id: '62r32hsvch3266b',
    pelanggan_id: pelanggan[3].id,
    paket_id: 'd6b836bb-4728-4cff-95a6-19341b10dcac',
    tanggal_transaksi: '2022-10-06',
    total_bayar: 250000,
    metode_bayar: 'Qris', 
    status: 'Gagal',
  },
  {
    // id: '7634gshgd76hsbf',
    pelanggan_id: pelanggan[2].id,
    paket_id: '45d1b7ad-f9e4-48f9-a81f-61abdf517c83',
    tanggal_transaksi: '2022-8-14',
    total_bayar: 450000,
    metode_bayar: 'Qris', 
    status: 'Berhasil',
  },
  
];

// const reservasi = [
//   {
//     // id: 'jhwdbwuigfgbhj38',
//     pelanggan_id : pelanggan[0].id,
//     tanggal_reservasi: '2023-06-10',
//     waktu_reservasi: '18:30:00',
//     jumlah_orang: 2,
//   },
//   {
//     // id: 'oishdun3ehrheg75',
//     pelanggan_id : pelanggan[1].id,
//     tanggal_reservasi: '2023-10-10',
//     waktu_reservasi: '16:30:00',
//     jumlah_orang: 2,
//   },
//   {
//     // id: 'lqosdduq3yrv3733',
//     pelanggan_id : pelanggan[3].id,
//     tanggal_reservasi: '2023-08-14',
//     waktu_reservasi: '10:30:00',
//     jumlah_orang: 2,
//   },
//   {
//     // id: 'oedij2he838487be',
//     pelanggan_id : pelanggan[2].id,
//     tanggal_reservasi: '2023-09-15',
//     waktu_reservasi: '19:30:00',
//     jumlah_orang: 2,
//   },
// ]
// snbdvhjsw

// const detailTransaksi = [
//   {
//     transaksi_id: "863bb514-f2db-45b8-beb4-aa9634c421ad",
//     menu_id: "c363e658-0294-423c-968b-02f7a5c7cbb2",
//     jumlah: 2,
//   },
//   {
//     transaksi_id: "863bb514-f2db-45b8-beb4-aa9634c421ad",
//     menu_id: "c363e658-0294-423c-968b-02f7a5c7cbb2",
//     jumlah: 1,
//   },
//   {
//     transaksi_id: "863bb514-f2db-45b8-beb4-aa9634c421ad",
//     menu_id: "c363e658-0294-423c-968b-02f7a5c7cbb2",
//     jumlah: 3,
//   },
//   {
//     transaksi_id: "863bb514-f2db-45b8-beb4-aa9634c421ad",
//     menu_id: "c363e658-0294-423c-968b-02f7a5c7cbb2",
//     jumlah: 4,
//   },
//   // Add more detail transactions as needed
// ];


const detailPendapatan = [
  { month: 'Jan', revenue: 20000000 },
  { month: 'Feb', revenue: 25000000 },
  { month: 'Mar', revenue: 30000000 },
  { month: 'Apr', revenue: 45000000 },
  { month: 'May', revenue: 50000000 },
  { month: 'Jun', revenue: 50000000 },
  { month: 'Jul', revenue: 35000000 },
  { month: 'Aug', revenue: 20000000 },
  { month: 'Sep', revenue: 60000000 },
  { month: 'Oct', revenue: 25000000 },
  { month: 'Nov', revenue: 15000000 },
  { month: 'Dec', revenue: 90000000 },
];

module.exports = {
  users,
  pelanggan,
  paket,
  transaksi,
  // reservasi,
  // detailTransaksi,
  detailPendapatan,
};
