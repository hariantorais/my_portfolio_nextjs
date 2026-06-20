import { notFound } from "next/navigation";
import "@/src/app/globals.css";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "id" }];
}

const locales = ["en", "id"] as const;
type Locale = (typeof locales)[number];

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  return (
    <html lang={lang} className="scroll-smooth">
      <body className="bg-[#0f1115] text-gray-200 antialiased">{children}</body>
    </html>
  );
}
