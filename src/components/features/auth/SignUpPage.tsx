"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import axios from "axios";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const signUpSchema = z.object({
    email: z.string().min(1, { message: "Email wajib diisi" }).email({ message: "Format email tidak valid" }),
    username: z.string().min(3, { message: "Username minimal 3 karakter" }),
    password: z.string().min(8, { message: "Password minimal 8 karakter" }),
    confirmPassword: z.string().min(1, { message: "Konfirmasi password wajib diisi" }),
    role: z.enum(["mother", "consultant"], { message: "Status wajib dipilih" })
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password tidak cocok"
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUpPage() {

    const router = useRouter();
    const login = useAuthStore((state) => state.login);

    const form = useForm<SignUpFormValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            role: undefined,
        }
    });

    const mutation = useMutation({
        mutationFn: async (data: SignUpFormValues) => {
            const { confirmPassword, username, ...rest } = data;
            const postData = { ...rest, name: username };
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, postData);
            return response.data;
        },
        onSuccess: (data) => {
            const username = data?.user?.username || data?.user?.name || data?.data?.user?.username || data?.data?.user?.name || data?.data?.username || data?.data?.name || form.getValues().username;
            const token = data?.token || data?.access_token || data?.data?.token || data?.data?.access_token;
            if (token) {
                localStorage.setItem("accessToken", token);
            }
            login(username);
            router.push("/dashboard");
        },
        onError: (error: any) => {
            console.error("Registration Failed:", error);
            const errorMessage = error.response?.data?.error;
            if (errorMessage === "email already exists" || errorMessage?.includes("already exists")) {
                form.setError("email", { type: "manual", message: "Email sudah terdaftar!" });
            } else if (errorMessage) {
                form.setError("email", { type: "manual", message: errorMessage });
            }
        }
    });

    const onSubmit = (data: SignUpFormValues) => {
        mutation.mutate(data);
    };

    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-center px-4 pt-32 pb-16 w-full min-h-screen lg:flex-row bgc-main lg:px-24">

                <div className="hidden lg:flex flex-col flex-1 gap-12 justify-center items-center w-full max-w-xl lg:items-start">
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

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-2">
                                            <FormLabel className="text-sm font-semibold text-black">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="Masukkan email Anda"
                                                    className={`w-full border-0 border-b-[1.5px] rounded-none px-0 py-3 bg-transparent outline-none focus-visible:ring-0 focus:border-primary shadow-none placeholder:text-gray-400 font-medium transition-colors ${form.formState.errors.email ? "border-red-500 text-red-500" : "border-gray-400 text-black"}`}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="mt-1 text-xs font-semibold text-red-500" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-2 mt-2">
                                            <FormLabel className="text-sm font-semibold text-black">Username</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Masukkan username Anda"
                                                    className={`w-full border-0 border-b-[1.5px] rounded-none px-0 py-3 bg-transparent outline-none focus-visible:ring-0 focus:border-primary shadow-none placeholder:text-gray-400 font-medium transition-colors ${form.formState.errors.username ? "border-red-500 text-red-500" : "border-gray-400 text-black"}`}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="mt-1 text-xs font-semibold text-red-500" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-2 mt-2">
                                            <FormLabel className="text-sm font-semibold text-black">Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Masukkan password Anda"
                                                    className={`w-full border-0 border-b-[1.5px] rounded-none px-0 py-3 bg-transparent outline-none focus-visible:ring-0 focus:border-primary shadow-none placeholder:text-gray-400 font-medium transition-colors ${form.formState.errors.password ? "border-red-500 text-red-500" : "border-gray-400 text-black"}`}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="mt-1 text-xs font-semibold text-red-500" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-2 mt-2">
                                            <FormLabel className="text-sm font-semibold text-black">Konfirmasi Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="Masukkan kembali password Anda"
                                                    className={`w-full border-0 border-b-[1.5px] rounded-none px-0 py-3 bg-transparent outline-none focus-visible:ring-0 focus:border-primary shadow-none placeholder:text-gray-400 font-medium transition-colors ${form.formState.errors.confirmPassword ? "border-red-500 text-red-500" : "border-gray-400 text-black"}`}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="mt-1 text-xs font-semibold text-red-500" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="role"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-2 mt-4">
                                            <FormLabel className="text-sm font-semibold text-black mb-1">Status</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex flex-col space-y-1"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="mother" />
                                                        </FormControl>
                                                        <FormLabel className="font-medium text-sm text-black cursor-pointer">
                                                            Ibu Hamil
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="consultant" />
                                                        </FormControl>
                                                        <FormLabel className="font-medium text-sm text-black cursor-pointer">
                                                            Bidan
                                                        </FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage className="mt-1 text-xs font-semibold text-red-500" />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    disabled={mutation.isPending}
                                    variant="default"
                                    className="mt-4 w-full h-14 text-lg font-semibold text-white rounded-2xl shadow-md transition-colors disabled:opacity-70 flex items-center justify-center"
                                >
                                    {mutation.isPending ? <Loader2 className="w-6 h-6 animate-spin" /> : "Daftar"}
                                </Button>
                            </form>
                        </Form>

                        <p className="text-[13px] text-center font-bold text-black mt-2">
                            Sudah punya akun? <Link href="/auth/sign-in" className="transition-colors text-primary hover:text-primary-hover">Masuk sekarang</Link>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}