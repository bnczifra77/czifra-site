import Button from './Button.jsx';
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold">Czifra Consulting</h1>
        <p className="text-xl text-blue-100 mt-2">Helping YOU Succeed</p>
        <Button className="mt-6 bg-white text-consulting-blue font-semibold py-2 px-4 rounded">
          Get Started
        </Button>
      </div>
    </section>
  );
}