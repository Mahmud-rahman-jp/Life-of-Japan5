export type VocabularyCategory =
  | "Daily Conversation"
  | "Driving Test"
  | "Hospital"
  | "City Office"
  | "Shopping"
  | "Workplace";

export type VocabularyItem = {
  id: number;
  category: VocabularyCategory;
  kanji: string;
  hiragana: string;
  romaji: string;
  meaning: string;
  example: string;
};
