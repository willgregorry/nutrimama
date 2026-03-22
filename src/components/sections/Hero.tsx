'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex overflow-hidden relative justify-center items-center px-24 pt-24 w-full min-h-screen">
            <div className="grid z-10 grid-cols-1 gap-16 items-center mx-auto mt-12 w-full max-w-7xl lg:grid-cols-2 lg:gap-8">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 50 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-left lg:pr-12">
                    <h1 className="pb-2 text-5xl font-bold tracking-tight sm:text-6xl text-primary">
                        NutriMama
                    </h1>
                    <p className="text-xl sm:text-2xl text-black font-medium leading-relaxed max-w-[500px]">
                        NutriMama adalah website yang membantu ibu hamil dalam menjaga pemenuhan gizi selama masa kehamilan
                    </p>
                    <div className="pt-6">
                        <Link href="/auth/sign-in">
                            <Button
                                variant="default"
                                className="flex justify-around px-8 items-center gap-2 h-14 w-64 text-lg text-neutral-light rounded-2xl shadow-lg ease-in-out transition-transform hover:-translate-y-0.5"
                            >
                                <p>Mulai Sekarang</p>
                                <ArrowRight />
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 30 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center lg:justify-end items-end w-full lg:h-[600px] mt-12 lg:mt-0 pb-12 pr-0 lg:pr-24">

                    <div className="relative w-[280px] sm:w-[340px] h-[360px] sm:h-[460px]">

                        <div className="absolute right-[-16px] top-[-16px] w-full h-full rounded-t-full border-t border-r border-l border-primary/40 -z-10" />
                        <div className="absolute right-[-32px] top-[-32px] w-full h-full rounded-t-full border-t border-r border-l border-primary/30 -z-10" />
                        <div className="absolute right-[-48px] top-[-48px] w-full h-full rounded-t-full border-t border-r border-l border-primary/20 -z-10" />
                        <div className="absolute right-[-64px] top-[-64px] w-full h-full rounded-t-full border-t border-r border-l border-primary/10 -z-10" />

                        <div
                            className="overflow-hidden absolute inset-0 z-10 w-full h-full bg-white rounded-t-full shadow-2xl"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                            }}
                        >
                            <Image
                                src="/hero.png"
                                alt="Ibu Anak"
                                className="object-cover w-full h-full"
                                width={800}
                                height={600}
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}