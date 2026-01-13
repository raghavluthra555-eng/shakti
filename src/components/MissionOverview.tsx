import { Globe, Satellite, Users } from 'lucide-react';

export default function MissionOverview() {
  return (
    <section className="relative py-24 px-6 bg-[#07070F]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] bg-clip-text text-transparent">
            Mission Overview
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#FF4ECD]/10 to-[#7B5CFF]/10 border border-[#FF4ECD]/20 hover:border-[#FF4ECD]/50 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#2DE2E6] mb-2">12,000</h3>
            <p className="text-[#F2F2F2] text-lg">Brilliant Young Girls</p>
          </div>

          <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#7B5CFF]/10 to-[#2DE2E6]/10 border border-[#7B5CFF]/20 hover:border-[#7B5CFF]/50 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[#7B5CFF] to-[#2DE2E6] flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#2DE2E6] mb-2">108</h3>
            <p className="text-[#F2F2F2] text-lg">Countries United</p>
          </div>

          <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#2DE2E6]/10 to-[#FF4ECD]/10 border border-[#2DE2E6]/20 hover:border-[#2DE2E6]/50 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[#2DE2E6] to-[#FF4ECD] flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Satellite className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#2DE2E6] mb-2">∞</h3>
            <p className="text-[#F2F2F2] text-lg">Infinite Possibilities</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#FF4ECD]/5 via-[#7B5CFF]/5 to-[#2DE2E6]/5 rounded-3xl p-12 border border-[#FF4ECD]/20 backdrop-blur-sm">
          <p className="text-[#F2F2F2] text-xl leading-relaxed">
            The mission sets out on a bold journey to spark <span className="text-[#FF4ECD] font-semibold">curiosity</span>, <span className="text-[#7B5CFF] font-semibold">courage</span>, and a <span className="text-[#2DE2E6] font-semibold">lifelong passion</span> for STEM and space exploration in 12,000 brilliant young girls from 108 nations. United by a shared spirit of discovery, these future pioneers will step into the fascinating world of satellites, science, and innovation.
          </p>
          <p className="text-[#F2F2F2] text-xl leading-relaxed mt-6">
            ShakthiSAT isn't just a project — <span className="text-[#FF4ECD] font-semibold">it's a global movement</span>, opening doors to dreamers from every continent and every culture. Together, we explore the cosmos, break down barriers, and rise as the next generation of space leaders who will boldly shape the future among the stars.
          </p>
        </div>
      </div>
    </section>
  );
}
