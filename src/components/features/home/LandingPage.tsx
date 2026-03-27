import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Features from "@/components/sections/Features";
import Footer from "@/components/Footer";
import AboutCTA from "@/components/sections/AboutCTA";

export default function LandingPage() {
    return (
        <main className="flex flex-col w-full h-auto bg-radial-blobs">
            <Header />

            <Hero />
            <About />
            <AboutCTA />
            <Services />
            <Features />
            <section className="flex flex-col justify-center items-center px-4 py-24 w-full">
                <div className="flex flex-col w-full max-w-6xl">
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary drop-shadow-sm">NutriMama</h2>
                    <h3 className="text-4xl sm:text-5xl font-bold text-primary drop-shadow-sm mt-2">Fit Nutrition, Bright The Future</h3>
                </div>
            </section>

            <Footer />
        </main>
    )
}