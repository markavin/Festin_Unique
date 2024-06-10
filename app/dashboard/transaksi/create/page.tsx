import Form from '@/app/ui/transaksi/create-form';
import Breadcrumbs from '@/app/ui/transaksi/breadcrumbs';
import { fetchPelanggan, fetchPaket } from '@/app/lib/data';

export default async function Page() {
  const pelanggans = await fetchPelanggan();
  const pakets = await fetchPaket();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Transaksi', href: '/dashboard/transaksi' },
          {
            label: 'Create Transaksi',
            href: '/dashboard/transaksi/create',
            active: true,
          },
        ]}
      />
      <Form pelanggans={pelanggans} pakets={pakets} />
    </main>
  );
}