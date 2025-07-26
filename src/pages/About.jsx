import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Heart, Shield, Users, TrendingUp, Award, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';

export default function About() {
  useEffect(() => {
    document.title = 'About Us - Czifra Consulting';
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our dealings.",
      icon: Shield
    },
    {
      title: "Personalization",
      description: "Every solution is tailored specifically to YOUR unique business needs and goals.",
      icon: Heart
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, ensuring the highest quality outcomes.",
      icon: Award
    },
    {
      title: "Partnership",
      description: "We work as true partners with our clients, invested in YOUR success.",
      icon: Users
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description: "Czifra Consulting was established with a mission to empower small business owners."
    },
    {
      year: "2021",
      title: "First 50 Clients",
      description: "Helped our first 50 small business owners achieve their goals and grow their businesses."
    },
    {
      year: "2022",
      title: "Expanded Services",
      description: "Launched comprehensive service offerings including leadership development and financial advisory."
    },
    {
      year: "2023",
      title: "100+ Success Stories",
      description: "Celebrated over 100 successful client transformations and continued growth."
    },
    {
      year: "2024",
      title: "Future Focus",
      description: "Continuing to innovate and expand our services to better serve small business owners."
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001F54] to-[#1e40af] text-white py-20">
        <div className="container max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Empowering small business owners through innovative strategies and personalized solutions
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-[#0a1627] text-gray-900 dark:text-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#001F54] dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At Czifra Consulting, we understand the unique challenges of small business owners and tailor our approach to YOU. Our mission is to empower small business owners with the strategies, tools, and confidence they need to achieve their goals and build sustainable, thriving businesses.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We don't just optimize your business—we focus on YOU as the business owner, helping you develop the skills, mindset, and strategies needed to lead with confidence and grow with purpose.
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-[#001F54] dark:bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 dark:hover:bg-blue-800 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                Learn More About Our Approach
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl p-8 h-80 flex items-center justify-center">
                <Target className="w-32 h-32 text-blue-600 dark:text-blue-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-[#001F54] to-[#1e40af] text-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center border border-white/20">
                <value.icon className="w-16 h-16 text-blue-300 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-blue-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-[#0a1627] text-gray-900 dark:text-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F54] dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Key milestones in our mission to empower small business owners
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 dark:bg-blue-800 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className={`bg-white dark:bg-[#1a2740] rounded-xl p-6 shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-[#001F54] dark:text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-[#0a1627] relative z-10"></div>
                  
                  <div className="w-1/2 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-[#001F54] to-[#1e40af] text-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              The experts dedicated to YOUR success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg text-center border border-white/20">
              <div className="text-6xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold text-white mb-2">Benjamin Czifra</h3>
              <p className="text-blue-300 mb-4">Founder and Lead Consultant</p>
              <p className="text-blue-100 mb-6">
                Passionate about small business success with decades of industry experience. Dedicated to empowering business owners with personalized strategies.
              </p>
              <a 
                href="https://www.linkedin.com/in/benjaminczifra/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg text-center border border-white/20">
              <div className="text-6xl mb-4">👩‍💼</div>
              <h3 className="text-xl font-bold text-white mb-2">Sarah Johnson</h3>
              <p className="text-blue-300 mb-4">Leadership Coach</p>
              <p className="text-blue-100 mb-6">
                Specializes in developing leadership skills and building high-performing teams. Helps business owners lead with confidence and clarity.
              </p>
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg text-center border border-white/20">
              <div className="text-6xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold text-white mb-2">Michael Chen</h3>
              <p className="text-blue-300 mb-4">Financial Strategist</p>
              <p className="text-blue-100 mb-6">
                Expert in financial planning and optimization. Helps small business owners make informed financial decisions for sustainable growth.
              </p>
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-[#0a1627] text-gray-900 dark:text-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F54] dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ready to learn more about how we can help YOU succeed?
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Left: Form */}
            <div className="flex-1 bg-white dark:bg-[#1a2740] rounded-2xl shadow-lg p-6 md:p-8">
              <ContactForm title="Get In Touch" />
            </div>
            {/* Right: Company Info */}
            <div className="flex-1 bg-[#001F54] dark:bg-[#1a2740] rounded-2xl p-6 md:p-8 flex flex-col gap-4 text-white shadow-lg">
              <div>
                <div className="text-xl md:text-2xl font-bold text-white mb-2">Czifra Consulting</div>
                <div className="text-blue-100">Helping YOU Succeed</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-300" />
                                      <span>(609) 635-6320</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-300" />
                                      <span>bnczifra77@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-300" />
                  <span>Monday - Friday: 9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-300" />
                  <span>Available for remote and on-site consultations</span>
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