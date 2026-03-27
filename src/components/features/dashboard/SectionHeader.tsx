import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SectionHeader({ title, href }: { title: string; href: string }) {
    return (
        <div className="flex items-center w-full mb-8">
            <h2 className="text-3xl font-bold text-primary shrink-0">{title}</h2>
            <div className="flex-1 border-t border-primary/30 mx-6"></div>
            <Link href={href}>
                <Button variant="default" className="bg-primary hover:bg-primary-p6 text-white rounded-xl px-6 py-5 shadow-sm font-semibold flex items-center gap-2">
                    Lainnya <ArrowRight className="w-4 h-4" />
                </Button>
            </Link>
        </div>
    )
}
