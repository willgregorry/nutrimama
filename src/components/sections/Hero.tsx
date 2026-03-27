'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex overflow-hidden relative justify-center items-center px-6 md:px-12 xl:px-24 pt-24 w-full min-h-screen">
            <div className="grid z-10 grid-cols-1 gap-16 items-center mx-auto mt-12 w-full max-w-7xl lg:grid-cols-2 lg:gap-8">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col lg:pl-16 items-center space-y-4 text-center lg:items-start lg:text-left">
                    <h1 className="pb-2 font-bold tracking-tight text-primary" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                        NutriMama
                    </h1>
                    <p className="text-black font-medium leading-relaxed max-w-lg" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
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
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center lg:justify-end items-end w-full lg:h-96 xl:h-[600px] mt-12 lg:mt-0 pb-12 pr-0 lg:pr-24">

                    <div className="relative w-64 sm:w-72 lg:w-80 h-80 sm:h-96 lg:h-[420px] xl:h-[480px]">

                        <div className="absolute -right-4 -top-4 w-full h-full rounded-t-full border-t border-r border-l border-primary/40 -z-10" />
                        <div className="absolute -right-8 -top-8 w-full h-full rounded-t-full border-t border-r border-l border-primary/30 -z-10" />
                        <div className="absolute -right-12 -top-12 w-full h-full rounded-t-full border-t border-r border-l border-primary/20 -z-10" />
                        <div className="absolute -right-16 -top-16 w-full h-full rounded-t-full border-t border-r border-l border-primary/10 -z-10" />

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