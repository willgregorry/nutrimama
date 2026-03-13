"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleSignUpClick = () => {
        redirect("/sign-up");
    }

    const handleSignInClick = () => {
        redirect("/sign-in");
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-4 right-4 z-50 rounded-xl px-6 md:left-8 md:right-8 md:px-12 lg:left-12 lg:right-12 xl:left-16 xl:right-16 xl:px-24 transition-all duration-300 ${scrolled
                ? "py-3 mt-2 shadow-sm backdrop-blur-md bg-white/80"
                : "py-4 mt-4 bg-white shadow-md lg:mt-6"
                }`}
        >
            <div className="flex justify-between items-center w-full">

                <Image className="w-32 lg:w-40" src="/logo.png" alt="NutriMama Logo" width={432} height={168} />

                <nav className="hidden gap-12 justify-center items-center ml-32 text-lg font-semibold lg:flex xl:gap-24 text-primary-dark">
                    <a href="/#about" className="transition-all ease-in-out hover:text-primary hover:border-b-2 duration-50">About</a>
                    <a href="/#services" className="transition-all ease-in-out hover:text-primary hover:border-b-2 duration-50">Services</a>
                    <a href="/#features" className="transition-all ease-in-out hover:text-primary hover:border-b-2 duration-50">Features</a>
                </nav>

                <section className="hidden gap-4 lg:flex">
                    <Button onClick={handleSignUpClick} variant={"outline"} size={"lg"}>
                        Sign Up
                    </Button>
                    <Button onClick={handleSignInClick} variant={"default"} size={"lg"} className="text-white">
                        Sign In
                    </Button>
                </section>

                <button
                    className="lg:hidden text-primary-dark focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="flex absolute right-0 left-0 top-full flex-col gap-6 p-6 mt-3 rounded-xl border shadow-lg backdrop-blur-md bg-white/95 border-primary-light lg:hidden">
                    <nav className="flex flex-col gap-6 items-center text-lg font-semibold text-primary-dark">
                        <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                        <Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                        <Link href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
                    </nav>
                    <div className="flex flex-col gap-4 pt-4 w-full border-t border-primary-light">
                        <Button onClick={handleSignUpClick} variant={"outline"} className="w-full h-12">
                            Sign Up
                        </Button>
                        <Button onClick={handleSignInClick} variant={"default"} className="w-full h-12 text-white">
                            Sign In
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}