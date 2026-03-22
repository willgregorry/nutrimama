"use client";

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function AboutCTA() {
    return (
        <section className="relative flex justify-center items-center w-full min-h-[450px] bg-[url('/landing_page/aboutcta.webp')] bg-cover bg-center bg-no-repeat overflow-hidden">
            <div className="absolute inset-0 bg-primary/20"></div>
            <div className="absolute inset-0 bg-black/50"></div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2 }
                    }
                }}
                className="flex relative z-10 flex-col gap-8 items-center px-8 py-24 mx-auto max-w-4xl text-center text-white md:px-12"
            >
                <motion.h1
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold drop-shadow-lg md:text-6xl"
                >
                    NutriMama
                </motion.h1>
                <motion.p
                    variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-lg font-medium leading-relaxed drop-shadow-md md:text-xl text-white/95"
                >
                    NutriMama adalah platform terpadu yang membantu ibu hamil memantau dan memenuhi kebutuhan gizi secara optimal.
                    Melalui fitur-fitur edukasi dan penyesuaian kalori yang akurat, calon ibu tak perlu lagi cemas soal gizi.
                </motion.p>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6 }}
                >
                    <Link href="/about">
                        <Button variant="default" className="flex items-center gap-2 px-8 py-6 text-lg shadow-xl hover:scale-105 transition-transform">
                            Mulai Sekarang <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    )
}