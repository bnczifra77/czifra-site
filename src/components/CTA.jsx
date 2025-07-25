export default function CTA() {
  return (
    <section className="w-full bg-[#001F54] rounded-2xl my-8 md:my-16 py-8 md:py-12 px-2 md:px-4 flex items-center justify-center">
      <div className="container max-w-[900px] mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">Ready to Transform Your Business?</h2>
        <p className="text-base md:text-xl text-[#D1D5DB] mb-6 md:mb-8 max-w-2xl">
          Let's discuss your specific needs and create a customized solution that delivers results.
        </p>
        <button className="bg-white text-[#001F54] text-[15px] md:text-[16px] px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold shadow hover:scale-105 hover:bg-blue-50 transition">
          Schedule Free Consultation
        </button>
      </div>
    </section>
  );
} 