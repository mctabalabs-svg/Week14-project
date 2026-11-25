import { getAllProducts, getCategories } from "@/lib/products";
import ProductCard from "@/components/product-card";
import Link from "next/link";

const HERO_PRODUCTS = [1, 2, 3];

export default async function HomePage() {
  const products = await getAllProducts();
  const categories = await getCategories();
  const featured = products.filter((p) => HERO_PRODUCTS.includes(p.id));

  return (
    <>
      <section className="hero-gradient text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight">
            Affordable Second-Hand Textbooks
          </h1>
          <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto">
            Browse our curated collection of quality used textbooks, encyclopedias,
            and literature. Save money while learning with books that matter.
          </p>
          <div className="mt-8">
            <Link href="/products" className="inline-block bg-gold-500 hover:bg-gold-600 text-brand-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
              Browse Catalogue
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-serif font-bold text-brand-900 mb-8">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-serif font-bold text-brand-900 mb-8">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/category/${encodeURIComponent(cat)}`}
              className="category-tile"
            >
              <span className="text-lg font-serif font-semibold">{cat}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}