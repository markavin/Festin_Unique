const { db } = require('@vercel/postgres');
const {
  users,
  pelanggan,
  transaksi,
  paket,
  // reservasi,
  // detailTransaksi,
  detailPendapatan,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

// tasyaa
async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;
//teseng
    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );
// whjvjwbco
    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

// Hanna tashya portuna
async function seedTransaksi(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS transaksi (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    pelanggan_id VARCHAR(255) NOT NULL,
    paket_id VARCHAR(255) NOT NULL,
    tanggal_transaksi DATE NOT NULL,
    total_bayar INT NOT NULL,
    metode_bayar VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "transaksi" table`);

    const insertedTransaksi = await Promise.all(
      transaksi.map(
        (transaksis) => client.sql`
        INSERT INTO transaksi (pelanggan_id, paket_id, tanggal_transaksi, total_bayar, metode_bayar, status)
        VALUES (${transaksis.pelanggan_id},  ${transaksis.paket_id}, ${transaksis.tanggal_transaksi}, ${transaksis.total_bayar},  ${transaksis.metode_bayar}, ${transaksis.status})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedTransaksi.length} transaksi`);

    return {
      createTable,
      transaksi: insertedTransaksi,
    };
  } catch (error) {
    console.error('Error seeding transaksi:', error);
    throw error;
  }
}
// knbdvkeb

async function seedPelanggan(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS pelanggan (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        nohp VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "pelanggan" table`);

    // Insert data into the "customers" table
    const insertedPelanggan = await Promise.all(
      pelanggan.map(
        (pelanggans) => client.sql`
        INSERT INTO pelanggan (id, name, email, nohp)
        VALUES (${pelanggans.id}, ${pelanggans.name}, ${pelanggans.email}, ${pelanggans.nohp})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedPelanggan.length} pelanggan`);

    return {
      createTable,
      pelanggan: insertedPelanggan,
    };
  } catch (error) {
    console.error('Error seeding pelanggan:', error);
    throw error;
  }
}

async function seedPaket(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS paket (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        nama_paket VARCHAR(255) NOT NULL,
        durasi VARCHAR(255) NOT NULL,
        harga VARCHAR(255) NOT NULL,
        gambar_paket VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "paket" table`);

    // Insert data into the "customers" table
    const insertedPaket = await Promise.all(
      paket.map(
        (pakets) => client.sql`
        INSERT INTO paket (nama_paket, durasi, harga, gambar_paket)
        VALUES (${pakets.nama_paket}, ${pakets.durasi}, ${pakets.harga}, ${pakets.gambar_paket})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedPaket.length} paket`);

    return {
      createTable,
      paket: insertedPaket,
    };
  } catch (error) {
    console.error('Error seeding paket:', error);
    throw error;
  }
}

// async function seedReservasi(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     // Create the "invoices" table if it doesn't exist
//     const createTable = await client.sql`
//     CREATE TABLE IF NOT EXISTS reservasi (
//     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//     pelanggan_id UUID NOT NULL,
//     tanggal_reservasi DATE NOT NULL,
//     waktu_reservasi TIME NOT NULL,
//     jumlah_orang INT NOT NULL
//   );
// `;

//     console.log(`Created "reservasi" table`);

//     const insertedReservasi = await Promise.all(
//       reservasi.map(
//         (reservasis) => client.sql`
//         INSERT INTO reservasi (pelanggan_id, tanggal_reservasi, waktu_reservasi,  jumlah_orang)
//         VALUES (${reservasis.pelanggan_id}, ${reservasis.tanggal_reservasi}, ${reservasis.waktu_reservasi}, ${reservasis.jumlah_orang})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedReservasi.length} reservasi`);

//     return {
//       createTable,
//       reservasi: insertedReservasi,
//     };
//   } catch (error) {
//     console.error('Error seeding reservasi:', error);
//     throw error;
//   }
// }


// async function seedDetailTransaksi(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     // Create the "customers" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS detailTransaksi (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         transaksi_id VARCHAR(255) NOT NULL,
//         menu_id VARCHAR(255) NOT NULL,
//         jumlah INT NOT NULL
//       );
//     `;

//     console.log(`Created "detailTransaksi" table`);

//     // Insert data into the "customers" table
//     const inserteddetailTransaksi = await Promise.all(
//       detailTransaksi.map(
//         (detailTransaksis) => client.sql`
//         INSERT INTO detailTransaksi ( transaksi_id, menu_id, jumlah )
//         VALUES (${detailTransaksis.transaksi_id}, ${detailTransaksis.menu_id}, ${detailTransaksis.jumlah})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );


//     console.log(`Seeded ${inserteddetailTransaksi.length} detailTransaksi`);

//     return {
//       createTable,
//       detailTRansaksi: inserteddetailTransaksi,
//     };
//   } catch (error) {
//     console.error('Error seeding detailTransaksi:', error);
//     throw error;
//   }
// }
async function seedDetailPendapatan(client) {
  try {
    // Create the "revenue" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS detailPendapatan (
        month VARCHAR(4) NOT NULL UNIQUE,
        revenue INT NOT NULL
      );
    `;

    console.log(`Created "detailPendapatan" table`);

    // Insert data into the "revenue" table
    const inserteddetailPendapatan = await Promise.all(
      detailPendapatan.map(
        (detailPendapatans) => client.sql`
        INSERT INTO detailPendapatan (month, revenue)
        VALUES (${detailPendapatans.month}, ${detailPendapatans.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    );
``
    console.log(`Seeded ${inserteddetailPendapatan.length} detailPendapatan`);

    return {
      createTable,
      detailPendapatan: inserteddetailPendapatan,
    };
  } catch (error) {
    console.error('Error seeding detailPendapatan:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedPelanggan(client);
  await seedPaket(client);
  await seedTransaksi(client);
  // await seedReservasi(client);
  // await seedMenu(client);
  // await seedDetailTransaksi(client);
  await seedDetailPendapatan(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
