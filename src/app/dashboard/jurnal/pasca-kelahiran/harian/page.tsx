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

const harianSchema = z.object({
  asiEksklusif: z.enum(["Terpenuhi", "Tidak Terpenuhi"], { message: "Pilih salah satu opsi" }),
  mpasi: z.enum(["Terpenuhi", "Tidak Terpenuhi"], { message: "Pilih salah satu opsi" }),
  lemakTambahan: z.enum(["Terpenuhi", "Tidak Terpenuhi"], { message: "Pilih salah satu opsi" }),
  karbohidratProteinNabati: z.enum(["Terpenuhi", "Tidak Terpenuhi"], { message: "Pilih salah satu opsi" }),
  sayuranBuah: z.enum(["Terpenuhi", "Tidak Terpenuhi"], { message: "Pilih salah satu opsi" }),
  garamBeryodium: z.enum(["Terpenuhi", "Tidak Terpenuhi"], { message: "Pilih salah satu opsi" }),
  zatBesiVitaminD3: z.enum(["Terpenuhi", "Tidak Terpenuhi"], { message: "Pilih salah satu opsi" }),
  polaBabBak: z.string().min(1, { message: "Kendala wajib diisi" }),
})

type HarianFormValues = z.infer<typeof harianSchema>

const questions = [
  { name: "asiEksklusif" as const, label: "Apakah sudah diberikan ASI Eksklusif (0-6 Bulan)?" },
  { name: "mpasi" as const, label: "Apakah sudah diberikan MPASI?" },
  { name: "lemakTambahan" as const, label: "Apakah sudah diberikan makanan yang mengandung lemak tambahan (minyak/santan)?" },
  { name: "karbohidratProteinNabati" as const, label: "Apakah sudah diberikan makanan yang mengandung karbohidrat dan protein nabati?" },
  { name: "sayuranBuah" as const, label: "Apakah sudah diberi makan sayuran dan buah-buahan?" },
  { name: "garamBeryodium" as const, label: "Apakah sudah diberikan makanan yang mengandung garam beryodium?" },
  { name: "zatBesiVitaminD3" as const, label: "Apakah sudah diberikan makanan yang mengandung Zat Besi & Vitamin D3?" },
]

export default function HarianPascaKelahiranPage() {
  const setHarianPascaKelahiran = useJurnalStore((state) => state.setHarianPascaKelahiran)
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<HarianFormValues>({
    resolver: zodResolver(harianSchema)
  })

  const onSubmit = async (data: HarianFormValues) => {
    setSubmitting(true)
    try {
      await submitTracking("daily", {
        exclusive_breastfeeding: data.asiEksklusif,
        mpasi: data.mpasi,
        additional_fat: data.lemakTambahan,
        carbohydrate_protein: data.karbohidratProteinNabati,
        vegetables_fruits: data.sayuranBuah,
        iodized_salt: data.garamBeryodium,
        iron_vitamin_d3: data.zatBesiVitaminD3,
        bab_bak_monitoring: data.polaBabBak,
      })
    } catch {}
    setHarianPascaKelahiran(data)
    router.push("/dashboard/jurnal/pasca-kelahiran/harian/laporan")
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

        <h2 className="text-xl font-medium text-neutral-800 mb-8">Input Harian</h2>

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

          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-neutral-900 leading-snug">
              Monitoring pola BAB & BAK?
            </label>
            <input
              type="text"
              placeholder="Masukkan kendala Anda"
              {...register("polaBabBak")}
              className="w-full border-0 border-b-[1.5px] border-neutral-400 bg-transparent px-0 py-3 outline-none focus:border-primary text-neutral-800 placeholder:text-neutral-400 font-medium transition-colors"
            />
            {errors.polaBabBak && <span className="text-red-500 text-sm">{errors.polaBabBak.message}</span>}
          </div>

          <Button type="submit" disabled={submitting} className="w-max mt-4 px-8 py-6 text-base font-semibold rounded-xl bg-primary hover:bg-primary-p6 text-white shadow-sm flex items-center justify-center gap-2">
            {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Input <ArrowRight className="w-4 h-4 ml-2" /></>}
          </Button>
        </form>
      </div>
    </div>
  )
}
