import Form from '@/app/ui/paket/edit-form';
import Breadcrumbs from '@/app/ui/paket/breadcrumbs';
import { fetchPaketById, fetchPaket } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [pakets] = await Promise.all([
        fetchPaketById(id),
        fetchPaket(),
      ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Paket', href: '/dashboard/Paket' },
          {
            label: 'Edit Paket',
            href: `/dashboard/paket/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form pakets={pakets}/>
    </main>
  );
}
