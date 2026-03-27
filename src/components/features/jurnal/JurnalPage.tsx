"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function JurnalPage() {
    return (
        <div className="flex w-full h-full items-center justify-center">
            <div className="flex flex-col items-center gap-8 w-full max-w-lg text-center">

                <h1 className="text-3xl font-bold text-primary">Jurnal Keluarga Bahagia</h1>

                <div className="w-full aspect-video relative overflow-hidden rounded-2xl shadow-sm">
                    <Image
                        src="/jurnal/jurnal.png"
                        alt="Jurnal Keluarga Bahagia"
                        fill
                        className="object-cover"
                    />
                </div>

                <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                    Lakukan tracking gizi dalam jangka waktu harian, mingguan, dan bulanan, serta dapatkan laporan terkini gizi anda.
                </p>

                <div className="flex flex-col gap-3 w-full">
                    <Link href="/dashboard/jurnal/masa-kehamilan" className="w-full">
                        <Button variant="default" className="w-full py-6 text-base font-semibold rounded-xl bg-primary hover:bg-primary-p6 text-white shadow-sm flex items-center justify-center gap-2">
                            Masa Kehamilan <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="/dashboard/jurnal/pasca-kelahiran" className="w-full">
                        <Button variant="default" className="w-full py-6 text-base font-semibold rounded-xl bg-primary hover:bg-primary-p6 text-white shadow-sm flex items-center justify-center gap-2">
                            Pasca Kelahiran <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
