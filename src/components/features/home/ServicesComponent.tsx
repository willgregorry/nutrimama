import { LucideIcon } from "lucide-react";

export function ServicesIcon({ icon: Icon }: { icon: LucideIcon }) {
    return (
        <section>
            <Icon size={60} strokeWidth={1} />
        </section>
    )
}

export function ServicesDesc({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-xl font-semibold">
            {children}
        </p>
    )
}

export default function ServicesComponent({ children }: { children: React.ReactNode }) {
    return (
        <section className="flex flex-col gap-4 justify-center items-center px-10 py-20 w-80 text-center rounded-2xl shadow-lg text-neutral bg-primary h-100">
            {children}
        </section>
    )
}