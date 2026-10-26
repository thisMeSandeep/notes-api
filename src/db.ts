import pg from "pg";
import type { NewNote } from "./validate.js";
export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
export async function initDb(): Promise<void> {
  await pool.query(
    `CREATE TABLE IF NOT EXISTS notes (
id serial PRIMARY KEY, title text NOT NULL, body text NOT NULL)`,
  );
}
export async function insertNote(note: NewNote) {
  const result = await pool.query(
    "INSERT INTO notes (title, body) VALUES ($1, $2) RETURNING *",
    [note.title, note.body],
  );
  return result.rows[0];
}
export async function listNotes() {
  const result = await pool.query("SELECT * FROM notes ORDER BY id");
  return result.rows;
}
