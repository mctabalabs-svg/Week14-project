import { sql } from "../lib/db";

async function main() {
  await sql`create table if not exists products (
    id serial primary key,
    name varchar(255) not null,
    slug varchar(255) unique not null,
    price_cents integer not null,
    description text not null,
    image varchar(500) not null,
    stock integer not null default 0,
    category varchar(100) not null
  )`;

  const products = [
    {
      name: "Introduction to Biology",
      slug: "introduction-to-biology",
      price_cents: 2500,
      description: "A comprehensive introductory textbook covering cell biology, genetics, and ecology. Previously owned by a university student in excellent condition with minimal highlighting.",
      image: "https://picsum.photos/seed/biology-book/600/400",
      stock: 3,
      category: "Textbooks",
    },
    {
      name: "Calculus: Early Transcendentals",
      slug: "calculus-early-transcendentals",
      price_cents: 3000,
      description: "Standard calculus textbook with thorough explanations of limits, derivatives, and integrals. Previous owner has done most exercises — great condition.",
      image: "https://picsum.photos/seed/calculus-book/600/400",
      stock: 5,
      category: "Textbooks",
    },
    {
      name: "World History: Patterns of Interaction",
      slug: "world-history-patterns",
      price_cents: 2000,
      description: "Complete world history textbook covering ancient civilizations through modern times. Clean pages, no markings, softcover.",
      image: "https://picsum.photos/seed/history-book/600/400",
      stock: 2,
      category: "Textbooks",
    },
    {
      name: "Organic Chemistry Principles",
      slug: "organic-chemistry-principles",
      price_cents: 3500,
      description: "Detailed organic chemistry text with mechanism illustrations and practice problems. Spine is slightly worn but pages are pristine.",
      image: "https://picsum.photos/seed/chem-book/600/400",
      stock: 4,
      category: "Textbooks",
    },
    {
      name: "Physics for Scientists and Engineers",
      slug: "physics-scientists-engineers",
      price_cents: 3200,
      description: "University-level physics textbook with worked examples and chapter summaries. Previous owner used this for their engineering degree.",
      image: "https://picsum.photos/seed/physics-book/600/400",
      stock: 1,
      category: "Textbooks",
    },
    {
      name: "Encyclopedia of Science and Technology",
      slug: "encyclopedia-science-technology",
      price_cents: 8000,
      description: "Comprehensive 12-volume encyclopedia set covering all major scientific disciplines. Leather-bound collectors edition in great shape.",
      image: "https://picsum.photos/seed/encyclopedia-set/600/400",
      stock: 1,
      category: "Reference & Encyclopedias",
    },
    {
      name: "Python Programming: The Complete Guide",
      slug: "python-programming-guide",
      price_cents: 4000,
      description: "Thorough Python programming reference book covering data structures, OOP, and web development. Previous owner took good care of this copy.",
      image: "https://picsum.photos/seed/python-book/600/400",
      stock: 6,
      category: "Reference & Encyclopedias",
    },
    {
      name: "The Great Gatsby — First Edition Reprint",
      slug: "great-gatsby-reprint",
      price_cents: 5500,
      description: "Beautiful reprint of Fitzgerald's classic novel with original illustrations. Collectible condition with dust jacket intact.",
      image: "https://picsum.photos/seed/gatsby-book/600/400",
      stock: 2,
      category: "Fiction & Literature",
    },
    {
      name: "Modern Poetry Anthology",
      slug: "modern-poetry-anthology",
      price_cents: 1200,
      description: "Curated collection of 20th and 21st century poetry from established and emerging poets. Perfect for literature students and enthusiasts.",
      image: "https://picsum.photos/seed/poetry-book/600/400",
      stock: 8,
      category: "Fiction & Literature",
    },
    {
      name: "Shakespeare Complete Works",
      slug: "shakespeare-complete-works",
      price_cents: 6000,
      description: "Full collection of Shakespeare plays and sonnets in authoritative scholarly edition. Cloth-bound hardcover, very good condition.",
      image: "https://picsum.photos/seed/shakespeare-book/600/400",
      stock: 1,
      category: "Fiction & Literature",
    },
    {
      name: "Children's Atlas of the World",
      slug: "childrens-atlas-world",
      price_cents: 3000,
      description: "Colorful illustrated atlas designed for young readers. Features maps, flags, animals, and cultural facts from every continent.",
      image: "https://picsum.photos/seed/childrens-atlas/600/400",
      stock: 4,
      category: "Children's Books",
    },
    {
      name: "Kids STEM Activity Workbook Set",
      slug: "kids-stem-workbook-set",
      price_cents: 1800,
      description: "Three-book workbook set covering science, technology, engineering, and math for ages 8-12. All pages are clean and unused.",
      image: "https://picsum.photos/seed/stem-workbook/600/400",
      stock: 7,
      category: "Children's Books",
    },
    {
      name: "Harry Potter Paperback Box Set",
      slug: "harry-potter-box-set",
      price_cents: 4500,
      description: "Complete Harry Potter series in paperback format. Set includes all seven books in a collectible box. Read once, very good condition.",
      image: "https://picsum.photos/seed/harry-potter/600/400",
      stock: 2,
      category: "Fiction & Literature",
    },
    {
      name: "Encyclopedia Britannica 2023 Edition",
      slug: "encyclopedia-britannica",
      price_cents: 12000,
      description: "Latest edition of the world's most renowned encyclopedia. 32 volumes covering every field of knowledge. Collector-grade condition.",
      image: "https://picsum.photos/seed/britannica-set/600/400",
      stock: 1,
      category: "Reference & Encyclopedias",
    },
    {
      name: "Art of Computer Programming Vol. 1",
      slug: "art-computer-programming-vol1",
      price_cents: 7000,
      description: "Donald Knuth's landmark text on computer programming. Hardcover with dust jacket. A must-have for any serious programmer or CS student.",
      image: "https://picsum.photos/seed/knuth-book/600/400",
      stock: 2,
      category: "Reference & Encyclopedias",
    },
  ];

  for (const p of products) {
    await sql`insert into products (name, slug, price_cents, description, image, stock, category) values (${p.name}, ${p.slug}, ${p.price_cents}, ${p.description}, ${p.image}, ${p.stock}, ${p.category}) on conflict (slug) do nothing`;
  }

  console.log(`Inserted ${products.length} products`);
  await sql.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
