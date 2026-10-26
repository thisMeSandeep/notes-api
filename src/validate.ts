export type NewNote = { title: string; body: string };
export function validateNote(input: unknown): NewNote {
  const note = input as Partial<NewNote> | null;
  if (typeof note?.title !== "string" || note.title.trim() === "") {
    throw new Error("title is required");
  }
  if (typeof note.body !== "string") {
    throw new Error("body must be a string");
  }
  return { title: note.title.trim(), body: note.body };
}
