"use client"

import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useArticles } from "@/hooks/useArticles"

export default function KitabIbuDetailPage() {
    const params = useParams()
    const router = useRouter()

    const kategoriParam = params?.kategori || "masa-kehamilan"
    const kategori = Array.isArray(kategoriParam) ? kategoriParam[0] : kategoriParam

    const { data: allArticles, isLoading } = useArticles();
    const articles = allArticles?.filter(a => a.kategori === kategori) || [];

    return (
        <div className="flex flex-col gap-8 w-full h-fit animate-in fade-in duration-300 p-4 sm:p-8 bg-neutral-50/50 rounded-2xl max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
                <div className="flex items-center gap-4">
                    <button onClick={() => router.push('/dashboard/kitab-ibu')} className="p-2 hover:bg-black/5 rounded-full transition-colors cursor-pointer">
                        <ArrowLeft className="w-6 h-6 text-primary" />
                    </button>
                    <h1 className="text-3xl font-semibold text-primary">Kitab Ibu</h1>
                </div>

                <div className="relative">
                    <select
                        value={kategori}
                        onChange={(e) => router.push(`/dashboard/kitab-ibu/${e.target.value}`)}
                        className="appearance-none bg-neutral-200/80 text-sm font-medium px-4 py-2.5 pr-10 rounded-lg outline-none cursor-pointer hover:bg-neutral-300/80 transition-colors w-full sm:w-48 text-neutral-800"
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

            <div className="mt-4 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
                {isLoading ? (
                    <div className="text-center text-neutral-500 py-10 w-full">Memuat artikel...</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {articles.map((article) => (
                        <Link href={`/dashboard/kitab-ibu/${kategori}/${article.id}`} key={article.id} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all cursor-pointer border border-neutral-100 group">
                            <div className="relative w-full aspect-4/3 bg-neutral-100 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4 bg-white flex flex-col justify-start grow">
                                <h3 className="text-[14px] leading-snug font-medium text-neutral-800 line-clamp-3">
                                    {article.title}
                                </h3>
                            </div>
                        </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
