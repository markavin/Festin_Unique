import { sql } from '@vercel/postgres';
import {
  PelangganField,
  PelangganTableType,
  TransaksiForm,
  TransaksiTable,
  LatestTransaksiRaw,
  User,
  detailPendapatan,
  PaketTable,
  PaketForm,
  PelangganForm,
  LatestPaketRaw,
  TransaksiTableType,
  PaketTableType,
  PaketField,
  LatestPelangganRaw,
} from './definitions';
import { formatCurrency, formatCurrencyy } from './utils';
import { unstable_noStore } from 'next/cache';
import { pelanggan, transaksi } from './placeholder-data';

export async function fetchDetailPendapatan() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  unstable_noStore()
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    console.log('Fetching Detail Pendapatan...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<detailPendapatan>`SELECT * FROM detailPendapatan`;

    console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch detail pendapatan data.');
  }
}

export async function fetchLatestTransaksi() {
  unstable_noStore();
  try {
    const data = await sql<LatestTransaksiRaw>`
      SELECT 
        transaksi.total_bayar, 
        transaksi.status,
        pelanggan.name, 
        paket.nama_paket, 
        paket.harga,
        paket.gambar_paket, 
        transaksi.id
      FROM transaksi
      LEFT JOIN pelanggan ON transaksi.pelanggan_id = pelanggan.id
      LEFT JOIN paket ON transaksi.paket_id = paket.id
      ORDER BY transaksi.tanggal_transaksi DESC
      LIMIT 5
    `;
    const LatestTransaksi = data.rows.map((transaksi) => ({
      ...transaksi,
      total_bayar: formatCurrencyy(transaksi.total_bayar),
    }));
    return LatestTransaksi;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest transaksi.');
  }
}


export async function fetchCardData() {
  unstable_noStore()
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const transaksiCountPromise = sql`SELECT COUNT(*) FROM transaksi`;
    // const transaksiSumPromise = sql`SELECT SUM(total_bayar) FROM transaksi`;
    const pelangganCountPromise = sql`SELECT COUNT(*) FROM pelanggan`;
    const paketCountPromise = sql`SELECT COUNT(*) FROM paket`;
    const transaksiStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'Berhasil' THEN total_bayar ELSE 0 END) AS "Berhasil",
         SUM(CASE WHEN status = 'Gagal' THEN total_bayar ELSE 0 END) AS "Gagal"
         FROM transaksi`;

    const data = await Promise.all([
      transaksiCountPromise,
      pelangganCountPromise,
      paketCountPromise,
      transaksiStatusPromise,
      // transaksiSumPromise,
    ]);

    const numberOfTransaksi = Number(data[0].rows[0].count ?? '0');
    const numberOfPelanggan = Number(data[1].rows[0].count ?? '0');
    const numberOfPaket = Number(data[2].rows[0].count ?? '0');
    const totalBerhasilransaksi = formatCurrencyy(data[3].rows[0].Berhasil ?? '0');
    const totalGagalTransaksi = formatCurrencyy(data[3].rows[0].Gagal ?? '0');
    // const totalOfTransaksi = formatCurrencyy(data[4].rows[0].total_bayar ?? '0');

    return {
      numberOfTransaksi,
      numberOfPelanggan,
      numberOfPaket,
      totalBerhasilransaksi,
      totalGagalTransaksi,
      // totalOfTransaksi,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 10;
export async function fetchFilteredTransaksi(
  query: string,
  currentPage: number,
) {
  unstable_noStore()
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const transaksi = await sql<TransaksiTableType>`
      SELECT
        transaksi.id,
        transaksi.total_bayar,
        transaksi.tanggal_transaksi,
        transaksi.metode_bayar,
        transaksi.status,
        pelanggan.name,
        paket.nama_paket,
        paket.harga
      FROM transaksi
      LEFT JOIN pelanggan ON transaksi.pelanggan_id = pelanggan.id
      LEFT JOIN paket ON transaksi.paket_id = paket.id
      WHERE
        pelanggan.name ILIKE ${`%${query}%`} OR
        paket.nama_paket ILIKE ${`%${query}%`} OR
        paket.harga::text ILIKE ${`%${query}%`} OR
        transaksi.total_bayar::text ILIKE ${`%${query}%`} OR
        transaksi.tanggal_transaksi::text ILIKE ${`%${query}%`} OR
        transaksi.metode_bayar ILIKE ${`%${query}%`} OR
        transaksi.status ILIKE ${`%${query}%`}
      ORDER BY transaksi.tanggal_transaksi DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return transaksi.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch transaksi.');
  }
}

