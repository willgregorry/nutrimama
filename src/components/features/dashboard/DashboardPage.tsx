import NotificationBanner from "@/components/features/dashboard/NotificationBanner";
import DashboardKitabIbuSection from "@/components/features/dashboard/DashboardKitabIbuSection";
import DashboardJurnalSection from "@/components/features/dashboard/DashboardJurnalSection";
import DashboardRancanganMakanSection from "@/components/features/dashboard/DashboardRancanganMakanSection";
import DashboardBimbinganSection from "@/components/features/dashboard/DashboardBimbinganSection";
import DashboardUsersTrackerSection from "@/components/features/dashboard/DashboardUsersTrackerSection";

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-12 w-full">
            <NotificationBanner />
            <DashboardKitabIbuSection />
            <DashboardJurnalSection />
            <DashboardRancanganMakanSection />
            <DashboardBimbinganSection />
            <DashboardUsersTrackerSection />
        </div>
    )
}