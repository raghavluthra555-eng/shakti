import { Globe2, Infinity, Network } from 'lucide-react';

export default function Why108() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#0D0D1A] to-[#07070F]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#7B5CFF] to-[#2DE2E6] bg-clip-text text-transparent">
            Why 108 Countries?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7B5CFF] to-[#2DE2E6] mx-auto mb-8"></div>
          <p className="text-[#2DE2E6] text-3xl font-bold italic">
            "108 nations, one cosmos."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative order-2 md:order-1">
            <div className="grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl bg-gradient-to-br from-[#7B5CFF]/20 to-[#2DE2E6]/20 border border-[#7B5CFF]/30 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <Globe2 className="w-8 h-8 text-[#2DE2E6]" />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B5CFF] to-[#2DE2E6] rounded-3xl blur-3xl opacity-20 -z-10"></div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-[#F2F2F2] text-xl leading-relaxed mb-6">
              The number <span className="text-[#7B5CFF] font-bold text-3xl">108</span> carries deep <span className="text-[#7B5CFF] font-semibold">cultural</span>, <span className="text-[#FF4ECD] font-semibold">scientific</span>, and <span className="text-[#2DE2E6] font-semibold">spiritual significance</span> across civilizations—symbolizing completeness, cosmic harmony, and unity.
            </p>

            <p className="text-[#F2F2F2] text-xl leading-relaxed mb-6">
              Bringing together 108 nations in a shared mission sparks innovation through diversity, strengthens collaboration, and builds a future where humanity learns, explores, and grows together among the stars.
            </p>

            <p className="text-[#F2F2F2] text-xl leading-relaxed">
              By uniting 108 countries, we celebrate <span className="text-[#FF4ECD] font-semibold">diversity as a force multiplier</span>—proving that breakthroughs flourish when perspectives merge, borders fade, and the cosmos becomes a shared destination rather than a distant dream.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#7B5CFF]/10 to-[#FF4ECD]/10 border border-[#7B5CFF]/30 hover:scale-105 transition-transform duration-300">
            <Infinity className="w-12 h-12 text-[#7B5CFF] mb-4" />
            <h3 className="text-2xl font-bold text-[#F2F2F2] mb-3">Cosmic Harmony</h3>
            <p className="text-[#F2F2F2]/80">
              Symbolizing completeness and unity across civilizations
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#FF4ECD]/10 to-[#2DE2E6]/10 border border-[#FF4ECD]/30 hover:scale-105 transition-transform duration-300">
            <Network className="w-12 h-12 text-[#FF4ECD] mb-4" />
            <h3 className="text-2xl font-bold text-[#F2F2F2] mb-3">Innovation Through Diversity</h3>
            <p className="text-[#F2F2F2]/80">
              When perspectives merge, breakthroughs flourish
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#2DE2E6]/10 to-[#7B5CFF]/10 border border-[#2DE2E6]/30 hover:scale-105 transition-transform duration-300">
            <Globe2 className="w-12 h-12 text-[#2DE2E6] mb-4" />
            <h3 className="text-2xl font-bold text-[#F2F2F2] mb-3">Shared Destination</h3>
            <p className="text-[#F2F2F2]/80">
              The cosmos belongs to all, not just a few
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
