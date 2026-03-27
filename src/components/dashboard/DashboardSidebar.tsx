"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, BookHeart, Carrot, Stethoscope, AudioWaveformIcon } from "lucide-react";

const sidebarLinks = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Kitab Ibu", href: "/dashboard/kitab-ibu", icon: BookOpen },
    { name: "Jurnal Keluarga Bahagia", href: "/dashboard/jurnal", icon: BookHeart },
    { name: "Rancangan Makan", href: "/dashboard/rancangan-makan", icon: Carrot },
    { name: "Bimbingan Bidan", href: "/dashboard/bimbingan-bidan", icon: Stethoscope },
    { name: "Users", href: "/profile", icon: AudioWaveformIcon }
];

export default function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden fixed lg:flex flex-col w-72 shrink-0 gap-4">
            {sidebarLinks.map((link) => {
                const isActive = link.href === "/dashboard"
                    ? pathname === "/dashboard"
                    : pathname?.startsWith(link.href);

                const activeClass = isActive
                    ? "bg-primary text-white shadow-md"
                    : "bg-primary-p2/30 hover:bg-primary-p2/50 text-black";

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`flex items-center justify-between px-6 py-4 rounded-xl transition-all ${activeClass}`}
                    >
                        <span className="text-sm font-bold tracking-wide">{link.name}</span>
                        <link.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-black"}`} strokeWidth={2} />
                    </Link>
                );
            })}
        </aside>
    )
}
