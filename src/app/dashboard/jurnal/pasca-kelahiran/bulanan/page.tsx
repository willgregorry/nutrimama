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
  vitaminA: z.enum(["Terpenuhi", "Tidak Terpenuhi"], { message: "Pilih salah satu opsi" }),
  beratBadanAnak: z.string().min(1, { message: "Berat badan anak wajib diisi" }),
  tinggiAnak: z.string().min(1, { message: "Tinggi/panjang anak wajib diisi" }),
  lingkarKepala: z.string().min(1, { message: "Lingkar kepala wajib diisi" }),
  imunisasiDasar: z.enum(["Terpenuhi", "Tidak Terpenuhi"], { message: "Pilih salah satu opsi" }),
  cekHemoglobin: z.enum(["Terpenuhi", "Tidak Terpenuhi"], { message: "Pilih salah satu opsi" }),
})

type BulananFormValues = z.infer<typeof bulananSchema>

const radioQuestions = [
  { name: "vitaminA" as const, label: "Apakah sudah mengkonsumsi Vitamin A?" },
  { name: "imunisasiDasar" as const, label: "Apakah sudah melakukan Imunisasi Dasar?" },
  { name: "cekHemoglobin" as const, label: "Apakah sudah cek Kadar Hemoglobin (Hb)?" },
]

export default function BulananPascaKelahiranPage() {
  const setBulananPascaKelahiran = useJurnalStore((state) => state.setBulananPascaKelahiran)
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
        vitamin_a: data.vitaminA,
        child_weight: data.beratBadanAnak,
        child_height: data.tinggiAnak,
        head_circumference: data.lingkarKepala,
        basic_immunization: data.imunisasiDasar,
        hemoglobin_check: data.cekHemoglobin,
      })
    } catch {}
    setBulananPascaKelahiran(data)
    router.push("/dashboard/jurnal/pasca-kelahiran/bulanan/laporan")
  }

  return (
    <div className="flex w-full h-full justify-center lg:py-8">
      <div className="flex flex-col w-full max-w-2xl px-4 lg:px-0">
        <div className="flex items-center gap-3 w-full mb-8">
          <Link href="/dashboard/jurnal/pasca-kelahiran" className="text-neutral-800 hover:text-primary transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-primary">Jurnal Keluarga Bahagia</h1>
        </div>

        <h2 className="text-xl font-medium text-neutral-800 mb-8">Input Bulanan</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-full mb-12">
          <div className="flex flex-col gap-4">
            <label className="text-lg font-medium text-neutral-900 leading-snug">
              Apakah sudah mengkonsumsi Vitamin A?
            </label>
            <div className="flex flex-row gap-8 items-center">
              {["Terpenuhi", "Tidak Terpenuhi"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value={opt} {...register("vitaminA")} className="w-5 h-5 accent-primary cursor-pointer" />
                  <span className="text-base text-neutral-800 font-medium">{opt}</span>
                </label>
              ))}
            </div>
            {errors.vitaminA && <span className="text-red-500 text-sm">{errors.vitaminA.message}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-neutral-900 leading-snug">
              Apakah sudah melakukan penimbangan Berat Badan (BB) Anak?
            </label>
            <input
              type="text"
              placeholder="Masukkan berat badan anak"
              {...register("beratBadanAnak")}
              className="w-full border-0 border-b-[1.5px] border-neutral-400 bg-transparent px-0 py-3 outline-none focus:border-primary text-neutral-800 placeholder:text-neutral-400 font-medium transition-colors"
            />
            {errors.beratBadanAnak && <span className="text-red-500 text-sm">{errors.beratBadanAnak.message}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-neutral-900 leading-snug">
              Apakah sudah melakukan pengukuran Tinggi/Panjang Anak?
            </label>
            <input
              type="text"
              placeholder="Masukkan tinggi/panjang anak"
              {...register("tinggiAnak")}
              className="w-full border-0 border-b-[1.5px] border-neutral-400 bg-transparent px-0 py-3 outline-none focus:border-primary text-neutral-800 placeholder:text-neutral-400 font-medium transition-colors"
            />
            {errors.tinggiAnak && <span className="text-red-500 text-sm">{errors.tinggiAnak.message}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-neutral-900 leading-snug">
              Apakah sudah melakukan pengukuran Lingkar Kepala?
            </label>
            <input
              type="text"
              placeholder="Masukkan ukuran lingkar kepala"
              {...register("lingkarKepala")}
              className="w-full border-0 border-b-[1.5px] border-neutral-400 bg-transparent px-0 py-3 outline-none focus:border-primary text-neutral-800 placeholder:text-neutral-400 font-medium transition-colors"
            />
            {errors.lingkarKepala && <span className="text-red-500 text-sm">{errors.lingkarKepala.message}</span>}
          </div>

          {radioQuestions.filter(q => q.name !== "vitaminA").map((q) => (
            <div key={q.name} className="flex flex-col gap-4">
              <label className="text-lg font-medium text-neutral-900 leading-snug">{q.label}</label>
              <div className="flex flex-row gap-8 items-center">
                {["Terpenuhi", "Tidak Terpenuhi"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" value={opt} {...register(q.name)} className="w-5 h-5 accent-primary cursor-pointer" />
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
