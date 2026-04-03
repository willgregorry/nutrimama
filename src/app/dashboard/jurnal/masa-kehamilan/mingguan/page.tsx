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

const mingguanSchema = z.object({
  omega3: z.enum(["Terpenuhi", "Tidak Terpenuhi"], {
    message: "Pilih salah satu opsi",
  }),
  beratBadan: z.string().min(1, { message: "Berat badan wajib diisi" }),
  aktivitasFisik: z.string().min(1, { message: "Aktivitas fisik wajib diisi" }),
})

type MingguanFormValues = z.infer<typeof mingguanSchema>

export default function MingguanMasaKehamilanPage() {
  const setMingguanMasaKehamilan = useJurnalStore((state) => state.setMingguanMasaKehamilan)
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<MingguanFormValues>({
    resolver: zodResolver(mingguanSchema)
  })

  const onSubmit = async (data: MingguanFormValues) => {
    setSubmitting(true)
    try {
      await submitTracking("weekly", {
        omega3_fish: data.omega3,
        body_weight: data.beratBadan,
        physical_activity: data.aktivitasFisik,
      })
    } catch {}
    setMingguanMasaKehamilan(data)
    router.push("/dashboard/jurnal/masa-kehamilan/mingguan/laporan")
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

        <h2 className="text-xl font-medium text-neutral-800 mb-8">Input Mingguan</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-full mb-12">

          <div className="flex flex-col gap-4">
            <label className="text-lg font-medium text-neutral-900 leading-snug">
              Apakah sudah mengkonsumsi Omega-3/Ikan laut?
            </label>
            <div className="flex flex-row gap-8 items-center">
              {["Terpenuhi", "Tidak Terpenuhi"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value={opt}
                    {...register("omega3")}
                    className="w-5 h-5 accent-primary cursor-pointer"
                  />
                  <span className="text-base text-neutral-800 font-medium">{opt}</span>
                </label>
              ))}
            </div>
            {errors.omega3 && <span className="text-red-500 text-sm">{errors.omega3.message}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-neutral-900 leading-snug">
              Apakah sudah melakukan timbang Berat Badan (BB)?
            </label>
            <input
              type="text"
              placeholder="Masukkan Berat Badan Anda"
              {...register("beratBadan")}
              className="w-full border-0 border-b-[1.5px] border-neutral-400 bg-transparent px-0 py-3 outline-none focus:border-primary text-neutral-800 placeholder:text-neutral-400 font-medium transition-colors"
            />
            {errors.beratBadan && <span className="text-red-500 text-sm">{errors.beratBadan.message}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-neutral-900 leading-snug">
              Apakah ada melakukan aktivitas fisik ringan?
            </label>
            <input
              type="text"
              placeholder="Masukkan aktivitas Anda"
              {...register("aktivitasFisik")}
              className="w-full border-0 border-b-[1.5px] border-neutral-400 bg-transparent px-0 py-3 outline-none focus:border-primary text-neutral-800 placeholder:text-neutral-400 font-medium transition-colors"
            />
            {errors.aktivitasFisik && <span className="text-red-500 text-sm">{errors.aktivitasFisik.message}</span>}
          </div>

          <Button type="submit" disabled={submitting} className="w-max mt-4 px-8 py-6 text-base font-semibold rounded-xl bg-primary hover:bg-primary-p6 text-white shadow-sm flex items-center justify-center gap-2">
            {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Input <ArrowRight className="w-4 h-4 ml-2" /></>}
          </Button>

        </form>

      </div>
    </div>
  )
}
