# Japan Life Japanese

A simple Next.js app for foreigners living in Japan to learn practical Japanese vocabulary used in daily life.

## Features

- Home page with a daily Japanese word and total vocabulary count
- Vocabulary page with search, category filtering, and responsive cards
- Quiz page with random multiple-choice questions, score tracking, and restart
- Light and dark mode toggle
- Local JSON vocabulary data, no database required

## Folder Structure

```text
app/
  page.tsx
  vocabulary/page.tsx
  quiz/page.tsx
components/
  Header.tsx
  Quiz.tsx
  ThemeToggle.tsx
  VocabularyCard.tsx
  VocabularyExplorer.tsx
data/
  vocabulary.json
lib/
  vocabulary.ts
types/
  vocabulary.ts
```

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build

```bash
npm run build
```
