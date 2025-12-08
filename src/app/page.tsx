import Navigation from "@/components/Navigation";
import Hero from "@/components/home/Hero";
import PortfolioVideo from "@/components/home/PortfolioVideo";
import WorksSection from "@/components/home/WorksSection";
import ServicesSection from "@/components/home/ServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <PortfolioVideo />
      <WorksSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
