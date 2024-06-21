import Form from '@/app/ui/pelanggan/create-form';
import Breadcrumbs from '@/app/ui/pelanggan/breadcrumbs';
import { fetchPelanggan } from '@/app/lib/data';
 
export default async function Page() {
  const pelanggan = await fetchPelanggan();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customer', href: '/dashboard/pelanggan' },
          {
            label: 'Create Customer',
            href: '/dashboard/pelanggan/create',
            active: true,
          },
        ]}
      />
      <Form pelanggan={pelanggan} />
    </main>
  );
}

