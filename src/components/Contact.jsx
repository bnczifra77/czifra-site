import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-white dark:bg-[#0a1627] py-12 md:py-20">
      <div className="container max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#001F54] dark:text-white mb-2">Get In Touch</h2>
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-300 mb-2">Ready to take your business to the next level? Let's start the conversation.</p>
        <p className="text-xs md:text-sm text-gray-400 dark:text-gray-400 mb-6 md:mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Left: Form */}
          <form className="flex-1 bg-white dark:bg-[#1a2740] rounded-2xl shadow-lg p-4 md:p-8 flex flex-col gap-4" aria-label="Contact form">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-xs md:text-sm font-bold text-[#001F54] dark:text-white mb-1">First Name</label>
                <input id="firstName" type="text" placeholder="John" className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base bg-white dark:bg-[#0a1627] text-[#001F54] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900" aria-label="First Name" />
              </div>
              <div className="flex-1 mt-4 md:mt-0">
                <label htmlFor="lastName" className="block text-xs md:text-sm font-bold text-[#001F54] dark:text-white mb-1">Last Name</label>
                <input id="lastName" type="text" placeholder="Doe" className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base bg-white dark:bg-[#0a1627] text-[#001F54] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900" aria-label="Last Name" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="email" className="block text-xs md:text-sm font-bold text-[#001F54] dark:text-white mb-1">Email</label>
                <input id="email" type="email" placeholder="john@company.com" className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base bg-white dark:bg-[#0a1627] text-[#001F54] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900" aria-label="Email" />
              </div>
              <div className="flex-1 mt-4 md:mt-0">
                <label htmlFor="company" className="block text-xs md:text-sm font-bold text-[#001F54] dark:text-white mb-1">Company</label>
                <input id="company" type="text" placeholder="Your Company" className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base bg-white dark:bg-[#0a1627] text-[#001F54] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900" aria-label="Company" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs md:text-sm font-bold text-[#001F54] dark:text-white mb-1">Message</label>
              <textarea id="message" placeholder="Tell us about your business challenges and goals.." className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base h-[120px] md:h-[150px] resize-none bg-white dark:bg-[#0a1627] text-[#001F54] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900" aria-label="Message" />
            </div>
            <button type="submit" className="w-full bg-[#001F54] dark:bg-blue-900 text-white text-[15px] md:text-[16px] px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold shadow hover:scale-105 hover:bg-blue-900 dark:hover:bg-blue-800 transition mt-2" aria-label="Send Message">
              Send Message
            </button>
          </form>
          {/* Right: Company Info Card */}
          <div className="flex-1 bg-[#001F54] dark:bg-[#1a2740] rounded-2xl p-4 md:p-8 flex flex-col gap-4 text-white shadow-lg mt-6 md:mt-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-500 dark:bg-blue-900 text-white font-bold text-2xl rounded-lg px-3 py-2 flex items-center justify-center" style={{ minWidth: 40, minHeight: 40 }} aria-label="Czifra Consulting Logo">C</div>
              <div>
                <div className="text-lg md:text-xl font-bold text-white dark:text-white">Czifra Consulting</div>
                <div className="text-xs md:text-base text-blue-100 dark:text-blue-200">Helping YOU Succeed</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-lg">
              <Phone className="w-5 h-5 text-blue-300 dark:text-blue-200" aria-label="Phone icon" />
              (123) 456-7890
            </div>
            <div className="flex items-center gap-2 text-sm md:text-lg">
              <Mail className="w-5 h-5 text-blue-300 dark:text-blue-200" aria-label="Mail icon" />
              email@example.com
            </div>
            <div className="flex items-center gap-2 text-xs md:text-lg text-blue-100 dark:text-blue-200">
              <MapPin className="w-5 h-5 text-blue-300 dark:text-blue-200" aria-label="Location icon" />
              Available for remote and on-site consultations.
            </div>
            <div className="flex items-center gap-2 text-xs md:text-lg text-blue-100 dark:text-blue-200">
              <Clock className="w-5 h-5 text-blue-300 dark:text-blue-200" aria-label="Clock icon" />
              Monday - Friday: 9:00 AM - 6:00 PM
            </div>
            <div className="bg-blue-900 dark:bg-blue-800 rounded-xl p-3 md:p-4 mt-4">
              <div className="font-bold mb-2 text-sm md:text-base text-white dark:text-white">Why Choose Us?</div>
              <ul className="list-disc list-inside text-blue-100 dark:text-blue-200 text-xs md:text-base space-y-1">
                <li>Proven track record of success</li>
                <li>Customized solutions for every business</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}