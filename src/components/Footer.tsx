import { Mail, MapPin, Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#07070F] border-t border-[#FF4ECD]/20 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] rounded-full flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] bg-clip-text text-transparent">
                ShaktiSat
              </h3>
            </div>
            <p className="text-[#F2F2F2]/70 text-lg mb-6">
              Empowering 12,000+ girls across 108 nations through hands-on space science education and satellite technology.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF4ECD]/20 to-[#7B5CFF]/20 border border-[#FF4ECD]/30 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <span className="text-[#FF4ECD] text-xl">𝕏</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF4ECD]/20 to-[#7B5CFF]/20 border border-[#FF4ECD]/30 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <span className="text-[#FF4ECD] text-xl">in</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF4ECD]/20 to-[#7B5CFF]/20 border border-[#FF4ECD]/30 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <span className="text-[#FF4ECD] text-xl">IG</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#F2F2F2] text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#mission" className="text-[#F2F2F2]/70 hover:text-[#FF4ECD] transition-colors">
                  Mission Overview
                </a>
              </li>
              <li>
                <a href="#programs" className="text-[#F2F2F2]/70 hover:text-[#FF4ECD] transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#F2F2F2]/70 hover:text-[#FF4ECD] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#F2F2F2]/70 hover:text-[#FF4ECD] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F2F2F2] text-xl font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FF4ECD] mt-1" />
                <a href="mailto:info@shaktisat.org" className="text-[#F2F2F2]/70 hover:text-[#FF4ECD] transition-colors">
                  info@shaktisat.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF4ECD] mt-1" />
                <span className="text-[#F2F2F2]/70">
                  Global Reach<br />108 Countries
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#FF4ECD]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#F2F2F2]/60 text-sm">
              © 2024 SKI Star Foundation. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#F2F2F2]/60 hover:text-[#FF4ECD] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#F2F2F2]/60 hover:text-[#FF4ECD] text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
