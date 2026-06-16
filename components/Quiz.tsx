"use client";

import { useMemo, useState } from "react";
import type { VocabularyItem } from "@/types/vocabulary";

type QuizProps = {
  vocabulary: VocabularyItem[];
};

type Question = {
  prompt: VocabularyItem;
  options: string[];
};

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

function makeQuestion(vocabulary: VocabularyItem[]): Question {
  const prompt = shuffle(vocabulary)[0];
  const wrongOptions = shuffle(
    vocabulary.filter((item) => item.id !== prompt.id),
  )
    .slice(0, 3)
    .map((item) => item.meaning);

  return {
    prompt,
    options: shuffle([prompt.meaning, ...wrongOptions]),
  };
}

export default function Quiz({ vocabulary }: QuizProps) {
  const [question, setQuestion] = useState(() => makeQuestion(vocabulary));
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const isCorrect = selected === question.prompt.meaning;

  const feedback = useMemo(() => {
    if (!selected) return "Choose the English meaning.";
    return isCorrect ? "Correct!" : `Answer: ${question.prompt.meaning}`;
  }, [isCorrect, question.prompt.meaning, selected]);

  function chooseAnswer(answer: string) {
    if (selected) return;

    setSelected(answer);
    setTotal((current) => current + 1);
    if (answer === question.prompt.meaning) {
      setScore((current) => current + 1);
    }
  }

  function nextQuestion() {
    setQuestion(makeQuestion(vocabulary));
    setSelected(null);
  }

  function restartQuiz() {
    setQuestion(makeQuestion(vocabulary));
    setSelected(null);
    setScore(0);
    setTotal(0);
  }

  return (
    <section className="mx-auto max-w-3xl rounded-lg border border-sumi/10 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-sumi/80 sm:p-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-matcha dark:text-sakura">
            Multiple Choice Quiz
          </p>
          <h1 className="mt-2 text-4xl font-bold text-sumi dark:text-washi">
            {question.prompt.kanji}
          </h1>
          <p className="mt-2 text-lg text-sumi/70 dark:text-washi/70">
            {question.prompt.hiragana} · {question.prompt.romaji}
          </p>
        </div>
        <div className="rounded-md bg-matcha/10 px-4 py-3 text-sm font-bold text-matcha dark:bg-sakura/15 dark:text-sakura">
          Score: {score}/{total}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {question.options.map((option) => {
          const isSelected = selected === option;
          const isAnswer = question.prompt.meaning === option;
          const resultClass =
            selected && isAnswer
              ? "border-matcha bg-matcha text-white"
              : selected && isSelected
                ? "border-sakura bg-sakura text-white"
                : "border-sumi/15 bg-washi text-sumi hover:border-matcha hover:bg-matcha/10 dark:border-white/15 dark:bg-sumi dark:text-washi";

          return (
            <button
              key={option}
              type="button"
              onClick={() => chooseAnswer(option)}
              className={`min-h-16 rounded-md border px-4 py-3 text-left font-semibold transition ${resultClass}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-sumi dark:text-washi">{feedback}</p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={restartQuiz}
            className="rounded-md border border-sumi/15 px-4 py-3 text-sm font-bold text-sumi transition hover:border-sakura hover:text-sakura dark:border-white/15 dark:text-washi"
          >
            Restart Quiz
          </button>
          <button
            type="button"
            onClick={nextQuestion}
            className="rounded-md bg-indigoInk px-4 py-3 text-sm font-bold text-white transition hover:bg-matcha"
          >
            Next Question
          </button>
        </div>
      </div>
    </section>
  );
}
