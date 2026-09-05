"use client";

import { useMemo, useState } from "react";

import SearchBar from "./component/SearchBar";
import ThemeFilter from "./component/ThemeFilter";
import NoteList from "./component/NoteList";
import EmptyState from "./component/EmptyState";

import { notes } from "./data/notes";

const themes = [
  "All",
  "Next.js",
  "React",
  "TypeScript",
  "Database",
  "Backend",
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("All");

  const filteredNotes = useMemo(() => {
    const query = search.toLowerCase().trim();

    return notes.filter((note) => {
      const matchesTheme =
        selectedTheme === "All" ||
        note.themes.includes(selectedTheme);

      const matchesSearch =
        query === "" ||
        note.title.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query) ||
        note.themes.some((theme) =>
          theme.toLowerCase().includes(query)
        );

      return matchesTheme && matchesSearch;
    });
  }, [search, selectedTheme]);

  const clearFilters = () => {
    setSearch("");
    setSelectedTheme("All");
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto min-h-screen w-full max-w-5xl bg-white px-6 py-10 dark:bg-zinc-950 sm:px-10">

        {/* Header */}
        <header className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              My Notes
            </h1>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Find what you learned
            </p>
          </div>

          <button
            type="button"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-black"
          >
            + New Note
          </button>
        </header>

        {/* Search */}
        <section className="mb-6">
          <SearchBar
            value={search}
            onChange={setSearch}
          />
        </section>

        {/* Themes */}
        <section className="mb-8">
          <p className="mb-3 text-sm font-medium text-zinc-900 dark:text-white">
            Themes
          </p>

          <ThemeFilter
            themes={themes}
            selectedTheme={selectedTheme}
            onSelect={setSelectedTheme}
          />
        </section>

        {/* Result */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {filteredNotes.length}{" "}
            {filteredNotes.length === 1 ? "note" : "notes"}
          </p>

          {(search || selectedTheme !== "All") && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm text-zinc-500 underline underline-offset-4"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Notes */}
        {filteredNotes.length > 0 ? (
          <NoteList notes={filteredNotes} />
        ) : (
          <EmptyState onClear={clearFilters} />
        )}
      </div>
    </main>
  );
}