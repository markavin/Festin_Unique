import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="w-full flex-none md:w-50 ">
        <SideNav />
      </div>
      <div 
        className="flex-grow p-6 md:overflow-y-auto p-90 " 
        style={{ paddingTop: '20px', position: 'relative', zIndex: 10 }}
      >
        {children}
      </div>
   </div>
  );
}