import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata = {
  title: "Textbook Catalogue — Second-Hand Books Marketplace",
  description: "Browse our curated collection of second-hand textbooks, encyclopedias, and literature. Affordable, quality books for students and collectors.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Textbook Catalogue",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream-50 text-gray-900 font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}