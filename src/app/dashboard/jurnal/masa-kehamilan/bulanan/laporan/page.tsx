"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useJurnalStore } from "@/store/useJurnalStore"

const labelMap: Record<string, string> = {
  suplemenKalsium: "Suplemen Kalsium",
  pengukuranLila: "Pengukuran LILA",
  cekHemoglobin: "Cek Kadar Hemoglobin (Hb)",
  pemeriksaanAnc: "Pemeriksaan ANC atau pemeriksaan ke klinik",
  pemeriksaanTensi: "Pemeriksaan Tensi (Tekanan Darah)",
}

export default function LaporanBulananMasaKehamilanPage() {
  const router = useRouter()
  const data = useJurnalStore((state) => state.bulananMasaKehamilan)

  useEffect(() => {
    if (!data) {
      router.replace("/dashboard/jurnal/masa-kehamilan/bulanan")
    }
  }, [data, router])

  if (!data) return null

  return (
    <div className="flex w-full h-full justify-center lg:py-8">
      <div className="flex flex-col w-full max-w-2xl px-4 lg:px-0">

        <div className="flex items-center gap-3 w-full mb-8">
          <Link href="/dashboard/jurnal/masa-kehamilan" className="text-neutral-800 hover:text-primary transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-primary">Jurnal Keluarga Bahagia</h1>
        </div>

        <h2 className="text-xl font-medium text-neutral-800 mb-8 text-center">Laporan Bulanan</h2>

        <div className="flex flex-col gap-6 w-full mb-12">
          {(Object.keys(labelMap) as Array<keyof typeof data>).map((key) => (
            <div key={key} className="flex flex-col gap-2">
              <span className="text-base font-medium text-neutral-700">{labelMap[key]}</span>
              <div className="w-full bg-neutral-200 rounded-lg px-4 py-3">
                <span className="text-base font-medium text-neutral-800">{data[key]}</span>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/dashboard/jurnal/masa-kehamilan/bulanan"
          className="w-max px-8 py-3 text-base font-semibold rounded-xl bg-primary hover:bg-primary-p6 text-white shadow-sm flex items-center justify-center gap-2 transition-colors"
        >
          Input Ulang
        </Link>

      </div>
    </div>
  )
}
