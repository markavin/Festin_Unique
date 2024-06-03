import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-800 min-h-screen">
      <div className="w-full flex-none md:w-50">
        <SideNav />
      </div>
      <div 
        className="flex-grow p-6 md:p-10 md:overflow-y-auto relative z-10" 
        style={{ paddingTop: '20px' }}
      >
        {children}
      </div>
    </div>
  );
}
