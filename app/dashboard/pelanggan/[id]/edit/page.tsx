import Form from '@/app/ui/pelanggan/edit-form';
import Breadcrumbs from '@/app/ui/pelanggan/breadcrumbs';
import { fetchPelanggan} from '@/app/lib/data';
import { fetchPelangganById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [pelanggan] = await Promise.all([
    fetchPelangganById(id),
    fetchPelanggan(),
  ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Pelanggan', href: '/dashboard/pelanggan' },
          {
            label: 'Edit Pelanggan',
            href: `/dashboard/pelanggan/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form pelanggan={pelanggan} />
    </main>
  );
}