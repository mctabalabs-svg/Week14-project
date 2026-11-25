import { getProductsByCategory, getCategories } from "@/lib/products";
import ProductCard from "@/components/product-card";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ cat: string }>;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((cat) => ({ cat }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cat = decodeURIComponent((await params).cat);
  return {
    title: `${cat} — Textbook Catalogue`,
    description: `Browse our collection of second-hand ${cat.toLowerCase()}.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const category = decodeURIComponent((await params).cat);
  const products = await getProductsByCategory(category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link href="/products" className="text-brand-600 hover:underline text-sm font-medium">
        &larr; Back to Catalogue
      </Link>
      <h1 className="text-3xl font-serif font-bold text-brand-900 mt-4 mb-8">
        {category}
      </h1>
      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">No books found in this category yet.</p>
          <Link href="/products" className="inline-block mt-4 bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
            View All Books
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}