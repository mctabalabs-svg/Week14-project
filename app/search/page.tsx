import { searchProducts, getCategories } from "@/lib/products";
import ProductCard from "@/components/product-card";
import Link from "next/link";
import type { Metadata } from "next";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const q = (await searchParams).q ?? "";
  return {
    title: q ? `Search: "${q}" — Textbook Catalogue` : "Search — Textbook Catalogue",
    description: q
      ? `Search results for "${q}" in our second-hand textbook catalogue.`
      : "Search our collection of second-hand textbooks and literature.",
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const q = (await searchParams).q ?? "";
  const categories = await getCategories();
  const results = q ? await searchProducts(q) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-serif font-bold text-brand-900 mb-8">
        Search
      </h1>
      <form method="get" action="/search" className="mb-8">
        <label htmlFor="search-input" className="sr-only">Search books</label>
        <div className="flex gap-2">
          <input
            id="search-input"
            type="search"
            name="q"
            defaultValue={q}
            placeholder="Search by title or description..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
          <button
            type="submit"
            className="bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Search
          </button>
        </div>
      </form>

      {q && (
        <div className="mb-8">
          <p className="text-gray-600">
            {results.length} result{results.length !== 1 ? "s" : ""} for{" "}
            <span className="font-medium text-brand-900">&quot;{q}&quot;</span>
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/category/${encodeURIComponent(cat)}`}
                className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-brand-100 hover:text-brand-800 transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      )}

      {results.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : q ? (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">
            No books found matching &quot;{q}&quot;.
          </p>
          <p className="text-gray-500 mt-2">
            Try a different search term or browse{" "}
            <Link href="/products" className="text-brand-600 underline">
              all books
            </Link>.
          </p>
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">
            Enter a search term to find books in our catalogue.
          </p>
        </div>
      )}
    </div>
  );
}