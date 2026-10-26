import { test, after } from "node:test";
import assert from "node:assert/strict";
import { initDb, insertNote, listNotes, pool } from "../../src/db.js";
after(() => pool.end());
test("a saved note appears in the list", async () => {
  await initDb();
  const saved = await insertNote({ title: "db test", body: "saved" });
  const notes = await listNotes();
  assert.ok(notes.some((n) => n.id === saved.id));
});
