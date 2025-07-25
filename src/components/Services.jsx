import { ArrowUpRight, Target, Users, BarChart2, Lightbulb, Zap } from 'lucide-react';

const services = [
  {
    icon: <ArrowUpRight className="w-12 h-12 text-blue-500 bg-blue-100 rounded-full p-2 mb-4" aria-label="Strategic Planning Icon" />, 
    title: 'Strategic Planning',
    desc: 'Develop comprehensive business strategies that align with your goals and drive sustainable growth.',
    bullets: ['Market Analysis', 'Competitive Intelligence', 'Growth Roadmaps'],
  },
  {
    icon: <Target className="w-12 h-12 text-blue-500 bg-blue-100 rounded-full p-2 mb-4" aria-label="Business Optimization Icon" />,
    title: 'Business Optimization',
    desc: 'Streamline operations and maximize efficiency to improve your bottom line and productivity.',
    bullets: ['Process Improvement', 'Cost Reduction', 'Performance Metrics'],
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500 bg-blue-100 rounded-full p-2 mb-4" aria-label="Leadership Development Icon" />,
    title: 'Leadership Development',
    desc: 'Build strong leadership capabilities that inspire teams and drive organizational success.',
    bullets: ['Executive Coaching', 'Team Building', 'Change Management'],
  },
  {
    icon: <BarChart2 className="w-12 h-12 text-blue-500 bg-blue-100 rounded-full p-2 mb-4" aria-label="Financial Advisory Icon" />,
    title: 'Financial Advisory',
    desc: 'Expert financial planning, risk assessment, and investment strategy for sustainable growth.',
    bullets: ['Financial Planning', 'Risk Assessment', 'Investment Strategy'],
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-blue-500 bg-blue-100 rounded-full p-2 mb-4" aria-label="Innovation Consulting Icon" />,
    title: 'Innovation Consulting',
    desc: 'Drive digital transformation and innovation with tailored technology integration.',
    bullets: ['Digital Transformation', 'Innovation Strategy', 'Technology Integration'],
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-500 bg-blue-100 rounded-full p-2 mb-4" aria-label="Rapid Implementation Icon" />,
    title: 'Rapid Implementation',
    desc: 'Accelerate project delivery with agile management and quick-win strategies.',
    bullets: ['Project Management', 'Quick Wins', 'Agile Delivery'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white dark:bg-[#0a1627] py-12 md:py-20" aria-labelledby="services-title">
      <div className="container max-w-[1200px] mx-auto px-4">
        <h2 id="services-title" className="text-2xl md:text-4xl font-bold text-[#001F54] dark:text-white text-center mb-4">Expert Consulting Services</h2>
        <p className="text-base md:text-xl text-gray-500 dark:text-gray-300 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          Comprehensive solutions designed to transform your business challenges into competitive advantages.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, idx) => (
            <article key={service.title} className="bg-white dark:bg-[#1a2740] rounded-2xl p-5 md:p-8 shadow-lg flex flex-col items-start" aria-label={service.title}>
              {service.icon}
              <h3 className="text-xl md:text-2xl font-bold text-[#001F54] dark:text-white mb-2">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-300 mb-4">{service.desc}</p>
              <ul className="mb-6 space-y-1">
                {service.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-300 rounded-full inline-block" />
                    {b}
                  </li>
                ))}
              </ul>
              <button className="mt-auto border border-blue-500 text-blue-500 dark:text-blue-300 bg-white dark:bg-[#1a2740] text-[13px] md:text-[14px] px-3 md:px-4 py-2 rounded-lg font-medium w-full hover:bg-blue-50 dark:hover:bg-blue-900 hover:scale-105 transition" aria-label={`Learn more about ${service.title}`}>
                Learn More
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 