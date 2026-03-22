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
            <div className="flex flex-col justify-center items-center px-4 pt-32 pb-16 w-full min-h-screen lg:flex-row bgc-main lg:px-24">

                <div className="flex flex-col flex-1 gap-12 justify-center items-center w-full max-w-xl lg:items-start">
                    <div className="relative w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] mx-auto lg:ml-16">
                        <div className="absolute right-[-16px] top-[-16px] w-full h-full rounded-full border border-primary/40 -z-10" />
                        <div className="absolute right-[-32px] top-[-32px] w-full h-full rounded-full border border-primary/30 -z-10" />
                        <div className="absolute right-[-48px] top-[-48px] w-full h-full rounded-full border border-primary/20 -z-10" />
                        <div className="absolute right-[-64px] top-[-64px] w-full h-full rounded-full border border-primary/10 -z-10" />

                        <div className="overflow-hidden absolute inset-0 z-10 w-full h-full bg-white rounded-full shadow-xl">
                            <Image
                                src="/hero.png"
                                alt="Ibu Anak"
                                width={600}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="mx-auto mt-4 text-center lg:text-left lg:ml-12">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                            NutriMama
                        </h1>
                        <p className="mt-1 text-xl font-bold sm:text-2xl text-primary">
                            Fit Nutrition, Bright The Future
                        </p>
                    </div>
                </div>

                <div className="flex flex-1 justify-center items-center mt-16 w-full lg:mt-0">
                    <div className="w-full max-w-[480px] bg-white rounded-[40px] shadow-xl p-10 sm:p-12 flex flex-col gap-4">
                        <h2 className="mb-2 text-3xl font-bold text-black">
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
                                className="mt-6 w-full h-14 text-lg font-semibold text-white rounded-2xl shadow-md transition-colors disabled:opacity-70"
                            >
                                {isLoading ? "Memproses..." : "Daftar"}
                            </Button>
                        </form>

                        <p className="text-[13px] text-center font-bold text-black mt-2">
                            Sudah punya akun? <Link href="/auth/sign-in" className="transition-colors text-primary hover:text-primary-hover">Masuk sekarang</Link>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}