import { getProductBySlug, getAllProducts } from "@/lib/products";
import WhatsappButton from "@/components/whatsapp-button";
import type { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await getProductBySlug((await params).slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — Textbook Catalogue`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website",
      images: [
        {
          url: `${process.env.BASE_URL || "http://localhost:3000"}/products/${product.slug}/opg-image`,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const product = await getProductBySlug((await params).slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-serif font-bold text-brand-900 mb-4">
          Book not found.
        </h1>
        <p className="text-gray-600 mb-6">The product you are looking for does not exist or has been removed.</p>
        <Link href="/products" className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
          Back to Catalogue
        </Link>
      </div>
    );
  }

  const price = (product.price_cents / 100).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <a href="/products" className="text-brand-600 hover:underline text-sm font-medium">
        &larr; Back to Catalogue
      </a>
      <div className="mt-6 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-brand-100 text-brand-800 self-start">
            {product.category}
          </span>
          <h1 className="text-3xl font-serif font-bold text-brand-900 mt-4">
            {product.name}
          </h1>
          <p className="mt-2 text-2xl font-bold text-brand-600">${price}</p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {product.description}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-medium">
              {product.stock > 0 ? (
                <span className="text-green-600">{product.stock} in stock</span>
              ) : (
                <span className="text-red-500">Out of stock</span>
              )}
            </span>
          </div>
          <div className="mt-8">
            <WhatsappButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}