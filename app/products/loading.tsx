import { getAllProducts, getCategories } from "@/lib/products";
import ProductCard from "@/components/product-card";
import Link from "next/link";

export default async function ProductsLoading() {
  const categories = await getCategories();
  const products = await getAllProducts();
  const skeletonCount = products.length || 8;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="h-8 bg-gray-200 rounded w-48 mb-8 animate-pulse" />
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
          <div className="h-6 bg-gray-200 rounded w-24 mb-4 animate-pulse" />
          <ul className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i} className="h-4 bg-gray-200 rounded animate-pulse" />
            ))}
          </ul>
        </aside>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: skeletonCount }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden animate-pulse">
              <div className="aspect-[3/2] bg-gray-200" />
              <div className="p-4 space-y-3">
                <div className="h-3 bg-gray-200 rounded w-20" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}