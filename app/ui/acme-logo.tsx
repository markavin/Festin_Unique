import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { kanit } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${kanit.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <div className="flex gap-x-20">
        <a href="#" className="text-lg font-semibold leading-6 text-orange-500">Product</a>
        <a href="#" className="text-lg font-semibold leading-6 text-orange-500">Features</a>
        <a href="#" className="text-lg font-semibold leading-6 text-orange-500">Marketplace</a>
        <a href="#" className="text-lg font-semibold leading-6 text-orange-500">Company</a>
      </div>
    </div>
  );
}
