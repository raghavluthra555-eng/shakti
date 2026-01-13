import { Award, Microscope, Rocket, Users } from 'lucide-react';

export default function ProgramHighlights() {
  const highlights = [
    {
      icon: Rocket,
      title: 'Satellite Building Workshops',
      description: 'Hands-on experience designing, building, and launching real satellites',
      gradient: 'from-[#FF4ECD] to-[#7B5CFF]',
    },
    {
      icon: Microscope,
      title: 'STEM Mentorship',
      description: 'Connect with women leaders in aerospace and technology fields',
      gradient: 'from-[#7B5CFF] to-[#2DE2E6]',
    },
    {
      icon: Users,
      title: 'Global Collaboration',
      description: 'Work with peers from 108 countries on real-world space missions',
      gradient: 'from-[#2DE2E6] to-[#FF4ECD]',
    },
    {
      icon: Award,
      title: 'Recognition & Certification',
      description: 'Earn internationally recognized certificates and achievements',
      gradient: 'from-[#FF4ECD] to-[#2DE2E6]',
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#07070F] to-[#0D0D1A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2DE2E6] to-[#FF4ECD] bg-clip-text text-transparent">
            Program Highlights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2DE2E6] to-[#FF4ECD] mx-auto mb-8"></div>
          <p className="text-[#F2F2F2] text-xl max-w-3xl mx-auto">
            Experience cutting-edge space education through immersive programs designed to inspire and empower
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF4ECD]/5 to-[#7B5CFF]/5 border border-[#FF4ECD]/20 p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FF4ECD]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${highlight.gradient} mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#F2F2F2] mb-4">{highlight.title}</h3>
                <p className="text-[#F2F2F2]/80 text-lg">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#FF4ECD]/10 via-[#7B5CFF]/10 to-[#2DE2E6]/10 rounded-3xl p-12 border border-[#FF4ECD]/30 backdrop-blur-sm text-center">
          <h3 className="text-3xl font-bold text-[#F2F2F2] mb-4">
            Ready to Launch Your Journey?
          </h3>
          <p className="text-[#F2F2F2]/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of girls worldwide in an extraordinary adventure that will transform your understanding of space, science, and your own potential.
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] text-white rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#FF4ECD]/50">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
