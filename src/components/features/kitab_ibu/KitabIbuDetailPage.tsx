"use client"

import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { useArticles } from "@/hooks/useArticles"

export default function KitabIbuDetailPage() {
    const params = useParams()
    const router = useRouter()

    const kategoriParam = params?.kategori || "masa-kehamilan"
    const kategori = Array.isArray(kategoriParam) ? kategoriParam[0] : kategoriParam
    const categoryQuery = kategori === "pasca-kelahiran" ? "pasca kelahiran" : "masa kehamilan"

    const { data: allArticles, isLoading } = useArticles()
    const articles = allArticles?.filter(a => a.category?.toLowerCase() === categoryQuery) || []

    return (
        <div className="flex flex-col gap-6 sm:gap-8 w-full h-fit animate-in fade-in duration-300 p-3 sm:p-6 lg:p-8 bg-neutral-50/50 rounded-2xl max-w-6xl mx-auto pb-16 lg:pb-8">

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 sm:gap-4">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => router.push('/dashboard/kitab-ibu')}
                        className="p-2 hover:bg-black/5 rounded-full transition-colors cursor-pointer"
                    >
                        <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </button>
                    <h1
                        className="font-semibold text-primary"
                        style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)" }}
                    >
                        Kitab Ibu
                    </h1>
                </div>

                <div className="relative w-full sm:w-auto">
                    <select
                        value={kategori}
                        onChange={(e) => router.push(`/dashboard/kitab-ibu/${e.target.value}`)}
                        className="appearance-none bg-neutral-200/80 font-medium px-4 py-2.5 pr-10 rounded-lg outline-none cursor-pointer hover:bg-neutral-300/80 transition-colors w-full sm:w-48 text-neutral-800"
                        style={{ fontSize: "clamp(0.8rem, 1.2vw, 0.9rem)" }}
                    >
                        <option value="masa-kehamilan">Masa Kehamilan</option>
                        <option value="pasca-kelahiran">Pasca Kelahiran</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="mt-2 max-h-[70vh] lg:max-h-[580px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
                {isLoading ? (
                    <div className="flex justify-center py-10 w-full text-primary">
                        <Loader2 className="w-8 h-8 animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {articles.map((article) => {
                            const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || ''
                            const imgUrl = article.thumbnail?.startsWith('http') ? article.thumbnail : `${baseUrl}${article.thumbnail}`
                            return (
                                <Link
                                    href={`/dashboard/kitab-ibu/${kategori}/${article.slug}`}
                                    key={article.id}
                                    className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all cursor-pointer border border-neutral-100 group"
                                >
                                    <div className="relative w-full aspect-4/3 bg-neutral-100 overflow-hidden">
                                        <Image
                                            src={imgUrl}
                                            alt={article.title}
                                            fill
                                            unoptimized
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-3 sm:p-4 bg-white flex flex-col justify-start grow">
                                        <h3
                                            className="leading-snug font-medium text-neutral-800 line-clamp-3"
                                            style={{ fontSize: "clamp(0.75rem, 1.1vw, 0.9rem)" }}
                                        >
                                            {article.title}
                                        </h3>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
