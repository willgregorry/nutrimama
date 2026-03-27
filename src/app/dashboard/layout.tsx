import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Header from "@/components/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bgc-main bgc-radial-blobs font-jakarta text-black py-6 gap-8 overflow-x-hidden">

      <div className="flex flex-col w-full max-w-7xl mx-auto min-h-screen">
        <Header />

        <div className="flex flex-col lg:flex-row flex-1 gap-8 lg:gap-12 items-start pt-28 w-full min-w-0">
          <DashboardSidebar />

          <main className="flex-1 ml-80 min-w-0 w-full bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white shadow-sm min-h-screen">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
