import Form from '@/app/ui/transaksi/edit-form';
import Breadcrumbs from '@/app/ui/transaksi/breadcrumbs';
import { fetchPelanggan,fetchTransaksiById } from '@/app/lib/data';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [transaksi, pelanggans] = await Promise.all([
        fetchTransaksiById(id),
        fetchPelanggan(),
      ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Transaksi', href: '/dashboard/transaksi' },
          {
            label: 'Edit Transaksi',
            href: `/dashboard/transaksi/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form transaksi={transaksi} pelanggans={pelanggans} />
    </main>
  );
}