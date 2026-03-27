import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-primary-light px-6 text-center font-jakarta">
            <p
                className="font-black text-primary leading-none"
                style={{ fontSize: "clamp(6rem, 20vw, 12rem)" }}
            >
                404
            </p>

            <h1
                className="font-bold text-neutral-800 mt-2"
                style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
            >
                Halaman Tidak Ditemukan
            </h1>

            <p
                className="text-neutral-500 mt-3 max-w-sm"
                style={{ fontSize: "clamp(0.875rem, 1.5vw, 1rem)" }}
            >
                Halaman yang kamu cari tidak ada atau sudah dipindahkan.
            </p>

            <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 bg-primary hover:bg-primary-p6 text-white font-semibold rounded-xl px-7 py-3.5 transition-colors"
                style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)" }}
            >
                Kembali ke Beranda
            </Link>
        </div>
    );
}