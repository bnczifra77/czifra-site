export default function CTA() {
  return (
    <section className="w-full bg-[#001F54] rounded-2xl my-16 py-12 px-4 flex items-center justify-center">
      <div className="container max-w-[900px] mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg md:text-xl text-[#D1D5DB] mb-8 max-w-2xl">
          Let's discuss your specific needs and create a customized solution that delivers results.
        </p>
        <button className="bg-white text-[#001F54] text-[16px] px-6 py-3 rounded-lg font-bold shadow hover:scale-105 hover:bg-blue-50 transition">
          Schedule Free Consultation
        </button>
      </div>
    </section>
  );
} 