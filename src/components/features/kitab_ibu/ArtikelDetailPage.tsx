"use client"

import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { useArticles } from "@/hooks/useArticles"

export default function ArtikelDetailPage() {
    const params = useParams()
    const router = useRouter()

    const idParam = params?.id
    const id = Array.isArray(idParam) ? idParam[0] : idParam

    const kategoriParam = params?.kategori
    const kategori = Array.isArray(kategoriParam) ? kategoriParam[0] : kategoriParam

    const { data: allArticles, isLoading } = useArticles();
    const article = allArticles?.find(a => a.id === id)

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-full min-h-[50vh]">
                <h2 className="text-xl font-medium text-gray-500">Memuat artikel...</h2>
            </div>
        )
    }

    if (!article) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-full min-h-[50vh]">
                <h2 className="text-2xl font-bold text-gray-500">Artikel tidak ditemukan</h2>
                <button
                    onClick={() => router.push(`/dashboard/kitab-ibu/${kategori || 'masa-kehamilan'}`)}
                    className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-p6 transition-colors"
                >
                    Kembali
                </button>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-8 w-full h-fit animate-in fade-in duration-300 p-8 sm:p-12 bg-neutral-50/50 rounded-[32px] max-w-5xl mx-auto shadow-sm border border-white">

            {/* Header: Back Button, Title, and Divider */}
            <div className="flex items-center gap-6 w-full">
                <button
                    onClick={() => router.push(`/dashboard/kitab-ibu/${kategori || 'masa-kehamilan'}`)}
                    className="p-2 -ml-2 text-black hover:bg-black/5 rounded-full transition-colors cursor-pointer"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <h1 className="text-3xl font-semibold text-primary shrink-0">Kitab Ibu</h1>
                <div className="flex-1 h-[1.5px] bg-primary/40 mt-1"></div>
            </div>

            <div className="flex flex-col items-center w-full max-w-3xl mx-auto mt-4 px-4">
                {/* Image */}
                <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-sm overflow-hidden mb-8 shadow-sm">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="w-full flex flex-col gap-4 text-center items-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-800 leading-snug">
                        {article.title}
                    </h2>
                    <p className="text-neutral-600 text-[15px] sm:text-[16px] leading-relaxed max-w-2xl text-justify mt-2">
                        {article.content}
                    </p>
                </div>
            </div>
        </div>
    )
}
