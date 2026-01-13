import { HeartHandshake, Lightbulb, Users2 } from 'lucide-react';

export default function WhatIsShaktiSat() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#07070F] to-[#0D0D1A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#7B5CFF] to-[#2DE2E6] bg-clip-text text-transparent">
              What is Mission "ShakthiSAT"?
            </h2>

            <p className="text-[#F2F2F2] text-lg leading-relaxed mb-6">
              ShakthiSAT represents more than a satellite mission—<span className="text-[#7B5CFF] font-semibold">it's a philosophy of building bridges</span> across cultures through STEM and space collaboration.
            </p>

            <p className="text-[#F2F2F2] text-lg leading-relaxed mb-6">
              It stands as a <span className="text-[#FF4ECD] font-semibold">beacon of hope</span>, dedicated to fostering unparalleled international cooperation and unity across the globe.
            </p>

            <p className="text-[#F2F2F2] text-lg leading-relaxed mb-6">
              ShakthiSAT sparks a shared sense of purpose, reminding us that discovery becomes richer when humanity learns, builds, and reaches upward together. It encourages collaboration that transcends nationality, language, and geography, allowing young learners to see themselves as contributors to a global scientific journey rather than observers from afar.
            </p>

            <p className="text-[#2DE2E6] text-xl font-semibold italic">
              With every step forward, the mission reinforces the belief that space is not the privilege of a few, but a frontier that belongs to all.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#7B5CFF]/20 to-[#FF4ECD]/20 border border-[#7B5CFF]/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <HeartHandshake className="w-12 h-12 text-[#FF4ECD] mb-4" />
              <h3 className="text-2xl font-bold text-[#F2F2F2] mb-3">Unity Across Borders</h3>
              <p className="text-[#F2F2F2]/80">
                Transcending nationality, language, and geography to create a truly global scientific community.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#FF4ECD]/20 to-[#2DE2E6]/20 border border-[#FF4ECD]/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Lightbulb className="w-12 h-12 text-[#2DE2E6] mb-4" />
              <h3 className="text-2xl font-bold text-[#F2F2F2] mb-3">Shared Discovery</h3>
              <p className="text-[#F2F2F2]/80">
                Humanity learns, builds, and reaches upward together, making space exploration a collective journey.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#2DE2E6]/20 to-[#7B5CFF]/20 border border-[#2DE2E6]/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Users2 className="w-12 h-12 text-[#7B5CFF] mb-4" />
              <h3 className="text-2xl font-bold text-[#F2F2F2] mb-3">Contributors, Not Observers</h3>
              <p className="text-[#F2F2F2]/80">
                Empowering young learners to actively shape the future of space exploration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
