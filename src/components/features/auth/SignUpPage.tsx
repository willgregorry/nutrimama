"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";

const signUpSchema = z.object({
    email: z.string().min(1, { message: "Email wajib diisi" }).email({ message: "Format email tidak valid" }),
    username: z.string().min(3, { message: "Username minimal 3 karakter" }),
    password: z.string().min(8, { message: "Password minimal 8 karakter" }),
    confirmPassword: z.string().min(1, { message: "Konfirmasi password wajib diisi" })
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password tidak cocok"
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUpPage() {

    const router = useRouter();
    const login = useAuthStore((state) => state.login);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpFormValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        }
    });

    const mutation = useMutation({
        mutationFn: async (data: SignUpFormValues) => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            return { name: data.username };
        },
        onSuccess: (data) => {
            login(data.name);
            router.push("/dashboard");
        },
        onError: (error) => {
            console.error("Registration Failed:", error);
        }
    });

    const onSubmit = (data: SignUpFormValues) => {
        mutation.mutate(data);
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

                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-black" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Masukkan email Anda"
                                    className={`w-full border-b-[1.5px] py-3 bg-transparent outline-none focus:border-primary placeholder:text-gray-400 font-medium transition-colors ${errors.email ? "border-red-500 text-red-500" : "border-gray-400 text-black"}`}
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <span className="mt-1 text-xs font-semibold text-red-500">{errors.email.message}</span>
                                )}
                            </div>

                            <div className="flex flex-col gap-2 mt-2">
                                <label className="text-sm font-semibold text-black" htmlFor="username">Username</label>
                                <input
                                    id="username"
                                    type="text"
                                    placeholder="Masukkan username Anda"
                                    className={`w-full border-b-[1.5px] py-3 bg-transparent outline-none focus:border-primary placeholder:text-gray-400 font-medium transition-colors ${errors.username ? "border-red-500 text-red-500" : "border-gray-400 text-black"}`}
                                    {...register("username")}
                                />
                                {errors.username && (
                                    <span className="mt-1 text-xs font-semibold text-red-500">{errors.username.message}</span>
                                )}
                            </div>

                            <div className="flex flex-col gap-2 mt-2">
                                <label className="text-sm font-semibold text-black" htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Masukkan password Anda"
                                    className={`w-full border-b-[1.5px] py-3 bg-transparent outline-none focus:border-primary placeholder:text-gray-400 font-medium transition-colors ${errors.password ? "border-red-500 text-red-500" : "border-gray-400 text-black"}`}
                                    {...register("password")}
                                />
                                {errors.password && (
                                    <span className="mt-1 text-xs font-semibold text-red-500">{errors.password.message}</span>
                                )}
                            </div>

                            <div className="flex flex-col gap-2 mt-2">
                                <label className="text-sm font-semibold text-black" htmlFor="confirmPassword">Konfirmasi Password</label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Masukkan kembali password Anda"
                                    className={`w-full border-b-[1.5px] py-3 bg-transparent outline-none focus:border-primary placeholder:text-gray-400 font-medium transition-colors ${errors.confirmPassword ? "border-red-500 text-red-500" : "border-gray-400 text-black"}`}
                                    {...register("confirmPassword")}
                                />
                                {errors.confirmPassword && (
                                    <span className="mt-1 text-xs font-semibold text-red-500">{errors.confirmPassword.message}</span>
                                )}
                            </div>

                            <Button
                                type="submit"
                                disabled={mutation.isPending}
                                variant="default"
                                className="mt-6 w-full h-14 text-lg font-semibold text-white rounded-2xl shadow-md transition-colors disabled:opacity-70"
                            >
                                {mutation.isPending ? "Memproses..." : "Daftar"}
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