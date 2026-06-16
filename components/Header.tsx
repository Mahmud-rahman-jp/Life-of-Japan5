import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/vocabulary", label: "Vocabulary" },
  { href: "/quiz", label: "Quiz" },
];

export default function Header() {
  return (
    <header className="border-b border-sumi/10 bg-washi/90 backdrop-blur dark:border-white/10 dark:bg-sumi/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-xl font-bold text-sumi dark:text-washi">
          Japan Life Japanese
        </Link>

        <nav className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-sumi/75 transition hover:bg-matcha/10 hover:text-matcha dark:text-washi/80 dark:hover:bg-white/10 dark:hover:text-sakura"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
