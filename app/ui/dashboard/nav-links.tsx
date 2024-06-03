'use client';

import {
  UserGroupIcon,
  HomeIcon,
  CurrencyDollarIcon,
  DocumentIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: HomeIcon
  },
  {
    name: 'Transaksi',
    href: '/dashboard/transaksi',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Pelanggan',
    href: '/dashboard/pelanggan',
    icon: UserGroupIcon
  },
  {
    name: 'Paket',
    href: '/dashboard/paket',
    icon: DocumentIcon
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 left-0 w-16 bg-gray-800 h-screen flex flex-col items-center justify-center">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center gap-2 p-3 text-white hover:bg-orange-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-orange-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6 h-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
