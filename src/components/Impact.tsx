import { TrendingUp } from 'lucide-react';

export default function Impact() {
  return (
    <section className="relative py-24 px-6 bg-[#0D0D1A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#7B5CFF] to-[#2DE2E6] bg-clip-text text-transparent">
            Global Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7B5CFF] to-[#2DE2E6] mx-auto mb-8"></div>
          <p className="text-[#F2F2F2] text-xl max-w-3xl mx-auto">
            Creating measurable change in space education and gender equality worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#FF4ECD]/20 to-transparent border border-[#FF4ECD]/30 hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] bg-clip-text text-transparent mb-3">
              12,000+
            </div>
            <p className="text-[#F2F2F2] text-lg font-semibold mb-2">Girls Empowered</p>
            <p className="text-[#F2F2F2]/60 text-sm">Across the globe</p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#7B5CFF]/20 to-transparent border border-[#7B5CFF]/30 hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold bg-gradient-to-r from-[#7B5CFF] to-[#2DE2E6] bg-clip-text text-transparent mb-3">
              108
            </div>
            <p className="text-[#F2F2F2] text-lg font-semibold mb-2">Nations United</p>
            <p className="text-[#F2F2F2]/60 text-sm">Global collaboration</p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#2DE2E6]/20 to-transparent border border-[#2DE2E6]/30 hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold bg-gradient-to-r from-[#2DE2E6] to-[#FF4ECD] bg-clip-text text-transparent mb-3">
              7+
            </div>
            <p className="text-[#F2F2F2] text-lg font-semibold mb-2">Years Experience</p>
            <p className="text-[#F2F2F2]/60 text-sm">Since 2017</p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#FF4ECD]/20 to-transparent border border-[#FF4ECD]/30 hover:scale-105 transition-transform duration-300">
            <div className="text-5xl font-bold bg-gradient-to-r from-[#FF4ECD] to-[#2DE2E6] bg-clip-text text-transparent mb-3">
              100%
            </div>
            <p className="text-[#F2F2F2] text-lg font-semibold mb-2">Commitment</p>
            <p className="text-[#F2F2F2]/60 text-sm">To equality</p>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7B5CFF] to-[#2DE2E6] rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-gradient-to-br from-[#7B5CFF]/10 to-[#2DE2E6]/10 rounded-3xl p-12 border border-[#7B5CFF]/30 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-4 mb-6">
              <TrendingUp className="w-12 h-12 text-[#2DE2E6]" />
              <h3 className="text-3xl font-bold text-[#F2F2F2]">Growing Every Day</h3>
            </div>
            <p className="text-[#F2F2F2] text-lg text-center max-w-3xl mx-auto">
              Our impact continues to expand as more girls discover their passion for space science.
              Every participant becomes an ambassador for STEM education in their community, creating a
              ripple effect that reaches far beyond our direct programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
