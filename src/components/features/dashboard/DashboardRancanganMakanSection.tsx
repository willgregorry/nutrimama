"use client"

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardRancanganMakanSection() {
    return (
        <section className="flex flex-col w-full min-w-0 mt-8 mb-16">
            <div className="flex justify-between items-center w-full mb-6 sm:mb-8 gap-3">
                <h2
                    className="font-bold text-primary shrink-0"
                    style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.875rem)" }}
                >
                    Rancangan Makan
                </h2>
                <div className="flex-1 border-t border-primary/30 mx-2 sm:mx-4 hidden sm:block" />
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 bg-white rounded-[32px] p-6 sm:p-10 items-center">
                <div className="relative w-full md:w-[320px] aspect-[4/5] rounded-[24px] overflow-hidden shrink-0">
                    <Image
                        src="/rancangan-makan/dashboard-rancangan.png"
                        alt="Rancangan Makan"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col gap-8 md:gap-10 grow w-full items-center md:items-start text-center md:text-left">
                    <div className="relative flex items-center justify-center w-full h-24 sm:h-32">
                        <Image
                            src="/rancangan-makan/dashboard-food.png"
                            alt="Food Icon"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <p className="text-neutral-600 font-medium text-base sm:text-xl leading-relaxed max-w-lg">
                        Perancangan makan bagi ibu hamil untuk memenuhi gizi selama masa kehamilan
                    </p>

                    <div className="flex justify-end w-full mt-2">
                        <Link href="/dashboard/rancangan-makan">
                            <Button
                                variant="default"
                                className="bg-primary hover:bg-primary/90 text-white rounded-[18px] px-8 py-7 shadow-sm font-semibold flex items-center gap-2 text-lg group"
                            >
                                Lainnya <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
