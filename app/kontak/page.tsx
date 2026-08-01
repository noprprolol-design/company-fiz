"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export default function KontakPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-white">
        <Navbar />

        {/* HEADER VIDEO BACKGROUND */}
        <section className="relative py-28 md:py-40 flex items-center justify-center overflow-hidden">
          
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/video/firmus.mp4" type="video/mp4" />
            <div className="absolute inset-0 bg-blue-900/80 z-0" />
          </video>

          <div className="absolute inset-0 bg-black/50 z-1"></div>

          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
              Hubungi Kami
            </h1>
          </div>
        </section>

        {/* KONTEN 2 KOLOM */}
        <section className="py-16 px-4 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* KOLOM KIRI: Info Kontak */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Kantor</h2>
                
                <div className="space-y-5">
                  
                  {/* ALAMAT */}
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-gray-900 text-xl mt-1 flex-shrink-0" />
                    <a
                      href="https://www.google.com/maps/place/The+Boulevard+Office/@-6.1882955,106.8171483,17z/data=!4m6!3m5!1s0x2e69f5305e7c6f1b:0x1a0b2b3c4d5e6f7a!8m2!3d-6.1882955!4d106.8171483!16s%2Fg%2F11c2f5g7h1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 leading-relaxed hover:text-blue-600 transition-colors underline-offset-2 hover:underline"
                    >
                      The Boulevard Lt. 6 Unit B2<br />
                      Jalan Fachrudin No. 5, Kampung Bali<br />
                      Tanah Abang 10250, Jakarta, Indonesia
                    </a>
                  </div>
                  
                  {/* TELEPON */}
                  <div className="flex items-center gap-4">
                    <FaPhone className="text-gray-900 text-xl flex-shrink-0" />
                    <a href="tel:+622122741521" className="text-gray-700 hover:text-blue-600 transition-colors">
                      +62-21 2274-1521
                    </a>
                  </div>
                  
                  {/* EMAIL */}
                  <div className="flex items-center gap-4">
                    <FaEnvelope className="text-gray-900 text-xl flex-shrink-0" />
                    <a href="mailto:info@firmusindo.co.id" className="text-gray-700 hover:text-blue-600 transition-colors">
                      info@firmusindo.co.id
                    </a>
                  </div>

                </div>
              </div>

              {/* KOLOM KANAN: Google Maps */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 h-[400px] relative group">
                <a
                  href="https://www.google.com/maps/place/The+Boulevard+Office/@-6.1882955,106.8171483,17z/data=!4m6!3m5!1s0x2e69f5305e7c6f1b:0x1a0b2b3c4d5e6f7a!8m2!3d-6.1882955!4d106.8171483!16s%2Fg%2F11c2f5g7h1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.322116435304!2d106.8930059!3d-6.2225841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4b68c6384d9%3A0x3b523bc5aa8b0d7b!2sJl.%20H.%20Jaelani%20No.39B%2C%20Pd.%20Bambu%2C%20Kec.%20Duren%20Sawit%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013430!5e0!3m2!1sid!2sid!4v1723456789012!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </a>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full shadow-md text-xs font-semibold text-gray-700 border border-gray-200 pointer-events-none group-hover:bg-white transition-colors">
                  📍 Buka di Google Maps
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </LanguageProvider>
  );
}