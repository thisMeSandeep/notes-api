import { test } from "node:test";
import assert from "node:assert/strict";
import { validateNote } from "../../src/validate.js";
test("accepts a note and trims the title", () => {
  const note = validateNote({ title: " Buy milk ", body: "2 liters" });
  assert.deepEqual(note, { title: "Buy milk", body: "2 liters" });
});
test("rejects an empty title", () => {
  const bad = { title: " ", body: "x" };
  assert.throws(() => validateNote(bad), /title is required/);
});
