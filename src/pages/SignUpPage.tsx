"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SignUpPage() {
    const [isLoading, setIsLoading] = useState(false);


    // Masih simulasi proses teken tombol daftar
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <>
            <Header />
            <div className="flex flex-col lg:flex-row items-center justify-center bgc-gradient w-full min-h-screen pt-32 pb-16 px-4 lg:px-24">

                <div className="flex-1 flex flex-col items-center lg:items-start justify-center gap-12 w-full max-w-xl">
                    <div className="relative w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] mx-auto lg:ml-16">
                        <div className="absolute right-[-16px] top-[-16px] w-full h-full rounded-full border border-primary/40 -z-10" />
                        <div className="absolute right-[-32px] top-[-32px] w-full h-full rounded-full border border-primary/30 -z-10" />
                        <div className="absolute right-[-48px] top-[-48px] w-full h-full rounded-full border border-primary/20 -z-10" />
                        <div className="absolute right-[-64px] top-[-64px] w-full h-full rounded-full border border-primary/10 -z-10" />

                        <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden shadow-xl z-10 bg-white">
                            <Image
                                src="/hero.png"
                                alt="Ibu Anak"
                                width={600}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="text-center lg:text-left mx-auto lg:ml-12 mt-4">
                        <h1 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                            NutriMama
                        </h1>
                        <p className="text-xl sm:text-2xl text-primary font-bold mt-1">
                            Fit Nutrition, Bright The Future
                        </p>
                    </div>
                </div>

                <div className="flex-1 flex items-center justify-center w-full mt-16 lg:mt-0">
                    <div className="w-full max-w-[480px] bg-white rounded-[40px] shadow-xl p-10 sm:p-12 flex flex-col gap-4">
                        <h2 className="text-3xl font-bold text-black mb-2">
                            Buat akun Anda
                        </h2>

                        <form onSubmit={onSubmit} className="flex flex-col gap-4">

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-black" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Masukkan email Anda"
                                    className="w-full border-b-[1.5px] py-3 bg-transparent outline-none focus:border-primary placeholder:text-gray-400 font-medium transition-colors border-gray-400 text-black"
                                />
                            </div>

                            <div className="flex flex-col gap-2 mt-2">
                                <label className="text-sm font-semibold text-black" htmlFor="username">Username</label>
                                <input
                                    id="username"
                                    type="text"
                                    name="username"
                                    required
                                    placeholder="Masukkan username Anda"
                                    className="w-full border-b-[1.5px] py-3 bg-transparent outline-none focus:border-primary placeholder:text-gray-400 font-medium transition-colors border-gray-400 text-black"
                                />
                            </div>

                            <div className="flex flex-col gap-2 mt-2">
                                <label className="text-sm font-semibold text-black" htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="Masukkan password Anda"
                                    className="w-full border-b-[1.5px] py-3 bg-transparent outline-none focus:border-primary placeholder:text-gray-400 font-medium transition-colors border-gray-400 text-black"
                                />
                            </div>

                            <div className="flex flex-col gap-2 mt-2">
                                <label className="text-sm font-semibold text-black" htmlFor="password">Konfirmasi Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="Masukkan kembali password Anda"
                                    className="w-full border-b-[1.5px] py-3 bg-transparent outline-none focus:border-primary placeholder:text-gray-400 font-medium transition-colors border-gray-400 text-black"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                variant="default"
                                className="w-full h-14 rounded-2xl mt-6 text-white text-lg font-semibold shadow-md transition-colors disabled:opacity-70"
                            >
                                {isLoading ? "Memproses..." : "Daftar"}
                            </Button>
                        </form>

                        <p className="text-[13px] text-center font-bold text-black mt-2">
                            Sudah punya akun? <Link href="/sign-in" className="text-primary hover:text-primary-hover transition-colors">Masuk sekarang</Link>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}