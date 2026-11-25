import { getProductBySlug } from "@/lib/products";

export const runtime = "nodejs";

export default async function OpgImage({ params }: { params: Promise<{ slug: string }> }) {
  const product = await getProductBySlug((await params).slug);

  const name = product?.name ?? "Book";
  const price = product
    ? `$${(product.price_cents / 100).toFixed(2)}`
    : "";
  const category = product?.category ?? "";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1a633b"/>
        <stop offset="100%" style="stop-color:#237d4b"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)" rx="12"/>
    <rect x="40" y="40" width="1120" height="550" fill="white" opacity="0.95" rx="8"/>
    <text x="600" y="100" text-anchor="middle" font-family="Georgia, serif" font-size="24" fill="#1a633b" font-weight="bold">📚</text>
    <text x="600" y="140" text-anchor="middle" font-family="Georgia, serif" font-size="36" fill="#1a2332" font-weight="bold">${name}</text>
    <text x="600" y="190" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#d2691e" font-weight="600">${price}</text>
    <text x="600" y="230" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#6b7280">${category}</text>
    <text x="600" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af">Second-Hand Textbooks Catalogue</text>
  </svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}