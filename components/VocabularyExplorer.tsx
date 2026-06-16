"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import VocabularyCard from "@/components/VocabularyCard";
import type { VocabularyCategory, VocabularyItem } from "@/types/vocabulary";

type VocabularyExplorerProps = {
  categories: VocabularyCategory[];
  vocabulary: VocabularyItem[];
};

export default function VocabularyExplorer({
  categories,
  vocabulary,
}: VocabularyExplorerProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const initialCategory = categories.includes(categoryParam as VocabularyCategory)
    ? (categoryParam as VocabularyCategory)
    : "All";

  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState<"All" | VocabularyCategory>(initialCategory);

  const filteredVocabulary = useMemo(() => {
    const query = search.trim().toLowerCase();

    return vocabulary.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch =
        query.length === 0 ||
        [item.kanji, item.hiragana, item.romaji, item.meaning, item.example]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [category, search, vocabulary]);

  return (
    <section className="space-y-6">
      <div className="grid gap-4 rounded-lg border border-sumi/10 bg-white p-4 shadow-soft dark:border-white/10 dark:bg-sumi/80 md:grid-cols-[1fr_240px]">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-sumi dark:text-washi">
            Search vocabulary
          </span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Try hospital, 免許証, shiyakusho..."
            className="w-full rounded-md border border-sumi/15 bg-washi px-4 py-3 text-sumi outline-none transition focus:border-matcha focus:ring-2 focus:ring-matcha/20 dark:border-white/15 dark:bg-sumi dark:text-washi dark:placeholder:text-washi/45"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-sumi dark:text-washi">
            Category
          </span>
          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value as "All" | VocabularyCategory)
            }
            className="w-full rounded-md border border-sumi/15 bg-washi px-4 py-3 text-sumi outline-none transition focus:border-matcha focus:ring-2 focus:ring-matcha/20 dark:border-white/15 dark:bg-sumi dark:text-washi"
          >
            <option value="All">All Categories</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="text-sm font-semibold text-sumi/70 dark:text-washi/70">
        Showing {filteredVocabulary.length} of {vocabulary.length} words
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredVocabulary.map((item) => (
          <VocabularyCard key={item.id} item={item} />
        ))}
      </div>

      {filteredVocabulary.length === 0 && (
        <div className="rounded-lg border border-dashed border-sumi/20 p-8 text-center text-sumi/70 dark:border-white/20 dark:text-washi/70">
          No vocabulary matched your search.
        </div>
      )}
    </section>
  );
}
