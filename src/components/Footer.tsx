import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-primary text-white pt-20 pb-10 px-8 lg:px-24">
            <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1400px] mx-auto gap-12 lg:gap-4 pb-20">
                
                {/* Logo */}
                <div className="shrink-0 lg:w-[40%] flex justify-start items-center">
                    <Image 
                        src="/logo-white.png" 
                        alt="NutriMama Logo" 
                        width={280} 
                        height={100} 
                        className="object-contain"
                    />
                </div>

                {/* Footer Links */}
                <div className="flex flex-col sm:flex-row justify-between lg:w-[60%] gap-12 sm:gap-4 lg:gap-16">
                    {/* Website Kami */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-bold text-xl">Website Kami</h3>
                        <div className="flex flex-col gap-5 text-lg text-white/90">
                            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
                            <Link href="#about" className="hover:text-white transition-colors">Tentang</Link>
                            <Link href="#services" className="hover:text-white transition-colors">Layanan</Link>
                            <Link href="#features" className="hover:text-white transition-colors">Fitur</Link>
                        </div>
                    </div>

                    {/* Link Lainnya */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-bold text-xl">Link Lainnya</h3>
                        <div className="flex flex-col gap-5 text-lg text-white/90">
                            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
                            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
                        </div>
                    </div>

                    {/* Kontak */}
                    <div className="flex flex-col gap-6 max-w-[300px]">
                        <h3 className="font-bold text-xl">Kontak</h3>
                        <div className="flex flex-col gap-5 text-lg text-white/90">
                            <p className="leading-relaxed">
                                Fakultas Ilmu Komputer,<br/>
                                Universitas Brawijaya
                            </p>
                            <p>081-2345-6789</p>
                            <p>@email123.com</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="flex justify-center items-center max-w-[1400px] mx-auto text-base font-medium">
                <p>&copy; 2026 NutriMama. All Rights Reserved.</p>
            </div>
        </footer>
    );
}