export async function fetchTransaksiPages(query: string) {
  unstable_noStore()
  try {
    const count = await sql`SELECT COUNT(*)
    FROM transaksi
    LEFT JOIN pelanggan ON transaksi.pelanggan_id = pelanggan.id
    LEFT JOIN paket ON transaksi.paket_id = paket.id
    WHERE
      pelanggan.name ILIKE ${`%${query}%`} OR
      paket.nama_paket ILIKE ${`%${query}%`} OR
      paket.harga::text ILIKE ${`%${query}%`} OR
      transaksi.total_bayar::text ILIKE ${`%${query}%`} OR
      transaksi.tanggal_transaksi::text ILIKE ${`%${query}%`} OR
      transaksi.metode_bayar ILIKE ${`%${query}%`} OR
      transaksi.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of transaksi.');
  }
}

export async function fetchTransaksiById(id: string) {
  unstable_noStore()
  try {
    const data = await sql<TransaksiForm>`
      SELECT
        transaksi.id,
        transaksi.pelanggan_id,
        transaksi.paket_id,
        transaksi.total_bayar,
        transaksi.metode_bayar,
        transaksi.status
      FROM transaksi
      WHERE transaksi.id = ${id};
    `;

    const transaksi = data.rows.map((transaksi) => ({
      ...transaksi,
      // Convert amount from cents to dollars
      total_bayar: formatCurrency(transaksi.total_bayar),
    }));

    return transaksi[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch transaksi.');
  }
}

export async function fetchPaketById(id: string) {
  unstable_noStore()
  try {
    const data = await sql<PaketForm>`
      SELECT
        paket.id,
        paket.nama_paket,
        paket.durasi,
        paket.harga,
        paket.gambar_paket
      FROM paket
      WHERE paket.id = ${id};
    `;

    const paket = data.rows.map((paket) => ({
      ...paket,
      // Convert amount from cents to dollars
      harga: paket.harga / 100,
    }));

    return paket[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch paket.');
  }
}


export async function fetchPelanggan() {
  unstable_noStore()
  try {
    const data = await sql<PelangganField>`
      SELECT
        id,
        name,
        email,
        nohp
      FROM pelanggan
      ORDER BY name ASC
    `;

    const pelanggan = data.rows;
    return pelanggan;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all pelanggan.');
  }
}

export async function fetchPaket() {
  unstable_noStore()
  try {
    const data = await sql<PaketField>`
      SELECT
        id,
        nama_paket,
        durasi,
        harga,
        gambar_paket
      FROM paket
      ORDER BY nama_paket ASC
    `;

    const paket = data.rows;
    return paket;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all paket.');
  }
}
// const ITEMS_PER_PAGE = 10;
export async function fetchFilteredPelanggan(
  query: string,
  currentPage: number) {
  unstable_noStore()

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await sql<PelangganTableType>`
      SELECT
        pelanggan.id,
        pelanggan.name,
        pelanggan.email,
        pelanggan.nohp,
        COUNT(transaksi.id) AS total_transaksi,
        SUM(CASE WHEN transaksi.status = 'Berhasil' THEN transaksi.total_bayar ELSE 0 END) AS total_Berhasil,
        SUM(CASE WHEN transaksi.status = 'Gagal' THEN transaksi.total_bayar ELSE 0 END) AS total_Gagal
      FROM pelanggan
      LEFT JOIN transaksi ON pelanggan.id = transaksi.pelanggan_id
      WHERE
        pelanggan.name ILIKE ${`%${query}%`} OR
        pelanggan.email ILIKE ${`%${query}%`} OR
        pelanggan.nohp ILIKE ${`%${query}%`}
      GROUP BY pelanggan.id, pelanggan.name, pelanggan.email, pelanggan.nohp
      ORDER BY pelanggan.name ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    const pelanggan = data.rows.map((pelanggan) => ({
      ...pelanggan,
      total_Berhasil: formatCurrency(pelanggan.total_Berhasil),
      total_Gagal: formatCurrency(pelanggan.total_Gagal),
    }));

    return pelanggan;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch pelanggan table.');
  }
}

