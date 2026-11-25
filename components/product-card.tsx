import Link from "next/link";
import type { Product } from "@/lib/products";

const CATEGORY_COLORS: Record<string, string> = {
  Textbooks: "bg-brand-100 text-brand-800",
  "Reference & Encyclopedias": "bg-blue-100 text-blue-800",
  "Children's Books": "bg-orange-100 text-orange-800",
  "Fiction & Literature": "bg-purple-100 text-purple-800",
};

export default function ProductCard({ product }: { product: Product }) {
  const colorClass = CATEGORY_COLORS[product.category] ?? "bg-gray-100 text-gray-800";

  return (
    <Link href={`/products/${product.slug}`} className="product-card block">
      <div className="aspect-[3/2] bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${colorClass}`}>
          {product.category}
        </span>
        <h3 className="mt-2 font-serif font-semibold text-base leading-tight line-clamp-2">{product.name}</h3>
        <p className="mt-1 font-bold text-brand-600">${(product.price_cents / 100).toFixed(2)}</p>
        {product.stock > 0 ? (
          <p className="text-xs text-green-600 mt-1">{product.stock} in stock</p>
        ) : (
          <p className="text-xs text-red-500 mt-1">Out of stock</p>
        )}
      </div>
    </Link>
  );
}