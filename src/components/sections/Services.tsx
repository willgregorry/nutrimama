"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const servicesData = [
    "Menyediakan media edukasi terkait pemenuhan gizi pada ibu hamil melalui informasi yang kredibel dan akurat serta sesuai dengan arahan para ahli",
    "Membuat perencanaan makan yang terstruktur bagi ibu hamil untuk memenuhi gizi selama masa kehamilan",
    "Membuat tracking pemenuhan gizi pada ibu hamil demi menjaga keseimbangan gizi selama masa kehamilan"
];

export default function Services() {
    return (
        <section id="services" className="flex overflow-hidden relative flex-col justify-center items-center px-6 md:px-12 xl:px-24 py-24 w-full min-h-screen scroll-mt-24">
            <div className="flex flex-col gap-8 w-full max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-6 w-full"
                >
                    <h2 className="font-bold text-black whitespace-nowrap" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                        Layanan
                    </h2>
                    <div className="flex-1 border-t border-black"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 w-full items-stretch">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-96 shrink-0"
                    >
                        <div className="relative w-full h-72 lg:h-full rounded-3xl overflow-hidden shadow-md">
                            <Image
                                src="/landing_page/services.webp"
                                alt="Layanan NutriMama"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-8 w-full lg:w-2/3 justify-center">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-bold text-primary max-w-xl leading-tight"
                            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
                        >
                            Membantu Mencegah Malnutrisi Pada Ibu Hamil
                        </motion.h3>

                        <div className="flex flex-col gap-4">
                            {servicesData.map((desc, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.15 }}
                                    className="flex items-center p-6 bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-primary shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <p className="text-black font-medium leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}>
                                        {desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-2 flex justify-end"
                        >
                            <Link href="/services">
                                <Button variant="default" className="px-8 py-5">
                                    See More <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}