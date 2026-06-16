import Link from "next/link";
import VocabularyCard from "@/components/VocabularyCard";
import { categories, getDailyWord, vocabulary } from "@/lib/vocabulary";

export default function HomePage() {
  const dailyWord = getDailyWord();

  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-bold uppercase tracking-wide text-matcha dark:text-sakura">
            Practical Japanese for daily life
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight text-sumi dark:text-washi sm:text-6xl">
            Japan Life Japanese
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-sumi/75 dark:text-washi/75">
            Welcome. Learn practical Japanese vocabulary for situations
            foreigners often meet in Japan, from hospitals and city offices to
            shopping, work, and driving tests.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/vocabulary"
              className="rounded-md bg-matcha px-5 py-3 text-sm font-bold text-white transition hover:bg-indigoInk"
            >
              Browse Vocabulary
            </Link>
            <Link
              href="/quiz"
              className="rounded-md border border-sumi/15 px-5 py-3 text-sm font-bold text-sumi transition hover:border-sakura hover:text-sakura dark:border-white/15 dark:text-washi"
            >
              Start Quiz
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-sumi/10 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-sumi/80">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-matcha dark:text-sakura">
            Daily Japanese Word
          </p>
          <VocabularyCard item={dailyWord} />
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-indigoInk p-5 text-white shadow-soft">
          <p className="text-sm font-semibold text-white/75">Total Vocabulary</p>
          <p className="mt-2 text-4xl font-bold">{vocabulary.length}</p>
        </div>
        <div className="rounded-lg bg-matcha p-5 text-white shadow-soft">
          <p className="text-sm font-semibold text-white/75">Categories</p>
          <p className="mt-2 text-4xl font-bold">{categories.length}</p>
        </div>
        <div className="rounded-lg bg-sakura p-5 text-sumi shadow-soft">
          <p className="text-sm font-semibold text-sumi/70">Study Style</p>
          <p className="mt-2 text-2xl font-bold">Cards + Quiz</p>
        </div>
        <div className="rounded-lg border border-sumi/10 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-sumi/80">
          <p className="text-sm font-semibold text-sumi/60 dark:text-washi/60">
            Data Source
          </p>
          <p className="mt-2 text-2xl font-bold text-sumi dark:text-washi">
            Local JSON
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-sumi dark:text-washi">
          Vocabulary Categories
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/vocabulary?category=${encodeURIComponent(category)}`}
              className="rounded-lg border border-sumi/10 bg-white p-5 font-bold text-sumi shadow-soft transition hover:-translate-y-0.5 hover:border-matcha dark:border-white/10 dark:bg-sumi/80 dark:text-washi"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
