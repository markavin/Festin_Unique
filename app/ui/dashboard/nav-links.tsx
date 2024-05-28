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
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-4 space-y-2 md:space-y-0 md:space-x-2 md:flex md:items-center">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-white font-medium hover:bg hover:text-orange-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                ' text-orange-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}