import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function TransakiMetodeBayar({ metode_bayar }: { metode_bayar: string }) {
    return (
        <span
            className={clsx(
                'inline-flex items-center rounded-full px-2 py-1 text-xs',
                {
                    'bg-gray-100 text-gray-500': metode_bayar === 'Tunai',
                    'bg-green-500 text-white': metode_bayar === 'Qris',
                    'bg-red-500 text-blue': metode_bayar === 'Debit',
                },
            )}
        >
            {metode_bayar === 'Tunai' ? (
                <>
                    Tunai
                    <ClockIcon className="ml-1 w-4 text-gray-500" />
                </>
            ) : null}
            {metode_bayar === 'Qris' ? (
                <>
                    Qris
                    <CheckIcon className="ml-1 w-4 text-white" />
                </>
            ) : null}
            {metode_bayar === 'Debit' ? (
                <>
                    Debit
                    <CheckIcon className="ml-1 w-4 text-white" />
                </>
            ) : null}
        </span>
    );
}
