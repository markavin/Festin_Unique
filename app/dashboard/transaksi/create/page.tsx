import Form from '@/app/ui/transaksi/create-form';
import Breadcrumbs from '@/app/ui/transaksi/breadcrumbs';
import { fetchPelanggan } from '@/app/lib/data';
import { pelanggan } from '@/app/lib/placeholder-data';
 
export default async function Page() {
  const pelanggan = await fetchPelanggan();
 
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
      <Form pelanggans={pelanggan} />
    </main>
  );
}