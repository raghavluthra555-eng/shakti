import { Sparkles, Target, TrendingUp } from 'lucide-react';

export default function WhyGirls() {
  return (
    <section className="relative py-0 px-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] bg-clip-text text-transparent">
            Why Girls in Space?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] rounded-3xl blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-[#FF4ECD]/20 to-[#7B5CFF]/20 p-16 rounded-3xl border border-[#FF4ECD]/30 backdrop-blur-sm text-center">
              <div className="text-9xl font-bold bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] bg-clip-text text-transparent mb-4">
                28%
              </div>
              <p className="text-[#F2F2F2] text-2xl font-semibold">
                Of NASA's workforce today are women
              </p>
              <p className="text-[#F2F2F2]/70 text-lg mt-4">
                Shaping humanity's space future
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-[#F2F2F2] text-xl leading-relaxed">
              The gender gap in space and STEM fields remains significant. ShakthiSAT is our answer—an initiative to <span className="text-[#FF4ECD] font-semibold">ignite passion</span>, nurture <span className="text-[#7B5CFF] font-semibold">leadership</span>, and <span className="text-[#2DE2E6] font-semibold">dismantle limits</span>.
            </p>

            <p className="text-[#F2F2F2] text-xl leading-relaxed">
              Empowering girls in space fuels imagination, unlocks hidden potential, and opens pathways to shape humanity's future among the stars.
            </p>

            <div className="bg-gradient-to-r from-[#FF4ECD]/10 to-[#7B5CFF]/10 p-8 rounded-2xl border border-[#FF4ECD]/20">
              <p className="text-[#2DE2E6] text-2xl font-bold text-center">
                We believe in equal access to infinity
              </p>
              <p className="text-[#F2F2F2] text-lg text-center mt-2">
                Every girl deserves the chance to reach beyond the sky
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#FF4ECD]/10 to-transparent border border-[#FF4ECD]/20 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#FF4ECD] mb-3">Ignite Passion</h3>
            <p className="text-[#F2F2F2]/80">
              Spark curiosity and enthusiasm for space science and exploration
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#7B5CFF]/10 to-transparent border border-[#7B5CFF]/20 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#7B5CFF] to-[#2DE2E6] flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#7B5CFF] mb-3">Build Leaders</h3>
            <p className="text-[#F2F2F2]/80">
              Nurture the next generation of women leading space missions
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#2DE2E6]/10 to-transparent border border-[#2DE2E6]/20 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#2DE2E6] to-[#FF4ECD] flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#2DE2E6] mb-3">Break Barriers</h3>
            <p className="text-[#F2F2F2]/80">
              Dismantle limits and create equal opportunities in STEM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
