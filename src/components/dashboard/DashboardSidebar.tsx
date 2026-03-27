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
    { name: "Users", href: "/profile", icon: AudioWaveformIcon },
];

export default function DashboardSidebar() {
    const pathname = usePathname();

    const isActive = (href: string) =>
        href === "/dashboard" ? pathname === "/dashboard" : pathname?.startsWith(href);

    return (
        <>
            <aside className="hidden fixed lg:flex flex-col w-72 shrink-0 gap-4 z-20">
                {sidebarLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center justify-between px-6 py-4 rounded-xl transition-all ${
                                active
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-primary-p2/30 hover:bg-primary-p2/50 text-black"
                            }`}
                        >
                            <span className="text-sm font-bold tracking-wide">{link.name}</span>
                            <link.icon
                                className={`w-5 h-5 ${active ? "text-white" : "text-black"}`}
                                strokeWidth={2}
                            />
                        </Link>
                    );
                })}
            </aside>

            <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-2 py-2 flex items-center justify-around">
                {sidebarLinks.slice(0, 5).map((link) => {
                    const active = isActive(link.href);
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex flex-col items-center gap-1 px-2 py-1.5 rounded-xl transition-all min-w-0 ${
                                active ? "text-primary" : "text-neutral-400 hover:text-primary"
                            }`}
                        >
                            <link.icon className="w-5 h-5 shrink-0" strokeWidth={active ? 2.5 : 2} />
                            <span className="text-[10px] font-semibold leading-tight truncate max-w-[52px] text-center">
                                {link.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}
