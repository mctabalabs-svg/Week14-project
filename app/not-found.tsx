export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="text-3xl font-serif font-bold text-brand-900 mb-4">
          Page not found.
        </h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for does not exist.
        </p>
        <a href="/" className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
          Go Back Home
        </a>
      </div>
    </main>
  );
}