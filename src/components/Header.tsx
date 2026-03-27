"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "./ui/button";
import { usePathname, redirect } from "next/navigation";
import { Menu, X, User, ChevronDown, ChevronUp, LayoutDashboard } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

export default function Header() {
    const { isLoggedIn, user } = useAuthStore();
    const pathname = usePathname();
    const isDashboard = pathname?.startsWith("/dashboard");
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true) }, []);

    const handleSignUpClick = () => {
        redirect("/auth/sign-up");
    }

    const handleSignInClick = () => {
        redirect("/auth/sign-in");
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerClasses = isDashboard
        ? `fixed top-0 left-4 right-4 z-50 rounded-xl px-6 md:left-8 md:right-8 md:px-12 lg:left-12 lg:right-12 xl:left-16 xl:right-16 xl:px-24 transition-all duration-300 py-3 mt-2 shadow-sm backdrop-blur-md bg-white/80`
        : `fixed top-0 left-4 right-4 z-50 rounded-xl px-6 md:left-8 md:right-8 md:px-12 lg:left-12 lg:right-12 xl:left-16 xl:right-16 xl:px-24 transition-all duration-300 ${scrolled
            ? "py-3 mt-2 shadow-sm backdrop-blur-md bg-white/80"
            : "py-4 mt-4 bg-white shadow-md lg:mt-6"
        }`;

    return (
        <header className={headerClasses}>
            <div className={`flex items-center justify-between w-full`}>

                <div className="flex items-center">
                    <Link href="/">
                        <Image className="w-32 lg:w-40" src="/logo.png" alt="NutriMama Logo" width={432} height={168} />
                    </Link>
                </div>

                <nav className={`hidden md:flex items-center gap-12 font-semibold text-black ${!isDashboard ? "lg:ml-32 text-primary-dark" : ""}`}>
                    <Link href="/#about" className="hover:text-primary transition-colors">Tentang</Link>
                    <Link href="/#services" className="hover:text-primary transition-colors">Layanan</Link>
                    <Link href="/#features" className="hover:text-primary transition-colors">Fitur</Link>
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                    {mounted && isLoggedIn ? (
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger className="flex items-center gap-3 bg-primary text-white rounded-xl pl-6 pr-4 py-2 cursor-pointer hover:bg-primary-p6 transition-colors shadow-md focus:outline-none data-[state=open]:bg-primary-p6">
                                <span className="font-semibold text-base py-0.5">{user?.name}</span>
                                <User className="w-5 h-5 ml-2" />
                                <ChevronDown className="w-4 h-4 opacity-80" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[220px] bg-primary text-white border-none rounded-xl p-0 overflow-hidden shadow-xl" align="end" sideOffset={8}>
                                <div className="flex items-center justify-between bg-white/30 px-4 py-2 hover:bg-white/40 cursor-default transition-colors">
                                    <span className="font-semibold text-base py-0.5 ml-2">{user?.name}</span>
                                    <div className="flex items-center gap-3">
                                        <User className="w-5 h-5" />
                                        <ChevronUp className="w-4 h-4 opacity-80" />
                                    </div>
                                </div>
                                <div className="flex flex-col p-2 gap-1">
                                    <DropdownMenuItem asChild className="focus:bg-white/20 focus:text-white cursor-pointer rounded-lg px-3 py-2">
                                        <Link href="/profile" className="flex items-center justify-between w-full">
                                            <span className="font-medium text-base ml-1">Profile</span>
                                            <User className="w-5 h-5 mr-0.5" />
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className="focus:bg-white/20 focus:text-white cursor-pointer rounded-lg px-3 py-2">
                                        <Link href="/dashboard" className="flex items-center justify-between w-full">
                                            <span className="font-medium text-base ml-1">Dashboard</span>
                                            <LayoutDashboard className="w-5 h-5 mr-0.5" />
                                        </Link>
                                    </DropdownMenuItem>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="flex gap-4">
                            <Button onClick={handleSignInClick} variant={"default"} size={"lg"} className="text-neutral-light">
                                Masuk
                            </Button>
                            <Button onClick={handleSignUpClick} variant={"outline"} size={"lg"}>
                                Daftar
                            </Button>
                        </div>
                    )}
                </div>

                <button
                    className="lg:hidden text-primary-dark focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className={`flex absolute right-0 left-0 top-full flex-col gap-6 p-6 mt-3 rounded-xl border shadow-lg backdrop-blur-md bg-white/95 border-primary-light lg:hidden ${isDashboard ? "z-50" : ""}`}>
                    <nav className="flex flex-col gap-6 items-center text-lg font-semibold text-primary-dark">
                        <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)}>Tentang</Link>
                        <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Layanan</Link>
                        <Link href="/#features" onClick={() => setIsMobileMenuOpen(false)}>Fitur</Link>
                    </nav>
                    <div className="flex flex-col gap-4 pt-4 w-full border-t border-primary-light">
                        {isLoggedIn ? (
                            <div className="flex items-center justify-center gap-3 bg-primary text-white rounded-full px-6 py-4 cursor-pointer hover:bg-primary-p6 transition-colors shadow-md w-full">
                                <span className="font-semibold text-base py-0.5">{user?.name}</span>
                                <User className="w-5 h-5 ml-2" />
                            </div>

                        ) : (
                            <>
                                <Button onClick={handleSignUpClick} variant={"outline"} className="w-full h-12">
                                    Daftar
                                </Button>
                                <Button onClick={handleSignInClick} variant={"default"} className="w-full h-12 text-white">
                                    Masuk
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}