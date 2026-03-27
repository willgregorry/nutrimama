import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SectionHeader({ title, href }: { title: string; href: string }) {
    return (
        <div className="flex justify-between items-center w-full mb-6 sm:mb-8 gap-3">
            <h2
                className="font-bold text-primary shrink-0"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.875rem)" }}
            >
                {title}
            </h2>
            <div className="flex-1 border-t border-primary/30 mx-2 sm:mx-4 hidden sm:block" />
            <Link href={href} className="shrink-0">
                <Button
                    variant="default"
                    className="bg-primary hover:bg-primary-p6 text-white rounded-xl px-4 sm:px-6 py-4 sm:py-5 shadow-sm font-semibold flex items-center gap-2"
                    style={{ fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)" }}
                >
                    Lainnya <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
            </Link>
        </div>
    )
}
