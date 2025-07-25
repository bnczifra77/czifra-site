import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import CTA from './components/CTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
export default function App() {
  return (
    <div className="min-h-screen bg-blue-500 text-white">
      <Header />
      <Hero />
      <Services />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}