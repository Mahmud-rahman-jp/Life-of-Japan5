import vocabularyData from "@/data/vocabulary.json";
import type { VocabularyCategory, VocabularyItem } from "@/types/vocabulary";

export const vocabulary = vocabularyData as VocabularyItem[];

export const categories: VocabularyCategory[] = [
  "Daily Conversation",
  "Driving Test",
  "Hospital",
  "City Office",
  "Shopping",
  "Workplace",
];

export function getDailyWord() {
  const today = new Date();
  const dayKey = Math.floor(today.getTime() / 86_400_000);
  return vocabulary[dayKey % vocabulary.length];
}
