import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Footer from "@/components/Footer";

export default function LandingPage() {
    return (
        <main className="w-full h-auto flex flex-col">
            <Header />

            <Hero />
            <About />
            <Services />

            <Footer />
        </main>
    )
}