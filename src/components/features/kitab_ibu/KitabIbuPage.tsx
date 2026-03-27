import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function KitabIbuPage() {
    return (
        <div className="flex flex-col gap-8 px-4 items-center justify-center w-full h-full">
            <h1 className="text-3xl font-bold text-primary">Kitab Ibu</h1>

            <div className="flex flex-col gap-20 w-full h-full lg:flex-row">
                <Link href="/dashboard/kitab-ibu/masa-kehamilan" className="flex flex-col items-center justify-center w-full h-full lg:w-1/2 group cursor-pointer transition-transform">
                    <Image className="rounded-2xl w-[80%] shadow-md" src="/kitab-ibu/masa-kehamilan.webp" alt="Masa Kehamilan" width={500} height={500} />
                    <Button className="mt-12 py-6 px-8 pointer-events-none group-hover:bg-primary/90" variant='default'>
                        Masa Kehamilan
                    </Button>
                </Link>
                <Link href="/dashboard/kitab-ibu/pasca-kelahiran" className="flex flex-col items-center justify-center w-full h-full lg:w-1/2 group cursor-pointer transition-transform">
                    <Image className="rounded-2xl w-[80%] shadow-md" src="/kitab-ibu/pasca-kelahiran.webp" alt="Pasca Kelahiran" width={500} height={500} />
                    <Button className="mt-12 py-6 px-8 pointer-events-none group-hover:bg-primary/90" variant='default'>
                        Pasca Kelahiran
                    </Button>
                </Link>
            </div>
        </div>
    )
}