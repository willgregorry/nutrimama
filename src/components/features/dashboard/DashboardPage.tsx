"use client"

import SectionHeader from "@/components/features/dashboard/SectionHeader";
import ContentCard from "@/components/features/dashboard/ContentCard";
import { useArticles } from "@/hooks/useArticles";
import Link from "next/link";

export default function DashboardPage() {
    const { data: articles, isLoading } = useArticles();

    return (
        <div className="flex flex-col gap-16 w-full pb-10">

            <section className="flex flex-col w-full min-w-0">
                <SectionHeader title="Kitab Ibu" href="/dashboard/kitab-ibu" />
                <div className="flex gap-6 w-full overflow-x-auto pb-6 scrollbar-hide snap-x">
                    {isLoading ? (
                        <div className="text-neutral-500 text-sm py-4">Memuat artikel...</div>
                    ) : (
                        articles?.slice(0, 5).map((article) => (
                            <Link key={article.id} href={`/dashboard/kitab-ibu/${article.kategori}/${article.id}`} className="shrink-0 snap-start">
                                <ContentCard
                                    img={article.image}
                                    title={article.title}
                                />
                            </Link>
                        ))
                    )}
                </div>
            </section>


            <section className="flex flex-col w-full min-w-0">
                <SectionHeader title="Jurnal Keluarga Bahagia" href="/dashboard/jurnal" />
                <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x">
                    <ContentCard
                        img="/landing_page/jurnal-keluarga-bahagia.png"
                        title="Catat asupan gizi harian Anda dengan mudah"
                    />
                    <ContentCard
                        img="/landing_page/rancangan-makan.png"
                        title="Pantau perkembangan berat badan dan nutrisi janin"
                    />
                    <ContentCard
                        img="/landing_page/aboutcta.webp"
                        title="Temukan rancangan kalori ideal untuk setiap trimester"
                    />
                </div>
            </section>
        </div>
    )
}