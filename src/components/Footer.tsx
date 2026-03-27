import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-primary text-white pt-16 pb-24 sm:pb-12 px-6 sm:px-10 lg:px-24">
            <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1400px] mx-auto gap-10 lg:gap-4 pb-16">

                <div className="shrink-0 lg:w-[40%] flex justify-start items-center">
                    <Image
                        src="/logo-white.png"
                        alt="NutriMama Logo"
                        width={220}
                        height={80}
                        className="object-contain w-[160px] sm:w-[200px] lg:w-[280px] h-auto"
                    />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row lg:justify-between lg:w-[60%] gap-8 lg:gap-16 w-full">

                    <div className="flex flex-col gap-4">
                        <h3
                            className="font-bold"
                            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.25rem)" }}
                        >
                            Website Kami
                        </h3>
                        <div
                            className="flex flex-col gap-4 text-white/90"
                            style={{ fontSize: "clamp(0.85rem, 1.2vw, 1.1rem)" }}
                        >
                            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
                            <Link href="#about" className="hover:text-white transition-colors">Tentang</Link>
                            <Link href="#services" className="hover:text-white transition-colors">Layanan</Link>
                            <Link href="#features" className="hover:text-white transition-colors">Fitur</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3
                            className="font-bold"
                            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.25rem)" }}
                        >
                            Link Lainnya
                        </h3>
                        <div
                            className="flex flex-col gap-4 text-white/90"
                            style={{ fontSize: "clamp(0.85rem, 1.2vw, 1.1rem)" }}
                        >
                            <Link href="#" className="hover:text-white transition-colors">Syarat &amp; Ketentuan</Link>
                            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
                        <h3
                            className="font-bold"
                            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.25rem)" }}
                        >
                            Kontak
                        </h3>
                        <div
                            className="flex flex-col gap-4 text-white/90"
                            style={{ fontSize: "clamp(0.85rem, 1.2vw, 1.1rem)" }}
                        >
                            <p className="leading-relaxed">
                                Fakultas Ilmu Komputer,<br />
                                Universitas Brawijaya
                            </p>
                            <p>081-2345-6789</p>
                            <p>@email123.com</p>
                        </div>
                    </div>

                </div>
            </div>

            <div
                className="flex justify-center items-center max-w-[1400px] mx-auto font-medium border-t border-white/20 pt-6"
                style={{ fontSize: "clamp(0.8rem, 1.1vw, 1rem)" }}
            >
                <p>&copy; 2026 NutriMama. All Rights Reserved.</p>
            </div>
        </footer>
    );
}