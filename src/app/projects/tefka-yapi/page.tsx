import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TefkaYapiContent from "@/components/projects/TefkaYapiContent";

export default function TefkaYapiProject() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-[75px]">
        <TefkaYapiContent />
      </div>
      <Footer />
    </main>
  );
}
