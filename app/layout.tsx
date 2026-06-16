import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Japan Life Japanese",
  description: "Practical Japanese vocabulary for daily life in Japan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <main className="mx-auto min-h-screen max-w-6xl px-4 py-8 sm:py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
