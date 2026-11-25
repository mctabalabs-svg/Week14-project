import { sql } from "@/lib/db";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price_cents: number;
  description: string;
  image: string;
  stock: number;
  category: string;
}

const CATEGORIES = ["Textbooks", "Reference & Encyclopedias", "Children's Books", "Fiction & Literature"];
const SAMPLE_PRODUCTS: Product[] = [
  { id: 1, name: "Introduction to Biology", slug: "introduction-to-biology", price_cents: 2500, description: "A comprehensive introduction to cell biology, genetics, and ecology. A clean, carefully kept second-hand copy.", image: "https://picsum.photos/seed/biology-book/600/400", stock: 3, category: "Textbooks" },
  { id: 2, name: "Calculus: Early Transcendentals", slug: "calculus-early-transcendentals", price_cents: 3000, description: "A university calculus text with clear explanations of limits, derivatives, integrals, and worked examples.", image: "https://picsum.photos/seed/calculus-book/600/400", stock: 5, category: "Textbooks" },
  { id: 3, name: "World History: Patterns of Interaction", slug: "world-history-patterns", price_cents: 2000, description: "A world history survey from ancient civilizations to the modern era. Clean pages and a sturdy softcover.", image: "https://picsum.photos/seed/history-book/600/400", stock: 2, category: "Textbooks" },
  { id: 4, name: "Organic Chemistry Principles", slug: "organic-chemistry-principles", price_cents: 3500, description: "A detailed organic chemistry text with mechanism illustrations and practice problems.", image: "https://picsum.photos/seed/chem-book/600/400", stock: 4, category: "Textbooks" },
  { id: 5, name: "Physics for Scientists and Engineers", slug: "physics-scientists-engineers", price_cents: 3200, description: "University-level physics with worked examples, chapter summaries, and a gently worn cover.", image: "https://picsum.photos/seed/physics-book/600/400", stock: 1, category: "Textbooks" },
  { id: 6, name: "Encyclopedia of Science and Technology", slug: "encyclopedia-science-technology", price_cents: 8000, description: "A twelve-volume reference set spanning the major scientific disciplines.", image: "https://picsum.photos/seed/encyclopedia-set/600/400", stock: 1, category: "Reference & Encyclopedias" },
  { id: 7, name: "Python Programming: The Complete Guide", slug: "python-programming-guide", price_cents: 4000, description: "A practical Python reference covering data structures, object-oriented programming, and web development.", image: "https://picsum.photos/seed/python-book/600/400", stock: 6, category: "Reference & Encyclopedias" },
  { id: 8, name: "The Great Gatsby: Illustrated Edition", slug: "great-gatsby-reprint", price_cents: 5500, description: "A handsome illustrated edition of Fitzgerald's classic, complete with its dust jacket.", image: "https://picsum.photos/seed/gatsby-book/600/400", stock: 2, category: "Fiction & Literature" },
  { id: 9, name: "Modern Poetry Anthology", slug: "modern-poetry-anthology", price_cents: 1200, description: "A curated collection of twentieth- and twenty-first-century poetry for readers and students.", image: "https://picsum.photos/seed/poetry-book/600/400", stock: 8, category: "Fiction & Literature" },
  { id: 10, name: "Shakespeare Complete Works", slug: "shakespeare-complete-works", price_cents: 6000, description: "The complete plays and sonnets in a cloth-bound scholarly edition.", image: "https://picsum.photos/seed/shakespeare-book/600/400", stock: 1, category: "Fiction & Literature" },
  { id: 11, name: "Children's Atlas of the World", slug: "childrens-atlas-world", price_cents: 3000, description: "An illustrated atlas full of maps, flags, wildlife, and cultural facts for young readers.", image: "https://picsum.photos/seed/childrens-atlas/600/400", stock: 4, category: "Children's Books" },
  { id: 12, name: "Kids STEM Activity Workbook Set", slug: "kids-stem-workbook-set", price_cents: 1800, description: "Three activity workbooks introducing science, technology, engineering, and math for ages 8 to 12.", image: "https://picsum.photos/seed/stem-workbook/600/400", stock: 7, category: "Children's Books" },
  { id: 13, name: "Fantasy Adventure Box Set", slug: "fantasy-adventure-box-set", price_cents: 4500, description: "A complete seven-book fantasy series in paperback, read once and kept in very good condition.", image: "https://picsum.photos/seed/fantasy-box-set/600/400", stock: 2, category: "Fiction & Literature" },
  { id: 14, name: "Encyclopedia Britannica 2023 Edition", slug: "encyclopedia-britannica", price_cents: 12000, description: "A thirty-two-volume collector set spanning a wide range of subjects.", image: "https://picsum.photos/seed/britannica-set/600/400", stock: 1, category: "Reference & Encyclopedias" },
  { id: 15, name: "The Art of Computer Programming, Vol. 1", slug: "art-computer-programming-vol1", price_cents: 7000, description: "Donald Knuth's landmark hardcover reference for students and serious programmers.", image: "https://picsum.photos/seed/knuth-book/600/400", stock: 2, category: "Reference & Encyclopedias" },
];

export async function getAllProducts(): Promise<Product[]> {
  try {
    return await sql<Product[]>`select id, name, slug, price_cents, description, image, stock, category from products order by id asc`;
  } catch (error) {
    console.warn("Product database unavailable; using the sample catalogue.");
    return SAMPLE_PRODUCTS;
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const rows = await sql<Product[]>`select id, name, slug, price_cents, description, image, stock, category from products where slug = ${slug}`;
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.warn("Product database unavailable; using the sample catalogue.");
    return SAMPLE_PRODUCTS.find((product) => product.slug === slug) ?? null;
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    return await sql<Product[]>`select id, name, slug, price_cents, description, image, stock, category from products where category = ${category} order by id asc`;
  } catch (error) {
    console.warn("Product database unavailable; using the sample catalogue.");
    return SAMPLE_PRODUCTS.filter((product) => product.category === category);
  }
}

export async function getCategories(): Promise<string[]> {
  return CATEGORIES;
}

export async function searchProducts(query: string): Promise<Product[]> {
  try {
    return await sql<Product[]>`select id, name, slug, price_cents, description, image, stock, category from products where name ilike ${`%${query}%`} or description ilike ${`%${query}%`} order by id asc`;
  } catch (error) {
    console.warn("Product database unavailable; using the sample catalogue.");
    const normalizedQuery = query.toLocaleLowerCase();
    return SAMPLE_PRODUCTS.filter((product) =>
      `${product.name} ${product.description}`.toLocaleLowerCase().includes(normalizedQuery),
    );
  }
}
