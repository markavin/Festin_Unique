import Form from '@/app/ui/paket/edit-form';
import Breadcrumbs from '@/app/ui/paket/breadcrumbs';
import { fetchPaketById, fetchPaket } from '@/app/lib/data';
import { notFound } from 'next/navigation';


export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [pakets] = await Promise.all([
    fetchPaketById(id),
    fetchPaket(),
  ]);
  if (!pakets) {
    notFound();
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Package', href: '/dashboard/Paket' },
          {
            label: 'Update Package',
            href: `/dashboard/paket/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form pakets={pakets} />
    </main>
  );
}



