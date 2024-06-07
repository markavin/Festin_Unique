import Form from '@/app/ui/paket/create-form';
import Breadcrumbs from '@/app/ui/paket/breadcrumbs';
import { fetchPelanggan } from '@/app/lib/data';
 
export default async function Page() {
  const pelanggan = await fetchPelanggan();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Paket', href: '/dashboard/paket' },
          {
            label: 'Create Paket',
            href: '/dashboard/paket/create',
            active: true,
          },
        ]}
      />
      <Form pelanggan={pelanggan} />
    </main>
  );
}