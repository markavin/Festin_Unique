import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function TransakiStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-green-500 text-white': status === 'Berhasil',
          'bg-gray-100 text-gray-500': status === 'Gagal',
        },
      )}
    >
      {status === 'Berhasil' ? (
        <>
          Berhasil
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'Gagal' ? (
        <>
          Gagal
          <ExclamationCircleIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
    </span>
  );
}
