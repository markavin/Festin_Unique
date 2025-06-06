import Form from '@/app/ui/transaksi/edit-form';
import Breadcrumbs from '@/app/ui/transaksi/breadcrumbs';
import { fetchPelanggan, fetchTransaksiById, fetchPaket } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [transaksi, pelanggans, pakets] = await Promise.all([
    fetchTransaksiById(id),
    fetchPelanggan(),
    fetchPaket()
  ]);

  if (!transaksi) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Transactions', href: '/dashboard/transaksi' },
          {
            label: 'Update Transactions',
            href: `/dashboard/transaksi/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form
        transaksi={{
          ...transaksi,
          total_bayar: Number(transaksi.total_bayar),
        }}
        pelanggans={pelanggans}
        pakets={pakets}
      />

    </main>
  );
}
