import Form from '@/app/ui/pelanggan/edit-form';
import Breadcrumbs from '@/app/ui/pelanggan/breadcrumbs';
import { fetchPelanggan} from '@/app/lib/data';
import { fetchPelangganById } from '@/app/lib/data';
import { notFound } from 'next/navigation';


export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [pelanggan] = await Promise.all([
    fetchPelangganById(id),
    fetchPelanggan(),
  ]);
  if (!pelanggan) {
    notFound();
  }
  return(
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customer', href: '/dashboard/pelanggan' },
          {
            label: 'Update Customer',
            href: `/dashboard/pelanggan/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form pelanggan={pelanggan} />
    </main>
  );
}

