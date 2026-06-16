import { Suspense } from "react";
import VocabularyExplorer from "@/components/VocabularyExplorer";
import { categories, vocabulary } from "@/lib/vocabulary";

export default function VocabularyPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-matcha dark:text-sakura">
          Vocabulary
        </p>
        <h1 className="mt-2 text-4xl font-bold text-sumi dark:text-washi">
          Find the words you need in Japan
        </h1>
        <p className="mt-3 max-w-3xl text-sumi/70 dark:text-washi/70">
          Search kanji, hiragana, romaji, English meanings, and examples, or
          filter by daily-life category.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="rounded-lg border border-sumi/10 bg-white p-6 text-sumi shadow-soft dark:border-white/10 dark:bg-sumi/80 dark:text-washi">
            Loading vocabulary...
          </div>
        }
      >
        <VocabularyExplorer categories={categories} vocabulary={vocabulary} />
      </Suspense>
    </div>
  );
}
