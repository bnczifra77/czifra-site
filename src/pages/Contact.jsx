import { Phone, Mail, MapPin, Clock, Send, CheckCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us - Czifra Consulting';
  }, []);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Get form data from DOM elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const message = document.getElementById('message').value;
    
    // Validate required fields
    if (!name || !email || !message) {
      alert('Please fill in all required fields (Name, Email, and Message)');
      setIsSubmitting(false);
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Use Formspree
      const response = await fetch('https://formspree.io/f/xvgqablw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          company: company,
          message: message,
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setShowSuccessModal(true);
        // Reset form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('company').value = '';
        document.getElementById('message').value = '';
      } else {
        throw new Error('Formspree failed');
      }
      
    } catch (error) {
      alert('There was an error sending your message. Please email us directly at bnczifra77@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a1627]">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#1a2740] rounded-2xl p-8 max-w-md mx-4 relative">
            <button
              onClick={closeSuccessModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#001F54] dark:text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Thank you for reaching out! We've received your message and will get back to you within 24 hours.
              </p>
              <button
                onClick={closeSuccessModal}
                className="bg-[#001F54] dark:bg-blue-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-900 dark:hover:bg-blue-800 transition-colors"
              >
                Got It!
              </button>
            </div>
          </div>
        </div>
      )}

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
                <h3 className="text-2xl font-bold text-[#001F54] dark:text-white mb-6">Send Us a Message</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-[#001F54] dark:text-white mb-2">Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-base bg-white dark:bg-[#0a1627] text-[#001F54] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#001F54] dark:text-white mb-2">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-base bg-white dark:bg-[#0a1627] text-[#001F54] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-[#001F54] dark:text-white mb-2">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-base bg-white dark:bg-[#0a1627] text-[#001F54] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-colors"
                    />
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
                  </div>
                  
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-[#001F54] dark:bg-blue-900 text-white text-lg px-6 py-4 rounded-lg font-bold shadow hover:scale-105 hover:bg-blue-900 dark:hover:bg-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Opening Email...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 