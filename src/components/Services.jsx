import { ArrowUpRight, Target, Users, BarChart2, Lightbulb, Zap } from 'lucide-react';

const services = [
  {
    icon: <ArrowUpRight className="w-12 h-12 text-blue-500 bg-blue-100 rounded-full p-2 mb-4" />, 
    title: 'Strategic Planning',
    desc: 'Develop comprehensive business strategies that align with your goals and drive sustainable growth.',
    bullets: ['Market Analysis', 'Competitive Intelligence', 'Growth Roadmaps'],
  },
  {
    icon: <Target className="w-12 h-12 text-blue-500 bg-blue-100 rounded-full p-2 mb-4" />,
    title: 'Business Optimization',
    desc: 'Streamline operations and maximize efficiency to improve your bottom line and productivity.',
    bullets: ['Process Improvement', 'Cost Reduction', 'Performance Metrics'],
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500 bg-blue-100 rounded-full p-2 mb-4" />,
    title: 'Leadership Development',
    desc: 'Build strong leadership capabilities that inspire teams and drive organizational success.',
    bullets: ['Executive Coaching', 'Team Building', 'Change Management'],
  },
  {
    icon: <BarChart2 className="w-12 h-12 text-blue-500 bg-blue-100 rounded-full p-2 mb-4" />,
    title: 'Financial Advisory',
    desc: 'Expert financial planning, risk assessment, and investment strategy for sustainable growth.',
    bullets: ['Financial Planning', 'Risk Assessment', 'Investment Strategy'],
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-blue-500 bg-blue-100 rounded-full p-2 mb-4" />,
    title: 'Innovation Consulting',
    desc: 'Drive digital transformation and innovation with tailored technology integration.',
    bullets: ['Digital Transformation', 'Innovation Strategy', 'Technology Integration'],
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-500 bg-blue-100 rounded-full p-2 mb-4" />,
    title: 'Rapid Implementation',
    desc: 'Accelerate project delivery with agile management and quick-win strategies.',
    bullets: ['Project Management', 'Quick Wins', 'Agile Delivery'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="container max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#001F54] text-center mb-4">Expert Consulting Services</h2>
        <p className="text-xl text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive solutions designed to transform your business challenges into competitive advantages.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={service.title} className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-start">
              {service.icon}
              <h3 className="text-2xl font-bold text-[#001F54] mb-2">{service.title}</h3>
              <p className="text-base text-gray-500 mb-4">{service.desc}</p>
              <ul className="mb-6 space-y-1">
                {service.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full inline-block" />
                    {b}
                  </li>
                ))}
              </ul>
              <button className="mt-auto border border-blue-500 text-blue-500 bg-white text-[14px] px-4 py-2 rounded-lg font-medium w-full hover:bg-blue-50 hover:scale-105 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 