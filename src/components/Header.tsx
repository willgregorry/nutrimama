"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import { redirect } from "next/navigation";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

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

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 flex justify-around items-center gap-4 transition-all duration-300 ${scrolled
                ? "py-3 bg-transparent backdrop-blur-md shadow-sm"
                : "py-4 mt-4 bg-transparent"
                }`}
        >
            <Image className="w-40" src="/logo.png" alt="NutriMama Logo" width={432} height={168} />
            <nav className="flex items-center justify-center gap-24 ml-32 text-lg font-semibold text-primary-dark">
                <Link href="#about">About</Link>
                <Link href="#services">Services</Link>
                <Link href="#features">Features</Link>
            </nav>
            <section className="flex gap-6">
                <Button onClick={handleSignUpClick} variant={"outline"} size={"lg"}>
                    Sign Up
                </Button>
                <Button onClick={handleSignInClick} variant={"default"} size={"lg"}>
                    Sign In
                </Button>
            </section>
        </header>
    )
}