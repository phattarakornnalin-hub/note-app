type ThemeFilterProps = {
  themes: string[];
  selectedTheme: string;
  onSelect: (theme: string) => void;
};

export default function ThemeFilter({
  themes,
  selectedTheme,
  onSelect,
}: ThemeFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {themes.map((theme) => {
        const isSelected = selectedTheme === theme;

        return (
          <button
            key={theme}
            type="button"
            onClick={() => onSelect(theme)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
              isSelected
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900"
            }`}
          >
            {theme}
          </button>
        );
      })}
    </div>
  );
}