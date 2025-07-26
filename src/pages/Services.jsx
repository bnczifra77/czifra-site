import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, Users, Shield, Target, Lightbulb, Clock, Star, Award, Heart, Send, CheckCircle, X } from 'lucide-react';

export default function Services() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    document.title = 'Services - Czifra Consulting';
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const services = [
    {
      title: "Strategic Planning",
      description: "Align strategies with your vision",
      longDesc: "We work with you to develop comprehensive strategic plans that align with your business goals and personal vision. Our approach ensures your strategy is both ambitious and achievable.",
      icon: Target,
      features: ["Goal setting & alignment", "Market analysis", "Competitive positioning", "Implementation roadmap"]
    },
    {
      title: "Business Optimization",
      description: "Boost efficiency, cut costs",
      longDesc: "Streamline your operations and maximize efficiency. We identify bottlenecks and implement solutions that save you time and money while improving quality.",
      icon: Zap,
      features: ["Process improvement", "Cost reduction", "Quality enhancement", "Performance metrics"]
    },
    {
      title: "Leadership Development",
      description: "Build confidence and skills",
      longDesc: "Develop your leadership capabilities and build a strong team. We focus on both your personal growth and creating a culture that supports your business goals.",
      icon: Users,
      features: ["Personal leadership skills", "Team building", "Communication strategies", "Decision-making frameworks"]
    },
    {
      title: "Financial Advisory",
      description: "Plan budgets and investments",
      longDesc: "Get expert guidance on financial planning, budgeting, and investment strategies tailored to your business needs and personal financial goals.",
      icon: Shield,
      features: ["Budget planning", "Cash flow management", "Investment strategies", "Financial forecasting"]
    },
    {
      title: "Innovation Consulting",
      description: "Drive creative solutions",
      longDesc: "Foster innovation in your business with creative problem-solving approaches. We help you think outside the box and implement innovative solutions.",
      icon: Lightbulb,
      features: ["Creative problem solving", "Innovation frameworks", "Technology integration", "Market disruption strategies"]
    },
    {
      title: "Rapid Implementation",
      description: "Fast, seamless changes",
      longDesc: "Quickly implement changes and improvements with our rapid deployment methodology. We ensure smooth transitions with minimal disruption to your business.",
      icon: Clock,
      features: ["Quick deployment", "Change management", "Training support", "Ongoing monitoring"]
    }
  ];

  const teamMembers = [
    {
      name: "Benjamin Czifra",
      title: "Founder and Lead Consultant",
      bio: "Passionate about small business success with decades of industry experience. Dedicated to empowering business owners with personalized strategies.",
      linkedin: "https://www.linkedin.com/in/benjaminczifra/",
      image: "👨‍💼"
    },
    {
      name: "Sarah Johnson",
      title: "Leadership Coach",
      bio: "Specializes in developing leadership skills and building high-performing teams. Helps business owners lead with confidence and clarity.",
      linkedin: "#",
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      title: "Financial Strategist",
      bio: "Expert in financial planning and optimization. Helps small business owners make informed financial decisions for sustainable growth.",
      linkedin: "#",
      image: "👨‍💼"
    }
  ];

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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001F54] to-[#1e40af] text-white py-20">
        <div className="container max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive consulting services tailored to YOUR unique business needs. 
            We focus on empowering YOU, the small business owner.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-[#1a2740] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <service.icon className="w-16 h-16 text-blue-500 mb-6" />
                <h3 className="text-2xl font-bold text-[#001F54] dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.longDesc}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-[#1a2740]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F54] dark:text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We understand the unique challenges of small business owners and tailor our approach to YOU
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-16 h-16 text-blue-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[#001F54] dark:text-white mb-4">Proven Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Decades of industry experience helping small business owners achieve their goals and overcome challenges.
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-16 h-16 text-blue-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[#001F54] dark:text-white mb-4">Tailored Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Customized strategies designed specifically for your unique business needs and personal goals.
              </p>
            </div>
            <div className="text-center">
              <Star className="w-16 h-16 text-blue-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[#001F54] dark:text-white mb-4">Client Success</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Real results with small business owners. We measure our success by YOUR success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F54] dark:text-white mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the experts dedicated to YOUR success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-[#1a2740] rounded-xl p-8 shadow-lg text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-[#001F54] dark:text-white mb-2">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">{member.title}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{member.bio}</p>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#001F54] dark:bg-[#1a2740] text-white">
        <div className="container max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation and discover how we can help YOU achieve your goals
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-white text-[#001F54] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
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
              Ready to start your transformation? Let's begin the conversation.
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