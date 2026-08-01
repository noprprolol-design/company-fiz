import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a1a2f] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 items-start">
          
          {/* KOLOM 1 */}
          <div className="flex-1 flex flex-col items-start text-left">
            <h3 className="text-lg font-bold text-white mb-3">Firmusindo Infotama</h3>
            <p className="text-white text-sm leading-relaxed">
              Solusi IT handal dan profesional untuk berbagai bisnis di Indonesia.
            </p>
          </div>

          {/* KOLOM 2 */}
          <div className="flex-1 flex flex-col items-start text-left">
            <h3 className="text-lg font-bold text-white mb-3">Hubungi Kami</h3>
            <div className="space-y-2 text-sm text-white">
              
              {/* Email - Bisa Diklik */}
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-white text-lg" />
                <a 
                  href="mailto:info@firmusindo.co.id" 
                  className="hover:text-blue-400 transition-colors"
                >
                  info@firmusindo.co.id
                </a>
              </p>

              {/* Telepon - Bisa Diklik */}
              <p className="flex items-center gap-2">
                <FaPhone className="text-white text-lg" />
                <a 
                  href="tel:+622122741521" 
                  className="hover:text-blue-400 transition-colors"
                >
                  +62-21 2274-1521
                </a>
              </p>

              {/* Website - Bisa Diklik */}
              <p className="flex items-center gap-2">
                <FaGlobe className="text-white text-lg" />
                <a 
                  href="https://firmusindo.co.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  firmusindo.co.id
                </a>
              </p>

            </div>
          </div>

          {/* KOLOM 3 */}
          <div className="flex-1 flex flex-col items-start text-left">
            <h3 className="text-lg font-bold text-white mb-3">Layanan</h3>
            <ul className="space-y-1 text-sm text-white">
              <li>IT INFRASTRUCTURE</li>
              <li>24 x 7 SERVICES SOLUTION</li>
              <li>SECURITY AND SURVEILLANCE</li>
              <li>SOFTWARE HOUSE</li>
              <li>BUSINESS CONTINUITY</li>
              <li>SMART BUILDING</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} PT. Firmusindo Infotama. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}