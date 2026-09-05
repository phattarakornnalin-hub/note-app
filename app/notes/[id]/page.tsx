import { notFound } from "next/navigation";

import { notes } from "../../data/notes";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NotePage({ params }: Props) {
  const { id } = await params;

  const note = notes.find(
    (note) => note.id === Number(id)
  );

  if (!note) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto min-h-screen w-full max-w-3xl bg-white px-6 py-10 dark:bg-zinc-950 sm:px-10">

        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {note.createdAt}
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-zinc-900 dark:text-white">
          {note.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {note.themes.map((theme) => (
            <span
              key={theme}
              className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {theme}
            </span>
          ))}
        </div>

        <p className="mt-8 leading-7 text-zinc-600 dark:text-zinc-300">
          {note.content}
        </p>

      </div>
    </main>
  );
}