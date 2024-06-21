'use client'


import Form from '@/app/ui/paket/create-form';
import Breadcrumbs from '@/app/ui/paket/breadcrumbs';
import { fetchPaket } from '@/app/lib/data';
 
export default async function Page() {
  const pakets = await fetchPaket();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Package', href: '/dashboard/paket' },
          {
            label: 'Create Package',
            href: '/dashboard/paket/create',
            active: true,
          },
        ]}
      />
      <Form pakets={pakets} />
    </main>
  );
}

