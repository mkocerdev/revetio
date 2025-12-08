import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactContent from "@/components/ContactContent";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ContactContent />
      </div>
      <Footer />
    </main>
  );
}
