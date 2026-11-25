import { getAllProducts, getCategories } from "@/lib/products";
import ProductCard from "@/components/product-card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Books — Textbook Catalogue",
  description: "Browse our full collection of second-hand textbooks, encyclopedias, and literature.",
};

export default async function ProductsPage() {
  const products = await getAllProducts();
  const categories = await getCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-serif font-bold text-brand-900 mb-8">
        Full Catalogue
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0">
          <h2 className="text-lg font-semibold text-brand-800 mb-4">Categories</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/products" className="text-brand-600 hover:underline font-medium">
                All Books
              </Link>
            </li>
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  href={`/category/${encodeURIComponent(cat)}`}
                  className="text-gray-600 hover:text-brand-600 hover:underline block"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}