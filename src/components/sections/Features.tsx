'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    useCarousel
} from "@/components/ui/carousel";
import { useState, useCallback, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel";

const featuresData = [
    {
        title: "Kitab Ibu",
        desc: "Modul edukasi berbasis artikel bergambar yang disesuaikan dengan tahapan kehamilan",
        img: "/landing_page/kitab-ibu.png"
    },
    {
        title: "Rancangan Makan",
        desc: "Perancangan rencana makan bagi ibu hamil untuk menjaga gizi selama masa kehamilan",
        img: "/landing_page/rancangan-makan.png"
    },
    {
        title: "Jurnal Keluarga Bahagia",
        desc: "Tracking gizi selama masa kehamilan untuk menjaga keseimbangan gizi pada masa kehamilan",
        img: "/landing_page/jurnal-keluarga-bahagia.png"
    },
    {
        title: "Bimbingan Bidan",
        desc: "Bimbingan bidan untuk menjaga kesehatan perkembangan janin selama masa kehamilan",
        img: "/landing_page/bimbingan-bidan.png"
    }
];

function FeaturesDots() {
    const { api } = useCarousel()
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onInit = useCallback((api: CarouselApi) => {
        if (!api) return
        setScrollSnaps(api.scrollSnapList())
    }, [])

    const onSelect = useCallback((api: CarouselApi) => {
        if (!api) return
        setSelectedIndex(api.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!api) return

        onInit(api)
        onSelect(api)

        api.on("reInit", onInit)
        api.on("reInit", onSelect)
        api.on("select", onSelect)

        return () => {
            api.off("reInit", onInit)
            api.off("reInit", onSelect)
            api.off("select", onSelect)
        }
    }, [api, onInit, onSelect])

    return (
        <div className="flex items-center gap-6">
            {scrollSnaps.map((_, index) => (
                <button
                    key={index}
                    type="button"
                    className={`h-3 w-3 rounded-full transition-all cursor-pointer pointer-events-auto ${index === selectedIndex ? "bg-primary" : "bg-neutral-p8 hover:bg-neutral-p6"}`}
                    onClick={() => {
                        api?.scrollTo(index)
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    )
}

function FeaturesNextButton() {
    const { api } = useCarousel()

    return (
        <button
            type="button"
            className="hidden lg:flex absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 border-2 border-primary text-neutral hover:bg-primary-p5 hover:text-neutral transition-colors h-14 w-14 shrink-0 shadow-sm z-50 items-center justify-center rounded-full bg-primary cursor-pointer pointer-events-auto"
            onClick={() => {
                api?.scrollNext()
            }}
            aria-label="Next slide"
        >
            <ArrowRight className="w-6 h-6" />
        </button>
    )
}

export default function Features() {
    return (
        <section id="features" className="flex overflow-hidden relative flex-col justify-center items-center px-4 py-24 w-full min-h-screen scroll-mt-24">
            <div className="flex flex-col gap-12 w-full max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-6 w-full"
                >
                    <h2 className="text-3xl font-bold text-black">
                        Fitur
                    </h2>
                    <div className="flex-1 border-t border-black"></div>
                </motion.div>

                {/* Big Carousel Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 p-8 sm:p-12 lg:p-16"
                >
                    <Carousel opts={{ align: "start", loop: true }} className="w-full relative">
                        <CarouselContent>
                            {featuresData.map((feature, idx) => (
                                <CarouselItem key={idx}>
                                    <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-center">

                                        {/* Gambar*/}
                                        <div className="relative w-full lg:w-96 h-96 sm:h-[400px] lg:rounded-l-2xl overflow-hidden shadow-sm shrink-0">
                                            <Image
                                                src={feature.img}
                                                alt={feature.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Deskripsi fitur */}
                                        <div className="flex flex-col gap-8 flex-1 relative pr-0 lg:pr-20 w-full">
                                            <h3 className="text-4xl font-bold text-primary">
                                                {feature.title}
                                            </h3>

                                            <p className="text-black font-medium text-lg leading-relaxed max-w-xl">
                                                {feature.desc}
                                            </p>

                                            <div className="pt-4">
                                                <Button variant="default" className="px-8 py-5 flex items-center gap-2">
                                                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                                                </Button>
                                            </div>
                                        </div>

                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Navigation Dots */}
                        <div className="mt-8 flex justify-center lg:justify-start">
                            <div className="w-full lg:w-96 flex justify-start z-50">
                                <FeaturesDots />
                            </div>
                        </div>

                        {/* Custom Next Button */}
                        <FeaturesNextButton />
                    </Carousel>
                </motion.div>
            </div>
        </section>
    )
}