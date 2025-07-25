import Button from './Button.jsx';
export default function Hero() {
  return (
    <section className="w-full bg-[#001F54] dark:bg-[#0a1627] min-h-[400px] flex items-center justify-center py-8 md:py-12">
      <div className="container max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-xl w-full mb-8 md:mb-0">
          <div className="bg-blue-500 dark:bg-blue-900 text-white font-bold text-3xl md:text-4xl rounded-lg px-4 py-2 mb-4 flex items-center justify-center" style={{ minWidth: 48, minHeight: 48 }}>
            C
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white dark:text-white mb-2 leading-tight">Czifra Consulting</h1>
          <h2 className="text-xl md:text-3xl font-bold text-white dark:text-white mb-4 leading-tight">Helping <span className="uppercase">YOU</span> Succeed</h2>
          <p className="text-base md:text-lg text-[#D1D5DB] dark:text-gray-300 mb-6 leading-relaxed">
            Transform your business with strategic consulting solutions. We deliver expert guidance, innovative strategies, and measurable results that drive sustainable growth.
          </p>
          <button className="bg-white dark:bg-[#1a2740] text-[#001F54] dark:text-white text-[16px] font-bold px-4 md:px-6 py-2 md:py-3 rounded-lg shadow hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900 transition mb-6 flex items-center gap-2">
            Get Started Today <span className="text-xl">→</span>
          </button>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <span className="flex items-center gap-2 bg-transparent text-white dark:text-white text-xs md:text-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-[#10B981]">
              <span className="bg-[#10B981] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">✓</span>
              Strategic Planning
            </span>
            <span className="flex items-center gap-2 bg-transparent text-white dark:text-white text-xs md:text-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-[#10B981]">
              <span className="bg-[#10B981] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">✓</span>
              Business Optimization
            </span>
            <span className="flex items-center gap-2 bg-transparent text-white dark:text-white text-xs md:text-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-[#10B981]">
              <span className="bg-[#10B981] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">✓</span>
              Leadership Development
            </span>
          </div>
        </div>
        {/* Right Side Card */}
        <div className="flex-1 max-w-md w-full bg-[#001A40]/80 dark:bg-[#1a2740]/80 rounded-2xl p-6 md:p-8 flex flex-col items-center shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-white dark:text-white mb-2">Ready to Grow?</h3>
          <p className="text-sm md:text-base text-[#D1D5DB] dark:text-gray-300 mb-6 text-center">Let's discuss your business goals and create a roadmap to success.</p>
          <ul className="w-full mb-6 space-y-3">
            <li className="flex items-center gap-3">
              <span className="bg-[#10B981] text-white rounded-full w-6 h-6 flex items-center justify-center text-base font-bold">✓</span>
              <span className="text-white dark:text-white text-base">Free Consultation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-[#10B981] text-white rounded-full w-6 h-6 flex items-center justify-center text-base font-bold">✓</span>
              <span className="text-white dark:text-white text-base">Custom Strategy</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-[#10B981] text-white rounded-full w-6 h-6 flex items-center justify-center text-base font-bold">✓</span>
              <span className="text-white dark:text-white text-base">Proven Results</span>
            </li>
          </ul>
          <button className="w-full bg-white dark:bg-[#1a2740] text-[#001F54] dark:text-white text-[16px] px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold shadow hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900 transition">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}