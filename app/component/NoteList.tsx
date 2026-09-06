import type { Note } from "../types/note";
import NoteCard from "./NoteCard";

type NoteListProps = {
  notes: Note[];
};

export default function NoteList({ notes }: NoteListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}