import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";

export default function About() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AboutContent />
      </div>
      <Footer />
    </main>
  );
}
