"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useJurnalStore } from "@/store/useJurnalStore"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const harianSchema = z.object({
  proteinHewani: z.enum(["Terpenuhi", "Tidak Terpenuhi"], {
    message: "Pilih salah satu opsi",
  }),
  airPutih: z.enum(["Terpenuhi", "Tidak Terpenuhi"], {
    message: "Pilih salah satu opsi",
  }),
  tabletTambahDarah: z.enum(["Terpenuhi", "Tidak Terpenuhi"], {
    message: "Pilih salah satu opsi",
  }),
  asamFolat: z.enum(["Terpenuhi", "Tidak Terpenuhi"], {
    message: "Pilih salah satu opsi",
  }),
  mualLemas: z.enum(["Iya", "Tidak"], {
    message: "Pilih salah satu opsi",
  })
})

type HarianFormValues = z.infer<typeof harianSchema>

const questions = [
  {
    name: "proteinHewani" as const,
    label: "Apakah sudah mengkonsumsi protein hewani utama (Ikan/Daging/Telur)?",
    options: ["Terpenuhi", "Tidak Terpenuhi"]
  },
  {
    name: "airPutih" as const,
    label: "Apakah sudah mengkonsumsi air putih minimal 10 gelas?",
    options: ["Terpenuhi", "Tidak Terpenuhi"]
  },
  {
    name: "tabletTambahDarah" as const,
    label: "Apakah sudah mengkonsumsi Tablet Tambah Darah (TTD)?",
    options: ["Terpenuhi", "Tidak Terpenuhi"]
  },
  {
    name: "asamFolat" as const,
    label: "Apakah sudah mengkonsumsi Asam Folat & Vitamin D3?",
    options: ["Terpenuhi", "Tidak Terpenuhi"]
  },
  {
    name: "mualLemas" as const,
    label: "Apakah merasa mual atau lemas?",
    options: ["Iya", "Tidak"]
  }
]

export default function HarianMasaKehamilanPage() {
  const setHarianMasaKehamilan = useJurnalStore((state) => state.setHarianMasaKehamilan)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<HarianFormValues>({
    resolver: zodResolver(harianSchema)
  })

  const onSubmit = (data: HarianFormValues) => {
    setHarianMasaKehamilan(data)
    alert("Data harian berhasil disimpan!")
    router.push("/dashboard/jurnal/masa-kehamilan")
  }

  return (
    <div className="flex w-full h-full justify-center lg:py-8">
      <div className="flex flex-col w-full max-w-2xl px-4 lg:px-0">
        
        {/* Header */}
        <div className="flex items-center gap-3 w-full mb-8">
          <Link href="/dashboard/jurnal/masa-kehamilan" className="text-neutral-800 hover:text-primary transition-colors">
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
                {q.options.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value={opt}
                      {...register(q.name)}
                      className="w-5 h-5 accent-primary cursor-pointer border-neutral-300"
                    />
                    <span className="text-base text-neutral-800 font-medium">{opt}</span>
                  </label>
                ))}
              </div>
              {errors[q.name] && (
                <span className="text-red-500 text-sm mt-1">{errors[q.name]?.message}</span>
              )}
            </div>
          ))}

          <Button type="submit" className="w-max mt-4 px-8 py-6 text-base font-semibold rounded-xl bg-primary hover:bg-primary-p6 text-white shadow-sm flex items-center justify-center gap-2">
            Input <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

        </form>

      </div>
    </div>
  )
}
