import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Footer from "@/components/Footer";

export default function LandingPage() {
    return (
        <main className="w-full h-2000 flex flex-col">
            <Header />

            <Hero />
            <About />

            <Footer />
        </main>
    )
}