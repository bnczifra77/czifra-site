export default function Footer() {
  return (
    <footer className="bg-consulting-blue text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Czifra Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
}