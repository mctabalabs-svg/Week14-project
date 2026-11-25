import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-brand-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-serif font-bold text-gold-300">📚</span>
            <span className="text-lg font-semibold tracking-tight">Second-Hand Textbooks</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium" aria-label="Main navigation">
            <Link href="/products" className="hover:text-gold-200 transition-colors">Catalogue</Link>
            <Link href="/about" className="hover:text-gold-200 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-gold-200 transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}