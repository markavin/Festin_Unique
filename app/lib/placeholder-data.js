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

const transaksi = [
  {
    // id: '72367236hsdvw73',
    pelanggan_id: pelanggan[0].id,
    tanggal_transaksi: '2022-12-06',
    total: 15795,
    status: 'pending',
  },
  {
    // id: '5356r4hgsdcgwc6',
    pelanggan_id: pelanggan[1].id,
    tanggal_transaksi: '2022-11-14',
    total: 20348,
    status: 'pending',
  },
  {
    // id: '62r32hsvch3266b',
    pelanggan_id: pelanggan[3].id,
    tanggal_transaksi: '2022-10-06',
    total: 15795,
    status: 'paid',
  },
  {
    // id: '7634gshgd76hsbf',
    pelanggan_id: pelanggan[2].id,
    tanggal_transaksi: '2022-8-14',
    total: 20348,
    status: 'pending',
  },
  
];

const reservasi = [
  {
    // id: 'jhwdbwuigfgbhj38',
    pelanggan_id : pelanggan[0].id,
    tanggal_reservasi: '2023-06-10',
    waktu_reservasi: '18:30:00',
    jumlah_orang: 2,
  },
  {
    // id: 'oishdun3ehrheg75',
    pelanggan_id : pelanggan[1].id,
    tanggal_reservasi: '2023-10-10',
    waktu_reservasi: '16:30:00',
    jumlah_orang: 2,
  },
  {
    // id: 'lqosdduq3yrv3733',
    pelanggan_id : pelanggan[3].id,
    tanggal_reservasi: '2023-08-14',
    waktu_reservasi: '10:30:00',
    jumlah_orang: 2,
  },
  {
    // id: 'oedij2he838487be',
    pelanggan_id : pelanggan[2].id,
    tanggal_reservasi: '2023-09-15',
    waktu_reservasi: '19:30:00',
    jumlah_orang: 2,
  },
]
// snbdvhjsw
const menu = [
  {
     id: '1234',
    nama_menu: 'Nasi Goreng',
    harga: 25000,
    gambar_menu: '/menu/nasigoreng.jpg',
  },
  {
    // id: '56789',
    nama_menu: 'Mie goreng',
    harga: 22000,
    gambar_menu: '/menu/miegoreng.jpg',
  },
  {
    // id: '26653',
    nama_menu: 'Mie ayam',
    harga: 18000,
    gambar_menu: '/menu/mieayam.jpg',
  },
  {
    // id: '84754',
    nama_menu: 'Bakso',
    harga: 20000,
    gambar_menu: '/menu/bakso.jpg',
  },
]

const detailTransaksi = [
  {
    transaksi_id: "863bb514-f2db-45b8-beb4-aa9634c421ad",
    menu_id: "c363e658-0294-423c-968b-02f7a5c7cbb2",
    jumlah: 2,
  },
  {
    transaksi_id: "863bb514-f2db-45b8-beb4-aa9634c421ad",
    menu_id: "c363e658-0294-423c-968b-02f7a5c7cbb2",
    jumlah: 1,
  },
  {
    transaksi_id: "863bb514-f2db-45b8-beb4-aa9634c421ad",
    menu_id: "c363e658-0294-423c-968b-02f7a5c7cbb2",
    jumlah: 3,
  },
  {
    transaksi_id: "863bb514-f2db-45b8-beb4-aa9634c421ad",
    menu_id: "c363e658-0294-423c-968b-02f7a5c7cbb2",
    jumlah: 4,
  },
  // Add more detail transactions as needed
];


const detailPendapatan = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  pelanggan,
  transaksi,
  menu,
  reservasi,
  detailTransaksi,
  detailPendapatan,
};
