import { LucideIcon } from "lucide-react";
import Image from "next/image";

export function FeaturesIcon({ icon: Icon }: { icon: LucideIcon }) {
    return (
        <div className="absolute left-[35%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-24 h-24 rounded-full bg-[#f3d0d7] text-primary shadow-sm">
            <Icon size={52} strokeWidth={1} />
        </div>
    )
}

export function FeaturesTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-2xl font-bold text-neutral-light z-10">
            {children}
        </h2>
    )
}

export function FeaturesDesc({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-lg font-medium text-neutral-light z-10 leading-relaxed">
            {children}
        </p>
    )
}

export function FeaturesImg({ src }: { src?: string }) {
    return (
        <div className="absolute left-0 top-0 bottom-0 w-[35%] overflow-hidden">
            {src && <Image src={src} alt="Feature image" fill className="object-cover" />}
        </div>
    )
}

export default function FeaturesComponent({ children }: { children: React.ReactNode }) {
    return (
        <section
            className="relative flex flex-col gap-4 justify-center items-center pl-[45%] pr-8 py-12 w-full min-h-[300px] text-center rounded-[2rem] shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 bg-primary overflow-hidden">
            {children}
        </section>
    )
}