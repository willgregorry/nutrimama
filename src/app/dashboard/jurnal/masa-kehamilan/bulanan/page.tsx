"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useJurnalStore } from "@/store/useJurnalStore"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { submitTracking } from "@/lib/tracking"
import { useState } from "react"

const bulananSchema = z.object({
  suplemenKalsium: z.enum(["Terpenuhi", "Tidak Terpenuhi"], {
    message: "Pilih salah satu opsi",
  }),
  pengukuranLila: z.enum(["Terpenuhi", "Tidak Terpenuhi"], {
    message: "Pilih salah satu opsi",
  }),
  cekHemoglobin: z.enum(["Terpenuhi", "Tidak Terpenuhi"], {
    message: "Pilih salah satu opsi",
  }),
  pemeriksaanAnc: z.enum(["Terpenuhi", "Tidak Terpenuhi"], {
    message: "Pilih salah satu opsi",
  }),
  pemeriksaanTensi: z.enum(["Terpenuhi", "Tidak Terpenuhi"], {
    message: "Pilih salah satu opsi",
  }),
})

type BulananFormValues = z.infer<typeof bulananSchema>

const questions = [
  { name: "suplemenKalsium" as const, label: "Apakah sudah mengkonsumsi suplemen kalsium?" },
  { name: "pengukuranLila" as const, label: "Apakah sudah melakukan pengukuran LILA?" },
  { name: "cekHemoglobin" as const, label: "Apakah sudah cek Kadar Hemoglobin (Hb)?" },
  { name: "pemeriksaanAnc" as const, label: "Apakah ada melakukan pemeriksaan ANC atau pemeriksaan lain ke klinik?" },
  { name: "pemeriksaanTensi" as const, label: "Apakah ada melakukan pemeriksaan Tensi (tekanan darah)?" },
]

export default function BulananMasaKehamilanPage() {
  const setBulananMasaKehamilan = useJurnalStore((state) => state.setBulananMasaKehamilan)
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<BulananFormValues>({
    resolver: zodResolver(bulananSchema)
  })

  const onSubmit = async (data: BulananFormValues) => {
    setSubmitting(true)
    try {
      await submitTracking("monthly", {
        calcium_supplement: data.suplemenKalsium,
        lila_measurement: data.pengukuranLila,
        hemoglobin_check: data.cekHemoglobin,
        anc_check: data.pemeriksaanAnc,
        blood_pressure_check: data.pemeriksaanTensi,
      })
    } catch {}
    setBulananMasaKehamilan(data)
    router.push("/dashboard/jurnal/masa-kehamilan/bulanan/laporan")
  }

  return (
    <div className="flex w-full h-full justify-center lg:py-8">
      <div className="flex flex-col w-full max-w-2xl px-4 lg:px-0">

        <div className="flex items-center gap-3 w-full mb-8">
          <Link href="/dashboard/jurnal/masa-kehamilan" className="text-neutral-800 hover:text-primary transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-primary">Jurnal Keluarga Bahagia</h1>
        </div>

        <h2 className="text-xl font-medium text-neutral-800 mb-8">Input Bulanan</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-full mb-12">
          {questions.map((q) => (
            <div key={q.name} className="flex flex-col gap-4">
              <label className="text-lg font-medium text-neutral-900 leading-snug">
                {q.label}
              </label>
              <div className="flex flex-row gap-8 items-center">
                {["Terpenuhi", "Tidak Terpenuhi"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value={opt}
                      {...register(q.name)}
                      className="w-5 h-5 accent-primary cursor-pointer"
                    />
                    <span className="text-base text-neutral-800 font-medium">{opt}</span>
                  </label>
                ))}
              </div>
              {errors[q.name] && <span className="text-red-500 text-sm">{errors[q.name]?.message}</span>}
            </div>
          ))}

          <Button type="submit" disabled={submitting} className="w-max mt-4 px-8 py-6 text-base font-semibold rounded-xl bg-primary hover:bg-primary-p6 text-white shadow-sm flex items-center justify-center gap-2">
            {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Input <ArrowRight className="w-4 h-4 ml-2" /></>}
          </Button>
        </form>

      </div>
    </div>
  )
}
