import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-300">© 2026 Second-Hand Textbooks Catalogue. All rights reserved.</p>
          <nav className="flex gap-4 text-sm" aria-label="Footer navigation">
            <Link href="/about" className="hover:text-gold-300 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-gold-300 transition-colors">Contact</Link>
            <a href="https://wa.me/254708926907" target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors">WhatsApp</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}