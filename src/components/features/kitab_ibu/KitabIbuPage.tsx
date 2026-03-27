import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function KitabIbuPage() {
    return (
        <div className="flex flex-col gap-8 px-2 sm:px-4 items-center justify-center w-full h-full">
            <h1
                className="font-bold text-primary self-start"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
                Kitab Ibu
            </h1>

            <div className="flex flex-col gap-10 sm:gap-16 w-full h-full lg:flex-row">
                <Link
                    href="/dashboard/kitab-ibu/masa-kehamilan"
                    className="flex flex-col items-center justify-center w-full h-full lg:w-1/2 group cursor-pointer transition-transform"
                >
                    <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                        <Image
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            src="/kitab-ibu/masa-kehamilan.webp"
                            alt="Masa Kehamilan"
                            fill
                            sizes="(max-width: 1024px) 90vw, 45vw"
                        />
                    </div>
                    <Button
                        className="mt-8 py-5 pointer-events-none group-hover:bg-primary/90 w-full max-w-xs"
                        style={{ fontSize: "clamp(0.875rem, 1.5vw, 1rem)" }}
                        variant="default"
                    >
                        Masa Kehamilan
                    </Button>
                </Link>

                <Link
                    href="/dashboard/kitab-ibu/pasca-kelahiran"
                    className="flex flex-col items-center justify-center w-full h-full lg:w-1/2 group cursor-pointer transition-transform"
                >
                    <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                        <Image
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            src="/kitab-ibu/pasca-kelahiran.webp"
                            alt="Pasca Kelahiran"
                            fill
                            sizes="(max-width: 1024px) 90vw, 45vw"
                        />
                    </div>
                    <Button
                        className="mt-8 py-5 pointer-events-none group-hover:bg-primary/90 w-full max-w-xs"
                        style={{ fontSize: "clamp(0.875rem, 1.5vw, 1rem)" }}
                        variant="default"
                    >
                        Pasca Kelahiran
                    </Button>
                </Link>
            </div>
        </div>
    )
}