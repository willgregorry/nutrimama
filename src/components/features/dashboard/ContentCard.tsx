import Image from "next/image";

export default function ContentCard({ img, title, subtitle }: { img: string; title: string; subtitle?: string }) {
    return (
        <div className="flex flex-col gap-4 w-[280px] shrink-0 group cursor-pointer snap-start">
            <div className="relative w-full h-[180px] rounded-2xl overflow-hidden shadow-sm">
                <Image 
                    src={img} 
                    alt={title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="flex flex-col pr-2">
                <h3 className="text-black font-bold text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {title}
                </h3>
                {subtitle && (
                    <p className="text-neutral-p6 text-sm mt-1 line-clamp-2">{subtitle}</p>
                )}
            </div>
        </div>
    )
}
