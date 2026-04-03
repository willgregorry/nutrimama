"use client"

import Link from "next/link";
import SectionHeader from "./SectionHeader";
import ContentCard from "./ContentCard";
import { Loader2 } from "lucide-react";
import { useArticles } from "@/hooks/useArticles";

export default function DashboardKitabIbuSection() {
    const { data: articles, isLoading } = useArticles();

    return (
        <section className="flex flex-col w-full min-w-0">
            <SectionHeader title="Kitab Ibu" href="/dashboard/kitab-ibu" />
            <div className="flex gap-4 sm:gap-6 w-full overflow-x-auto pb-4 scrollbar-hide snap-x items-stretch">
                {isLoading ? (
                    <div className="flex justify-center py-4 w-full text-primary">
                        <Loader2 className="w-8 h-8 animate-spin" />
                    </div>
                ) : (
                    <>
                        {articles?.slice(0, 10).map((article) => {
                            const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || ''
                            const imgUrl = article.thumbnail?.startsWith('http') ? article.thumbnail : `${baseUrl}${article.thumbnail}`
                            const kategoriPath = article.category?.toLowerCase() === 'pasca kelahiran' ? 'pasca-kelahiran' : 'masa-kehamilan'
                            return (
                                <Link
                                    key={article.id}
                                    href={`/dashboard/kitab-ibu/${kategoriPath}/${article.slug}`}
                                    className="shrink-0 snap-start"
                                >
                                    <ContentCard
                                        img={imgUrl}
                                        title={article.title}
                                    />
                                </Link>
                            )
                        })}

                        {articles && articles.length > 0 && (
                            <Link
                                href="/dashboard/kitab-ibu"
                                className="shrink-0 snap-start flex items-center justify-center bg-primary/10 hover:bg-primary/20 transition-colors rounded-3xl min-w-[200px] border-2 border-dashed border-primary/30"
                            >
                                <div className="flex flex-col items-center justify-center p-6 text-primary gap-2">
                                    <div className="bg-white p-3 rounded-full shadow-sm mb-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="m12 5 7 7-7 7"></path>
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-lg">Lihat Lainnya</span>
                                </div>
                            </Link>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
