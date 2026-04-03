import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Header from "@/components/Header";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="flex flex-col min-h-screen bgc-main bgc-radial-blobs font-jakarta text-black py-6 gap-8 overflow-x-hidden">
        <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
          <Header />

          <div className="flex flex-col lg:flex-row flex-1 gap-6 lg:gap-12 items-start pt-24 sm:pt-28 w-full min-w-0">
            <DashboardSidebar />

            <main className="flex-1 lg:ml-80 min-w-0 w-full bg-white/90 backdrop-blur-md rounded-3xl p-5 sm:p-8 md:p-12 border border-white shadow-sm min-h-[60vh] lg:min-h-screen">
              {children}
            </main>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
