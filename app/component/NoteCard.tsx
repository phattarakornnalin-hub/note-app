import Link from "next/link";
import type { Note } from "../types/note";

type NoteCardProps = {
  note: Note;
};

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <Link
      href={note.pdfUrl}
      target="_blank"
      className="group block"
    >
      <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {note.title}
            </h2>

            <p className="mt-1 text-xs text-zinc-400">
              {note.createdAt}
            </p>
          </div>

          <span className="text-zinc-400 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          {note.content}
        </p>

        {/* Themes */}
        <div className="mt-4 flex flex-wrap gap-2">
          {note.themes.map((theme) => (
            <span
              key={theme}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {theme}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
