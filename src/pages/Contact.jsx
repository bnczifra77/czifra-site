// To enable email submissions, sign up at https://formspree.io, create a form, and get your form ID.
// Add your Formspree form ID to the useForm hook below (e.g., useForm('yourFormId')).
// Optionally, store it in an environment variable (e.g., VITE_FORMSPREE_ID) and use import.meta.env.VITE_FORMSPREE_ID.
// Docs: https://formspree.io/react/
import { useForm, ValidationError } from '@formspree/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

export default function Contact() {
  // Replace 'yourFormId' with your actual Formspree form ID
  const [state, handleSubmit] = useForm('yourFormId');

  useEffect(() => {
    document.title = 'Czifra Consulting';
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
      <section className="py-20">
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
                    <p className="text-gray-600 dark:text-gray-300">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001F54] dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">email@example.com</p>
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
                <h3 className="text-2xl font-bold text-[#001F54] dark:text-white mb-6">Send Us a Message</h3>
                {state.succeeded ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-[#001F54] dark:text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-[#001F54] dark:text-white mb-2">Name *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-base bg-white dark:bg-[#0a1627] text-[#001F54] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-colors"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-[#001F54] dark:text-white mb-2">Email *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-base bg-white dark:bg-[#0a1627] text-[#001F54] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-colors"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-[#001F54] dark:text-white mb-2">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-base bg-white dark:bg-[#0a1627] text-[#001F54] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-colors resize-none"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    {/* Calendly embed or meeting booking can go here if desired */}
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-[#001F54] dark:bg-blue-900 text-white text-lg px-6 py-4 rounded-lg font-bold shadow hover:scale-105 hover:bg-blue-900 dark:hover:bg-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
                    >
                      {state.submitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 