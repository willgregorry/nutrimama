"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Loader2 } from "lucide-react"
import { useRancanganMakan } from "@/hooks/useRancanganMakan"

export default function RancanganMakanPage() {
    const [started, setStarted] = useState(false)
    const { data, isLoading, isError } = useRancanganMakan()

    if (!started) {
        return (
            <div className="flex w-full h-full items-center justify-center">
                <div className="flex flex-col gap-8 items-center justify-center w-full h-full max-w-xl text-center">
                    <h1 className="text-3xl font-bold text-primary">Rancangan Makan</h1>

                    <div className="w-full aspect-video relative overflow-hidden rounded-2xl shadow-sm">
                        <Image
                            src="/rancangan-makan/rancang.webp"
                            alt="Rancangan Makan"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                        Membantu perancangan rencana makan mingguan berdasarkan laporan pada Jurnal Keluarga Bahagia. Ibu hamil tidak perlu khawatir lagi mengenai asupan gizi.
                    </p>

                    <Button
                        onClick={() => setStarted(true)}
                        className="px-8 py-6 rounded-xl font-medium text-lg flex items-center gap-2 group hover:bg-primary/95 transition-all bg-primary text-white"
                        variant="default"
                    >
                        Hasilkan <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="flex w-full h-full min-h-96 flex-col items-center justify-center gap-6">
                <h1 className="text-3xl font-bold text-primary">Rancangan Makan</h1>
                <Loader2 className="w-12 h-12 text-neutral-400 animate-spin" />
                <p className="text-neutral-500 text-base">Mengakses Jurnal Keluarga Bahagia</p>
            </div>
        )
    }

    if (isError || !data) {
        return (
            <div className="flex w-full h-full min-h-96 flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold text-primary">Rancangan Makan</h1>
                <p className="text-neutral-500">Gagal memuat data. Silakan coba lagi.</p>
                <Button onClick={() => setStarted(false)} variant="default">Kembali</Button>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setStarted(false)}
                    className="p-2 -ml-2 text-black hover:bg-black/5 rounded-full transition-colors cursor-pointer"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <h1 className="text-2xl font-bold text-primary">Rancangan Makan</h1>
            </div>

            <p className="text-neutral-600 text-base">Berikut rekomendasi rancangan makan selama seminggu :</p>

            <div className="flex flex-col gap-10">
                {data.map((hari) => (
                    <div key={hari.hari} className="flex flex-col gap-4">
                        <h2 className="text-lg font-semibold text-black">{hari.hari}</h2>
                        <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide snap-x">
                            {hari.menu.map((item) => (
                                <div
                                    key={item.nama}
                                    className="flex flex-col gap-3 shrink-0 snap-start w-56 bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    <div className="relative w-full h-52">
                                        <Image
                                            src={item.gambar}
                                            alt={item.nama}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="px-4 pb-4 flex items-center justify-center gap-1">
                                        <p className="font-semibold text-base text-black leading-snug">{item.nama}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}