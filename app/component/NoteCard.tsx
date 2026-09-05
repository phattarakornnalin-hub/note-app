import Link from "next/link";
import type { Note } from "../types/note";

type NoteCardProps = {
  note: Note;
};

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <Link href={`/notes/${note.id}`} className="block">
      <article className="cursor-pointer rounded-2xl border border-zinc-200 p-5 transition hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-zinc-700">
        <div className="mb-2 flex items-start justify-between gap-4">
          <h2 className="font-semibold text-zinc-900 dark:text-white">
            {note.title}
          </h2>

          <span className="shrink-0 text-xs text-zinc-400">
            {note.createdAt}
          </span>
        </div>

        <p className="mb-4 line-clamp-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          {note.content}
        </p>

        <div className="flex flex-wrap gap-2">
          {note.themes.map((theme) => (
            <span
              key={theme}
              className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400"
            >
              #{theme}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}