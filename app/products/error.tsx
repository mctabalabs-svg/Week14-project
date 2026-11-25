'use client';

export default function ProductsError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-2xl font-serif font-bold text-brand-900 mb-4">
        Something went wrong loading products.
      </h1>
      <p className="text-gray-600 mb-6">Please try again or come back later.</p>
      <button
        onClick={() => reset()}
        className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
      >
        Try Again
      </button>
    </div>
  );
}