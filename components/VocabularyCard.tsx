import type { VocabularyItem } from "@/types/vocabulary";

type VocabularyCardProps = {
  item: VocabularyItem;
};

export default function VocabularyCard({ item }: VocabularyCardProps) {
  return (
    <article className="rounded-lg border border-sumi/10 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-matcha/40 dark:border-white/10 dark:bg-sumi/80">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-matcha dark:text-sakura">
            {item.category}
          </p>
          <h2 className="mt-1 text-3xl font-bold text-sumi dark:text-washi">
            {item.kanji}
          </h2>
        </div>
        <span className="rounded-md bg-sakura/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-sumi dark:bg-sakura/20 dark:text-washi">
          {item.romaji}
        </span>
      </div>

      <dl className="space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-sumi/60 dark:text-washi/60">Hiragana</dt>
          <dd className="text-lg text-sumi dark:text-washi">{item.hiragana}</dd>
        </div>
        <div>
          <dt className="font-semibold text-sumi/60 dark:text-washi/60">Meaning</dt>
          <dd className="text-lg text-sumi dark:text-washi">{item.meaning}</dd>
        </div>
        <div>
          <dt className="font-semibold text-sumi/60 dark:text-washi/60">Example</dt>
          <dd className="text-base text-sumi dark:text-washi">{item.example}</dd>
        </div>
      </dl>
    </article>
  );
}
