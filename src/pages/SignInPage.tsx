"use client";

import Header from "@/components/Header";
import { apiClient } from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { redirect } from "next/navigation";

const signInSchema = z.object({
    email: z.string().min(1, { message: "Email wajib diisi" }).email({ message: "Format email tidak valid" }),
    password: z.string().min(8, { message: "Password minimal 8 karakter" })
});

type SignInFormValues = z.infer<typeof signInSchema>;

export default function SignInPage() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<SignInFormValues>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = async (data: SignInFormValues) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            redirect("/dashboard")
        } catch (error) {
            console.error("Login Failed:", error);
        }
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
                        <h2 className="text-3xl font-bold text-black mb-2">Masuk ke akun Anda</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-black" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Masukkan email Anda"
                                    className={`w-full border-b-[1.5px] py-3 bg-transparent outline-none focus:border-primary placeholder:text-gray-400 font-medium transition-colors ${errors.email ? "border-red-500 text-red-500" : "border-gray-400 text-black"
                                        }`}
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <span className="text-xs font-semibold text-red-500 mt-1">{errors.email.message}</span>
                                )}
                            </div>

                            <div className="flex flex-col gap-2 mt-2">
                                <label className="text-sm font-semibold text-black" htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Masukkan password Anda"
                                    className={`w-full border-b-[1.5px] py-3 bg-transparent outline-none focus:border-primary placeholder:text-gray-400 font-medium transition-colors ${errors.password ? "border-red-500 text-red-500" : "border-gray-400 text-black"
                                        }`}
                                    {...register("password")}
                                />
                                {errors.password && (
                                    <span className="text-xs font-semibold text-red-500 mt-1">{errors.password.message}</span>
                                )}
                            </div>

                            <div className="w-full mt-1">
                                <Link href="#" className="text-[13px] font-bold text-black underline underline-offset-2 hover:text-primary transition-colors">
                                    Lupa password?
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                variant="default"
                                className="w-full h-14 rounded-2xl mt-4 text-white text-lg font-semibold shadow-md transition-colors disabled:opacity-70"
                            >
                                {isSubmitting ? "Memproses..." : "Masuk"}
                            </Button>
                        </form>

                        <p className="text-[13px] text-center font-bold text-black mt-2">
                            Belum punya akun? <Link href="/sign-up" className="text-primary hover:text-primary-hover transition-colors">Daftar sekarang</Link>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}