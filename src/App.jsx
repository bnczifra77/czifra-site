import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
export default function App() {
  return (
    <div className="min-h-screen bg-blue-500 text-white">
      <Header />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
}