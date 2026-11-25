export default function ProductsNotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-2xl font-serif font-bold text-brand-900 mb-4">
        Product not found.
      </h1>
      <p className="text-gray-600 mb-6">The product you are looking for does not exist.</p>
      <a href="/products" className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
        Back to Catalogue
      </a>
    </div>
  );
}