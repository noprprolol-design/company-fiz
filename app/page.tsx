import Partners from "@/components/Partners";
import Clients from "@/components/Clients";
import QualityService from "@/components/QualityService";
import LayananKami from "@/components/LayananKami";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <LayananKami />
      <QualityService />
      <Partners />
      <Clients />
      <Footer />
    </main>
  );
}
