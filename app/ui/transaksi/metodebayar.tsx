import { CheckIcon, ClockIcon, BanknotesIcon, CreditCardIcon, QrCodeIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function TransakiMetodeBayar({ metode_bayar }: { metode_bayar: string }) {
    return (
        <span
            className={clsx(
                'inline-flex items-center rounded-full px-2 py-1 text-xs',
                {
                    'bg-lime-500 text-white': metode_bayar === 'Tunai',
                    'bg-gray-100 text-black': metode_bayar === 'Qris',
                    'bg-blue-500 text-white': metode_bayar === 'Debit',
                },
            )}
        >
            {metode_bayar === 'Tunai' ? (
                <>
                    Tunai
                    <BanknotesIcon className="ml-1 w-4 text-white" />
                </>
            ) : null}
            {metode_bayar === 'Qris' ? (
                <>
                    Qris
                    <QrCodeIcon className="ml-1 w-4 text-black" />
                </>
            ) : null}
            {metode_bayar === 'Debit' ? (
                <>
                    Debit
                    <CreditCardIcon className="ml-1 w-4 text-whitee" />
                </>
            ) : null}
        </span>
    );
}
