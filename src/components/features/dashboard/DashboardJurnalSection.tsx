"use client"

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardJurnalSection() {
    return (
        <section className="flex flex-col w-full min-w-0">
            <div className="flex justify-between items-center w-full mb-6 sm:mb-8 gap-3">
                <h2
                    className="font-bold text-primary shrink-0"
                    style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.875rem)" }}
                >
                    Jurnal Keluarga Bahagia
                </h2>
                <div className="flex-1 border-t border-primary/30 mx-2 sm:mx-4 hidden sm:block" />
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 bg-white rounded-[32px] p-6 sm:p-10 items-center">
                <div className="relative w-full md:w-[320px] aspect-[4/5] rounded-[24px] overflow-hidden shrink-0">
                    <Image
                        src="/jurnal/dashboard-jurnal.png"
                        alt="Jurnal Keluarga Bahagia"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col gap-6 md:gap-8 grow w-full">
                    <div className="relative w-full max-w-[450px] aspect-[16/10]">
                        <Image
                            src="/jurnal/dashboard-chart.png"
                            alt="Nutrisi Chart"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    
                    <p className="text-neutral-600 font-medium text-base sm:text-xl leading-relaxed max-w-lg">
                        Tracking gizi selama masa kehamilan dan dapatkan laporan rutin
                    </p>

                    <div className="flex justify-end mt-2 md:mt-4">
                        <Link href="/dashboard/jurnal">
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
