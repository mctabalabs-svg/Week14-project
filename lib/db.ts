import postgres from "postgres";

const url = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/catalogue";

export const sql = postgres(url, {
  max: 10,
  idle_timeout: 30,
  connect_timeout: 10,
});
