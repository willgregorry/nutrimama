"use client";

import Image from "next/image"
import { motion } from "motion/react"

export default function About() {
    return (
        <section id="about" className="flex overflow-hidden relative justify-center items-center px-6 md:px-12 xl:px-24 py-24 w-full min-h-screen scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between items-center p-8 lg:p-12 w-full max-w-6xl rounded-3xl border-4 border-primary text-primary"
            >
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-1/2"
                >
                    <Image src="/landing_page/about.webp" alt="About" width={400} height={400} className="w-full h-auto rounded-2xl object-cover" />
                </motion.div>

                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="font-bold leading-tight"
                        style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                    >
                        Ibu hamil beresiko 4X lipat melahirkan bayi dengan gangguan pertumbuhan
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="border-b-4 border-primary w-full origin-left rounded-full"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="font-medium text-left text-black leading-relaxed"
                        style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
                    >
                        Malnutrisi yang terjadi pada ibu hamil dapat menjadi faktor kegagalan
                        dalam optimalisasi masa 1000 Hari Pertama Kehidupan (HPK). Hal ini
                        dapat berdampak pada gangguan pertumbuhan terhadap bayi yang telah lahir.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    )
}