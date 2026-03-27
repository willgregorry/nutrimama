import Image from "next/image";

export default function ContentCard({ img, title, subtitle }: { img: string; title: string; subtitle?: string }) {
    return (
        <div className="flex flex-col gap-3 w-[220px] sm:w-[260px] md:w-[280px] shrink-0 group cursor-pointer snap-start">
            <div className="relative w-full h-[150px] sm:h-[165px] md:h-[180px] rounded-2xl overflow-hidden shadow-sm">
                <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 280px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="flex flex-col pr-2">
                <h3
                    className="text-black font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2"
                    style={{ fontSize: "clamp(0.8rem, 1.2vw, 1rem)" }}
                >
                    {title}
                </h3>
                {subtitle && (
                    <p
                        className="text-neutral-p6 mt-1 line-clamp-2"
                        style={{ fontSize: "clamp(0.75rem, 1vw, 0.875rem)" }}
                    >
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    )
}
