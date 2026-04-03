"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/store/useAuthStore"

export default function ProfilePage() {
    const [status, setStatus] = useState("ibu-hamil")
    const { user } = useAuthStore()

    return (
        <div className="flex flex-col gap-8 w-full h-fit animate-in fade-in duration-500 animate-slide-up">
            <div className="bg-white rounded-[40px] p-8 md:p-20 mx-auto w-full">
                {/* Header */}
                <div className="flex items-center gap-4 w-full mb-12 sm:mb-16">
                    <h1
                        className="font-bold text-primary shrink-0 leading-none"
                        style={{ fontSize: "clamp(1.3rem, 3vw, 1.75rem)" }}
                    >
                        User Tracking
                    </h1>
                    <div className="flex-1 h-[2px] bg-primary/40 mt-1" />
                </div>

                <div className="flex flex-col gap-10 max-w-2xl">
                    {/* Nama Section */}
                    <div className="flex flex-col gap-4">
                        <label className="text-lg font-semibold text-black">Nama</label>
                        <div className="flex flex-col gap-1">
                            <p className="text-xl font-bold text-black py-2">
                                {user?.name}
                            </p>
                            <div className="w-full h-[2px] bg-black/80" />
                        </div>
                    </div>

                    {/* Status Kehamilan Section */}
                    <div className="flex flex-col gap-6 mt-4">
                        <label className="text-xl font-semibold text-black">Status Kehamilan</label>
                        <div className="flex flex-col gap-5">
                            {[
                                { id: "ibu-hamil", label: "Ibu Hamil" },
                                { id: "pasca-melahirkan", label: "Pasca Melahirkan" },
                                { id: "tidak-mengandung", label: "Tidak Mengandung" }
                            ].map((item) => (
                                <label key={item.id} className="flex items-center gap-4 cursor-pointer group">
                                    <div className="relative flex items-center justify-center">
                                        <input
                                            type="radio"
                                            name="status-kehamilan"
                                            value={item.id}
                                            checked={status === item.id}
                                            onChange={(e) => setStatus(e.target.value)}
                                            className="appearance-none w-5 h-5 rounded-full border-2 border-neutral-400 checked:border-primary transition-all cursor-pointer"
                                        />
                                        {status === item.id && (
                                            <div className="absolute w-3 h-3 rounded-full bg-primary animate-in zoom-in duration-200" />
                                        )}
                                    </div>
                                    <span className="text-lg sm:text-xl font-medium text-black group-hover:text-primary transition-colors">
                                        {item.label}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons Section */}
                    <div className="flex flex-col gap-5 mt-10 w-full">
                        <Button
                            className="bg-primary hover:bg-primary/90 text-white rounded-2xl w-auto h-14 sm:h-16 px-4 text-sm lg:text-lg font-semibold flex justify-between items-center group transition-all"
                        >
                            <span className="text-center">Laporan Mingguan Jurnal Keluarga Bahagia</span>

                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                        </Button>

                        <Button
                            className="bg-primary hover:bg-primary/90 text-white rounded-2xl h-14 sm:h-16 px-4 text-sm lg:text-lg font-semibold flex justify-between items-center group transition-all"
                        >
                            <span>Menu Mingguan</span>
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                        </Button>

                        <Button
                            className="bg-primary hover:bg-primary/90 text-white rounded-2xl h-14 sm:h-16 px-4 text-sm lg:text-lg font-semibold flex justify-between items-center group transition-all"
                        >
                            <span>Riwayat Konsultasi</span>
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