export async function getUser(email: string) {
  unstable_noStore()
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchLatestPaket() {
  unstable_noStore();
  try {
    const data = await sql<LatestPaketRaw>`
      SELECT paket.harga, paket.nama_paket, paket.durasi, paket.gambar_paket, paket.id
      FROM paket
      ORDER BY paket.nama_paket ASC
      LIMIT 5
      `;

    const LatestPaket = data.rows.map((paket) => ({
      ...paket,
      harga: formatCurrency(paket.harga),
    }));
    return LatestPaket;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest paket.');
  }
}

export async function fetchLatestPelanggan() {
  unstable_noStore();
  try {
    const data = await sql<LatestPelangganRaw>`
    SELECT pelanggan.name, pelanggan.email, pelanggan.nohp, pelanggan.id
    FROM pelanggan
    ORDER BY pelanggan.name ASC
    LIMIT 5
      `;

    const LatestPelanggan = data.rows.map((pelanggan) => ({
      ...pelanggan,
      total_transaksi: (pelanggan.total_transaksi),
    }));
    return LatestPelanggan;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest pelanggan.');
  }
}


export async function fetchfilteredPaket(
  query: string,
  currentPage: number,
) {
  unstable_noStore()
  const offset = (currentPage - 1) * ITEMS_PER_PAGE
  try {
    const paket = await sql<PaketTableType>`
      SELECT
        paket.id,
        paket.harga,
        paket.durasi,
        paket.nama_paket,
        paket.gambar_paket
      FROM paket
      WHERE
        paket.harga::text ILIKE ${`%${query}%`} OR
        paket.durasi::text ILIKE ${`%${query}%`} OR
        paket.nama_paket ILIKE ${`%${query}%`}
      ORDER BY paket.nama_paket ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}

    `;

    // const paket = data.rows.map((paket) => ({
    //   ...paket,
    //   harga: formatCurrency(paket.harga),
    // }));

    return paket.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch paket.');
  }
}

export async function fetchPaketPages(query: string) {
  unstable_noStore()
  try {
    const count = await sql`SELECT COUNT(*)
    FROM paket
  WHERE
    paket.harga::text ILIKE ${`%${query}%`} OR
    paket.durasi::text ILIKE ${`%${query}%`} OR
    paket.nama_paket ILIKE ${`%${query}%`} 
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of Paket.');
  }
}

export async function fetchPelangganPages(query: string) {
  unstable_noStore()
  try {
    const count = await sql`
    SELECT COUNT(*)
    FROM pelanggan
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of pelanggan.');
  }
}

export async function fetchPelangganById(id: string) {
  unstable_noStore()
  try {
    const data = await sql<PelangganForm>`
    SELECT
      pelanggan.id,
      pelanggan.name,
      pelanggan.email,
      pelanggan.nohp
    FROM pelanggan
    WHERE pelanggan.id = ${id};
  `;
    const pelanggan = data.rows.map((pelanggan) => ({
      ...pelanggan,
      // Convert amount from cents to dollars
      // amount: customers.amount / 100,
    }));

    console.log(pelanggan); // customers is an empty array []
    return pelanggan[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch customers.');
  }
}

