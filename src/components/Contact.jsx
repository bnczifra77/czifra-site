import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#001F54] mb-2">Get In Touch</h2>
        <p className="text-lg text-gray-500 mb-2">Ready to take your business to the next level? Let's start the conversation.</p>
        <p className="text-sm text-gray-400 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Form */}
          <form className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-bold text-[#001F54] mb-1">First Name</label>
                <input type="text" placeholder="John" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-bold text-[#001F54] mb-1">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-bold text-[#001F54] mb-1">Email</label>
                <input type="email" placeholder="john@company.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-bold text-[#001F54] mb-1">Company</label>
                <input type="text" placeholder="Your Company" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-[#001F54] mb-1">Message</label>
              <textarea placeholder="Tell us about your business challenges and goals.." className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base h-[150px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <button type="submit" className="w-full bg-[#001F54] text-white text-[16px] px-6 py-3 rounded-lg font-bold shadow hover:scale-105 hover:bg-blue-900 transition mt-2">
              Send Message
            </button>
          </form>
          {/* Right: Company Info Card */}
          <div className="flex-1 bg-[#001F54] rounded-2xl p-8 flex flex-col gap-4 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-500 text-white font-bold text-2xl rounded-lg px-3 py-2 flex items-center justify-center" style={{ minWidth: 40, minHeight: 40 }}>C</div>
              <div>
                <div className="text-xl font-bold">Czifra Consulting</div>
                <div className="text-base text-blue-100">Helping YOU Succeed</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Phone className="w-5 h-5 text-blue-300" />
              (123) 456-7890
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Mail className="w-5 h-5 text-blue-300" />
              email@example.com
            </div>
            <div className="flex items-center gap-2 text-lg text-blue-100">
              <MapPin className="w-5 h-5 text-blue-300" />
              Available for remote and on-site consultations.
            </div>
            <div className="flex items-center gap-2 text-lg text-blue-100">
              <Clock className="w-5 h-5 text-blue-300" />
              Monday - Friday: 9:00 AM - 6:00 PM
            </div>
            <div className="bg-blue-900 rounded-xl p-4 mt-4">
              <div className="font-bold mb-2">Why Choose Us?</div>
              <ul className="list-disc list-inside text-blue-100 text-base space-y-1">
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