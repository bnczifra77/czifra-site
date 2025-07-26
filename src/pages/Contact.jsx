import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm.jsx';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us - Czifra Consulting';
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a1627]">
      <section className="bg-gradient-to-br from-[#001F54] to-[#1e40af] text-white py-20">
        <div className="container max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to transform your business? Let's start the conversation about how we can help you succeed.
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-white dark:bg-[#0a1627] text-gray-900 dark:text-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: Contact Info */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#001F54] dark:text-white mb-8">Let's Connect</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We're here to help you achieve your goals. Whether you're looking to grow, lead, or optimize, we're ready to partner with you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001F54] dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">(609) 635-6320</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001F54] dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">bnczifra77@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001F54] dark:text-white">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001F54] dark:text-white">Service Area</h3>
                    <p className="text-gray-600 dark:text-gray-300">Available for remote and on-site consultations</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Contact Form */}
            <div className="flex-1">
              <div className="bg-white dark:bg-[#1a2740] rounded-2xl shadow-lg p-8">
                <ContactForm title="Send Us a Message" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 