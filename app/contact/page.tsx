export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-brand-900 mb-6">Contact Us</h1>
      <div className="prose prose-brand max-w-none text-gray-700 leading-relaxed">
        <p>
          Have a question about a book, want to suggest a title, or ready to
          buy? Reach out to us on WhatsApp for the fastest response.
        </p>
        <div className="mt-6 p-4 bg-brand-50 rounded-lg">
          <p className="font-medium text-brand-800">WhatsApp: +1 (234) 567-890</p>
          <p className="text-sm text-brand-600 mt-1">
            Available Monday — Saturday, 9:00 AM to 6:00 PM
          </p>
        </div>
        <p className="mt-6">
          You can also browse our full catalogue at{" "}
          <a href="/products" className="text-brand-600 underline">
            /products
          </a>
          .
        </p>
      </div>
    </div>
  );
}