"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface JurnalPeriodPageProps {
    title: string;
    type: "masa-kehamilan" | "pasca-kelahiran";
    backLink?: string;
}

export default function JurnalPeriodPage({
    title,
    type,
    backLink = "/dashboard/jurnal"
}: JurnalPeriodPageProps) {
    return (
        <div className="flex w-full h-full items-center justify-center">
            <div className="flex flex-col items-center gap-6 w-full text-center">

                <div className="flex items-center justify-center gap-3 w-full mb-2">
                    <Link href={backLink} className="text-neutral-800 hover:text-primary transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <h1 className="text-2xl md:text-3xl font-bold text-primary text-left">
                        {title}
                    </h1>
                </div>

                <div className="w-full max-w-lg aspect-video relative overflow-hidden rounded-2xl shadow-sm mt-2">
                    <Image
                        src="/jurnal/jurnal.png"
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>

                <p className="text-neutral-800 text-base md:text-lg leading-relaxed w-full max-w-2xl text-center mt-2">
                    Lakukan tracking gizi dalam jangka waktu harian, mingguan, dan bulanan, serta dapatkan laporan terkini gizi anda.
                </p>

                <div className="flex flex-col gap-3 w-full max-w-2xl mb-12 lg:mb-0">
                    <Link href={`/dashboard/jurnal/${type}/harian`} className="w-full">
                        <Button variant="default" className="w-full py-6 text-base font-semibold rounded-xl bg-primary hover:bg-primary-p6 text-white shadow-sm flex items-center justify-center gap-2">
                            Harian <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                    <Link href={`/dashboard/jurnal/${type}/mingguan`} className="w-full">
                        <Button variant="default" className="w-full py-6 text-base font-semibold rounded-xl bg-primary hover:bg-primary-p6 text-white shadow-sm flex items-center justify-center gap-2">
                            Mingguan <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                    <Link href={`/dashboard/jurnal/${type}/bulanan`} className="w-full">
                        <Button variant="default" className="w-full py-6 text-base font-semibold rounded-xl bg-primary hover:bg-primary-p6 text-white shadow-sm flex items-center justify-center gap-2">
                            Bulanan <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
