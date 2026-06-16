import Quiz from "@/components/Quiz";
import { vocabulary } from "@/lib/vocabulary";

export default function QuizPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-matcha dark:text-sakura">
          Quiz
        </p>
        <h1 className="mt-2 text-4xl font-bold text-sumi dark:text-washi">
          Practice Japanese meanings
        </h1>
        <p className="mt-3 max-w-3xl text-sumi/70 dark:text-washi/70">
          Pick the correct English meaning for each Japanese word. Your score
          updates as you answer.
        </p>
      </div>

      <Quiz vocabulary={vocabulary} />
    </div>
  );
}
