import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WorksSection from "@/app/works/components/WorksSection";

export default function Works() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <WorksSection />
      </div>
      <Footer />
    </main>
  );
}
