import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap, Send, X } from 'lucide-react';

export default function Homepage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    document.title = 'Czifra Consulting - Empowering Small Business Owners';
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    console.log('=== HOMEPAGE FORM SUBMISSION TRIGGERED ===');
    
    setIsSubmitting(true);
    
    // Get form data from DOM elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const message = document.getElementById('message').value;
    
    console.log('Homepage form data:', { name, email, company, message });
    
    // Validate required fields
    if (!name || !email || !message) {
      alert('Please fill in all required fields (Name, Email, and Message)');
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
      
      console.log('Formspree response status:', response.status);
      
      if (response.ok) {
        console.log('Success! Email sent via Formspree');
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
      console.error('Formspree failed:', error);
      alert('There was an error sending your message. Please email us directly at bnczifra77@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="min-h-screen">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001F54] to-[#1e40af] text-white py-20 md:py-32">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering Small Business Owners with Strategic Solutions
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                Transform your business with personalized consulting that focuses on YOUR goals, 
                YOUR challenges, and YOUR success. We don't just optimize your business—we empower YOU.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={scrollToContact}
                  className="bg-white text-[#001F54] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={scrollToContact}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#001F54] transition-all duration-300 hover:scale-105"
                >
                  Schedule a Consultation
                </button>
              </div>
            </div>
            {/* Right Content */}
            <div className="flex-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Why Choose Czifra Consulting?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-blue-100">Personalized strategies for YOUR business</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-blue-100">Proven track record with small businesses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-blue-100">Ongoing support and guidance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-blue-100">Free initial consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus on YOU Section */}
      <section className="py-20 bg-white dark:bg-[#0a1627]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Image */}
            <div className="flex-1">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl p-8 h-80 flex items-center justify-center">
                <Users className="w-32 h-32 text-blue-600 dark:text-blue-300" />
              </div>
            </div>
            {/* Right: Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#001F54] dark:text-white mb-6">
                We Focus on YOU, the Small Business Owner
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                At Czifra Consulting, we know small business owners wear many hats. We don't just optimize your business—we empower YOU with personalized strategies to achieve your goals, reduce stress, and grow confidently.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">Grow Your Business</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">Lead with Confidence</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">Simplify Operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">Build Your Team</span>
                </div>
              </div>
              <button 
                onClick={scrollToContact}
                className="bg-[#001F54] dark:bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 dark:hover:bg-blue-800 transition-all duration-300 hover:scale-105"
              >
                Discover How We Help You
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-20 bg-gray-50 dark:bg-[#1a2740]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F54] dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive consulting services tailored to YOUR unique business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Strategic Planning", desc: "Align strategies with your vision", icon: TrendingUp },
              { title: "Business Optimization", desc: "Boost efficiency, cut costs", icon: Zap },
              { title: "Leadership Development", desc: "Build confidence and skills", icon: Users },
              { title: "Financial Advisory", desc: "Plan budgets and investments", icon: Shield },
              { title: "Innovation Consulting", desc: "Drive creative solutions", icon: TrendingUp },
              { title: "Rapid Implementation", desc: "Fast, seamless changes", icon: Zap }
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-[#0a1627] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <service.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-[#001F54] dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="bg-[#001F54] dark:bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 dark:hover:bg-blue-800 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-[#0a1627]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F54] dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ready to transform your business? Let's start the conversation.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Left: Form */}
            <div className="flex-1 bg-white dark:bg-[#1a2740] rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-4">
              <div
                onSubmit={(e) => {
                  e.preventDefault();
                  return false;
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#001F54] dark:text-white mb-1">Name *</label>
                  <input 
                    id="name" 
                    type="text" 
                    required
                    placeholder="Your Name" 
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-base bg-white dark:bg-[#0a1627] text-[#001F54] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900" 
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="email" className="block text-sm font-bold text-[#001F54] dark:text-white mb-1">Email *</label>
                    <input 
                      id="email" 
                      type="email" 
                      required
                      placeholder="john@company.com" 
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-base bg-white dark:bg-[#0a1627] text-[#001F54] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900" 
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="company" className="block text-sm font-bold text-[#001F54] dark:text-white mb-1">Company</label>
                    <input 
                      id="company" 
                      type="text" 
                      placeholder="Your Company" 
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-base bg-white dark:bg-[#0a1627] text-[#001F54] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#001F54] dark:text-white mb-1">Message *</label>
                  <textarea 
                    id="message" 
                    required
                    placeholder="Tell us about your business challenges and goals..." 
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-base h-32 resize-none bg-white dark:bg-[#0a1627] text-[#001F54] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900" 
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
                      Sending...
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
            {/* Right: Company Info */}
            <div className="flex-1 bg-[#001F54] dark:bg-[#1a2740] rounded-2xl p-6 md:p-8 flex flex-col gap-4 text-white shadow-lg">
              <div>
                <div className="text-xl md:text-2xl font-bold text-white mb-2">Czifra Consulting</div>
                <div className="text-blue-100">Helping YOU Succeed</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                      <span>(609) 635-6320</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                                      <span>bnczifra77@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                  <span>Monday - Friday: 9:00 AM - 5:00 PM</span>
                </div>
              </div>
              <div className="bg-blue-900 dark:bg-blue-800 rounded-xl p-4 mt-4">
                <div className="font-bold mb-2 text-white">Why Choose Us?</div>
                <ul className="text-blue-100 text-sm space-y-1">
                  <li>• Proven track record of success</li>
                  <li>• Customized solutions for every business</li>
                  <li>• Free initial consultation</li>
                  <li>• Ongoing support and guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 