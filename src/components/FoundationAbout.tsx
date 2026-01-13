import { BookOpen, Heart, Telescope } from 'lucide-react';

export default function FoundationAbout() {
  return (
    <section className="relative py-24 px-6 bg-[#07070F]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] bg-clip-text text-transparent">
            About SKI Star Foundation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] mx-auto mb-8"></div>
          <p className="text-[#F2F2F2] text-2xl max-w-4xl mx-auto">
            Since <span className="text-[#FF4ECD] font-bold">2017</span>, we've been on a mission to democratize space education and inspire the next generation of cosmic changemakers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF4ECD]/20 to-[#7B5CFF]/20 border border-[#FF4ECD]/30 p-8 hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF4ECD]/30 to-transparent rounded-full blur-2xl"></div>
            <Telescope className="w-12 h-12 text-[#FF4ECD] mb-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-[#F2F2F2] mb-3 relative z-10">Space Education</h3>
            <p className="text-[#F2F2F2]/80 text-lg relative z-10">
              Democratizing access to space technology since 2017
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#7B5CFF]/20 to-[#2DE2E6]/20 border border-[#7B5CFF]/30 p-8 hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7B5CFF]/30 to-transparent rounded-full blur-2xl"></div>
            <BookOpen className="w-12 h-12 text-[#7B5CFF] mb-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-[#F2F2F2] mb-3 relative z-10">STEM Programs</h3>
            <p className="text-[#F2F2F2]/80 text-lg relative z-10">
              Empowering students through hands-on satellite missions
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2DE2E6]/20 to-[#FF4ECD]/20 border border-[#2DE2E6]/30 p-8 hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2DE2E6]/30 to-transparent rounded-full blur-2xl"></div>
            <Heart className="w-12 h-12 text-[#2DE2E6] mb-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-[#F2F2F2] mb-3 relative z-10">Humanitarian Impact</h3>
            <p className="text-[#F2F2F2]/80 text-lg relative z-10">
              Community support initiatives during COVID-19 and beyond
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-gradient-to-br from-[#FF4ECD]/10 via-[#7B5CFF]/10 to-[#2DE2E6]/10 rounded-3xl p-12 border border-[#FF4ECD]/30 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-[#F2F2F2] mb-6">Our Journey</h3>
                <p className="text-[#F2F2F2]/90 text-lg leading-relaxed mb-4">
                  For over <span className="text-[#FF4ECD] font-semibold">seven years</span>, SKI Star Foundation has been at the forefront of making space education accessible to all. We believe that the wonders of the universe should not be limited by geography, gender, or economic background.
                </p>
                <p className="text-[#F2F2F2]/90 text-lg leading-relaxed">
                  Through innovative programs, hands-on satellite missions, and a commitment to inclusivity, we're building a future where every young mind has the opportunity to reach for the stars.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 rounded-xl bg-[#FF4ECD]/20 border border-[#FF4ECD]/30">
                  <div className="text-4xl font-bold text-[#FF4ECD] mb-2">2017</div>
                  <div className="text-[#F2F2F2] text-sm">Founded</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-[#7B5CFF]/20 border border-[#7B5CFF]/30">
                  <div className="text-4xl font-bold text-[#7B5CFF] mb-2">108</div>
                  <div className="text-[#F2F2F2] text-sm">Countries</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-[#2DE2E6]/20 border border-[#2DE2E6]/30">
                  <div className="text-4xl font-bold text-[#2DE2E6] mb-2">12K+</div>
                  <div className="text-[#F2F2F2] text-sm">Young Girls</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-[#FF4ECD]/20 border border-[#FF4ECD]/30">
                  <div className="text-4xl font-bold text-[#FF4ECD] mb-2">∞</div>
                  <div className="text-[#F2F2F2] text-sm">Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
