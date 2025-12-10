import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OlsContent from "@/components/projects/OlsContent";

export default function OlsProject() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-[75px]">
        <OlsContent />
      </div>
      <Footer />
    </main>
  );
}
