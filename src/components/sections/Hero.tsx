'use client'

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative flex items-center justify-center w-full min-h-screen bgc-gradient pt-24 px-4 overflow-hidden">
            <div className="max-w-7xl mt-12 mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 50 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:pr-12">
                    <h1 className="text-5xl sm:text-6xl font-bold text-primary tracking-tight pb-2">
                        NutriMama
                    </h1>
                    <p className="text-xl sm:text-2xl text-primary font-medium leading-relaxed max-w-[500px]">
                        NutriMama adalah website yang membantu ibu hamil dalam menjaga pemenuhan gizi selama masa kehamilan
                    </p>
                    <div className="pt-6">
                        <Button
                            variant="default"
                            className="h-14 w-56 text-lg text-neutral-light rounded-2xl shadow-lg ease-in-out transition-transform hover:-translate-y-0.5"
                        >
                            Get Started
                        </Button>
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
                            className="absolute inset-0 w-full h-full rounded-t-full overflow-hidden shadow-2xl z-10 bg-white"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                            }}
                        >
                            <Image
                                src="/hero.png"
                                alt="Ibu Anak"
                                className="w-full h-full object-cover"
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