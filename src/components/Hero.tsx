import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#07070F]">
        <div className="absolute inset-0 opacity-30">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4ECD]/20 via-[#7B5CFF]/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF4ECD]/20 to-[#7B5CFF]/20 border border-[#FF4ECD]/30 backdrop-blur-sm mb-8 animate-float">
          <Rocket className="w-5 h-5 text-[#2DE2E6]" />
          <span className="text-[#F2F2F2] text-sm font-medium tracking-wider">12,000 GIRLS • 108 NATIONS • ONE COSMOS</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#FF4ECD] via-[#7B5CFF] to-[#2DE2E6] bg-clip-text text-transparent leading-tight">
          ShaktiSat
        </h1>

        <p className="text-2xl md:text-3xl text-[#F2F2F2] mb-8 font-light tracking-wide">
          Empowering the Next Generation of Space Leaders
        </p>

        <p className="text-lg md:text-xl text-[#F2F2F2]/80 max-w-4xl mx-auto mb-12 leading-relaxed">
          A global mission to empower 12,000 girls from 108 countries through real-time satellite projects,
          sparking curiosity, courage, and a lifelong passion for STEM and space exploration.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#FF4ECD]/50">
            Join the Mission
          </button>
          <button className="px-8 py-4 border-2 border-[#FF4ECD] text-[#FF4ECD] rounded-full font-semibold hover:bg-[#FF4ECD]/10 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#FF4ECD]/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[#FF4ECD] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
