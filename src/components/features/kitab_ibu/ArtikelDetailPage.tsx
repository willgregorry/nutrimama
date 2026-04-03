"use client"

import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Loader2 } from "lucide-react"
import { useArticles } from "@/hooks/useArticles"

export default function ArtikelDetailPage() {
    const params = useParams()
    const router = useRouter()

    const idParam = params?.id
    const id = Array.isArray(idParam) ? idParam[0] : idParam

    const kategoriParam = params?.kategori
    const kategori = Array.isArray(kategoriParam) ? kategoriParam[0] : kategoriParam

    const { data: allArticles, isLoading } = useArticles()
    const article = allArticles?.find(a => a.slug === id)

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-full min-h-[50vh]">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
        )
    }

    if (!article) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-full min-h-[50vh]">
                <h2
                    className="font-bold text-gray-500"
                    style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)" }}
                >
                    Artikel tidak ditemukan
                </h2>
                <button
                    onClick={() => router.push(`/dashboard/kitab-ibu/${kategori || 'masa-kehamilan'}`)}
                    className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-p6 transition-colors"
                    style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)" }}
                >
                    Kembali
                </button>
            </div>
        )
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || ''
    const imgUrl = article.thumbnail?.startsWith('http') ? article.thumbnail : `${baseUrl}${article.thumbnail}`

    return (
        <div className="flex flex-col gap-6 sm:gap-8 w-full h-fit animate-in fade-in duration-300 p-5 sm:p-8 md:p-12 rounded-[32px] max-w-5xl mx-auto border border-white pb-20 lg:pb-12">

            <div className="flex items-center gap-4 w-full">
                <button
                    onClick={() => router.push(`/dashboard/kitab-ibu/${kategori || 'masa-kehamilan'}`)}
                    className="p-2 -ml-2 text-black hover:bg-black/5 rounded-full transition-colors cursor-pointer shrink-0"
                >
                    <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <h1
                    className="font-semibold text-primary shrink-0"
                    style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)" }}
                >
                    Kitab Ibu
                </h1>
                <div className="flex-1 h-[1.5px] bg-primary/40 mt-1 hidden sm:block" />
            </div>

            <div className="flex flex-col items-center w-full max-w-3xl mx-auto mt-2 sm:mt-4 px-0 sm:px-4">
                <div className="relative w-full max-w-[90%] sm:max-w-[500px] aspect-4/3 rounded-sm overflow-hidden mb-6 sm:mb-8 shadow-sm">
                    <Image
                        src={imgUrl}
                        alt={article.title}
                        fill
                        sizes="(max-width: 640px) 90vw, 500px"
                        className="object-cover"
                    />
                </div>

                <div className="w-full flex flex-col gap-3 sm:gap-4 text-center items-center">
                    <h2
                        className="font-bold text-neutral-800 leading-snug"
                        style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                    >
                        {article.title}
                    </h2>
                    <p
                        className="text-neutral-600 leading-relaxed max-w-2xl text-justify mt-2"
                        style={{ fontSize: "clamp(0.875rem, 1.3vw, 1rem)" }}
                    >
                        {article.content}
                    </p>
                </div>
            </div>
        </div>
    )
}
