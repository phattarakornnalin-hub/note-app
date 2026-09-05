type EmptyStateProps = {
  onClear: () => void;
};

export default function EmptyState({
  onClear,
}: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-zinc-300 px-6 py-16 text-center dark:border-zinc-700">
      <div className="mb-3 text-3xl">🔎</div>

      <h2 className="font-medium text-zinc-900 dark:text-white">
        No notes found
      </h2>

      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        Try another search or choose a different theme.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="mt-4 text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-white"
      >
        Clear filters
      </button>
    </div>
  );
}