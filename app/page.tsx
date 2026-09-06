"use client";

import { useMemo, useState } from "react";
import NoteCard from "./component/NoteCard";
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
    <main className="min-h-screen bg-[#0a0a0a] p-4 selection:bg-[#ff006e] selection:text-white sm:p-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-14 flex animate-[fadeInDown_0.6s_ease-out] flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="relative">
            <span className="absolute left-[4px] top-[4px] text-6xl font-black uppercase tracking-tighter text-[#ff006e] sm:text-8xl">
              Youth HIM Thailand Note
            </span>

            <h1 className="relative text-6xl font-black uppercase tracking-tighter text-white sm:text-8xl">
              Youth HIM Thailand Note
            </h1>

            <p className="mt-3 text-lg font-black uppercase tracking-[0.2em] text-[#ffbe0b]">
              Find what you learned
            </p>

            <div className="mt-4 h-2 w-32 -rotate-2 bg-[#06ffa5] shadow-[4px_3px_0_#000] transition-all duration-300 hover:w-48 hover:rotate-1" />
          </div>

          <button
            type="button"
            className="group inline-flex animate-[popIn_0.5s_ease-out_0.2s_both] items-center gap-2 border-2 border-black bg-[#ff006e] px-6 py-3 text-base font-black uppercase tracking-wider text-white shadow-[4px_4px_0_#000] transition-all hover:-translate-y-1 hover:rotate-1 hover:shadow-[7px_7px_0_#000] active:translate-y-0 active:rotate-0 active:shadow-[2px_2px_0_#000]"
          >
            <span className="text-xl transition-transform duration-300 group-hover:rotate-90">
              +
            </span>
            New Note
          </button>
        </header>

        {/* Search */}
        <section className="mb-10 animate-[fadeInUp_0.6s_ease-out_0.15s_both]">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="SEARCH NOTES..."
              className="w-full border-2 border-black bg-[#141414] py-4 pl-14 pr-5 text-lg font-bold uppercase tracking-wider text-white placeholder:text-zinc-600 shadow-[4px_4px_0_#ffbe0b] outline-none transition-all duration-200 focus:-translate-y-1 focus:shadow-[7px_7px_0_#ffbe0b]"
            />

            <svg
              className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-[#ffbe0b] transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </section>

        {/* Themes */}
        <section className="mb-12 animate-[fadeInUp_0.6s_ease-out_0.25s_both]">
          <p className="mb-4 text-xl font-black uppercase tracking-widest text-[#3a86ff]">
            Themes
          </p>

          <div className="flex flex-wrap gap-3">
            {themes.map((theme, index) => {
              const isActive = selectedTheme === theme;

              return (
                <button
                  key={theme}
                  type="button"
                  onClick={() => setSelectedTheme(theme)}
                  style={{
                    animationDelay: `${index * 70}ms`,
                  }}
                  className={`animate-[popIn_0.4s_ease-out_both] border-2 border-black px-5 py-2.5 text-sm font-black uppercase tracking-wider shadow-[3px_3px_0_#000] transition-all duration-200 hover:-translate-y-1 hover:rotate-1 hover:shadow-[5px_5px_0_#000] ${
                    isActive
                      ? "bg-[#ffbe0b] text-black"
                      : "bg-white text-black hover:bg-[#ff006e] hover:text-white"
                  }`}
                >
                  {theme}
                </button>
              );
            })}
          </div>
        </section>

        {/* Result Count */}
        <div className="mb-8 flex animate-[fadeIn_0.5s_ease-out] items-center justify-between border-b-2 border-dashed border-zinc-700 pb-4">
          <p className="text-lg font-black uppercase tracking-wider text-[#06ffa5]">
            {filteredNotes.length}{" "}
            {filteredNotes.length === 1 ? "Note" : "Notes"}
          </p>

          {(search || selectedTheme !== "All") && (
            <button
              type="button"
              onClick={clearFilters}
              className="animate-[popIn_0.3s_ease-out] text-sm font-black uppercase tracking-wider text-[#ff006e] underline decoration-2 underline-offset-4 transition-all duration-200 hover:scale-110 hover:text-white"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Notes */}
        {filteredNotes.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNotes.map((note, index) => (
              <div
                key={note.pdfUrl}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                className="animate-[cardIn_0.55s_cubic-bezier(0.22,1,0.36,1)_both]"
              >
                <NoteCard note={note} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex animate-[popIn_0.4s_ease-out] flex-col items-center justify-center border-2 border-dashed border-zinc-700 py-24 text-center">
            <p className="mb-3 text-5xl font-black uppercase tracking-tighter text-[#ff006e] drop-shadow-[3px_3px_0_#000]">
              No Results
            </p>

            <p className="mb-8 text-base font-bold uppercase tracking-widest text-zinc-500">
              Try another search or theme
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="border-2 border-black bg-[#3a86ff] px-8 py-3 text-sm font-black uppercase tracking-wider text-white shadow-[4px_4px_0_#000] transition-all duration-200 hover:-translate-y-1 hover:rotate-1 hover:shadow-[6px_6px_0_#000] active:translate-y-0"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(35px) rotate(-3deg) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(0) scale(1);
          }
        }
      `}</style>
    </main>
  );
}