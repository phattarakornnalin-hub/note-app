import Link from "next/link";
import type { Note } from "../types/note";

type NoteCardProps = {
  note: Note;
  index: number;
};

const CARD_COLORS = [
  "bg-[#ff006e]",
  "bg-[#fb5607]",
  "bg-[#ffbe0b]",
  "bg-[#8338ec]",
  "bg-[#3a86ff]",
  "bg-[#06ffa5]",
];

export default function NoteCard({
  note,
  index,
}: NoteCardProps) {
  const color =
    CARD_COLORS[index % CARD_COLORS.length];

  const rotation =
    index % 2 === 0
      ? "-rotate-1"
      : "rotate-1";

  return (
    <Link
      href={note.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <article
        className={`group relative h-full cursor-pointer border-2 border-black p-6 shadow-[5px_5px_0_#000] transition-all duration-200 hover:-translate-y-2 hover:rotate-0 hover:shadow-[9px_9px_0_#000] ${color} ${rotation}`}
      >
        {/* Arrow */}
        <div className="absolute right-4 top-4 text-3xl font-black text-black transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">
          ↗
        </div>

        {/* Title */}
        <h2 className="mb-3 pr-8 text-2xl font-black uppercase leading-none tracking-tighter text-black">
          {note.title}
        </h2>

        {/* Date */}
        <p className="mb-4 text-xs font-black uppercase tracking-wider text-black/60">
          {note.createdAt}
        </p>

        {/* Description */}
        <p className="mb-6 text-sm font-bold leading-relaxed text-black/80">
          {note.content}
        </p>

        {/* Themes */}
        <div className="flex flex-wrap gap-2">
          {note.themes.map((theme) => (
            <span
              key={theme}
              className="border-2 border-black bg-white px-2 py-1 text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0_#000]"
            >
              {theme}
            </span>
          ))}
        </div>

        {/* Open */}
        <div className="mt-6 inline-block -rotate-2 border-2 border-black bg-black px-3 py-1 text-xs font-black uppercase tracking-wider text-white transition-transform group-hover:rotate-0">
          Open PDF ↗
        </div>
      </article>
    </Link>
  );
}