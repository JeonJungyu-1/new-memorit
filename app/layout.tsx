import BottomNavigation from "@/components/BottomNavigation";
import Header from "@/components/layout/Header";
import Providers from "@/components/Providers";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://new-memorit.vercel.app"),
  title: "memorit",

  description:
    "A simple Next.js app with Vercel Postgres as the database and Prisma as the ORM",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body
        className={`${inter.variable} min-h-full bg-background text-foreground antialiased touch-manipulation select-none overflow-x-hidden`}
      >
        <Header />
        <main className="pb-16">
          <Providers>{children}</Providers>
        </main>
        <BottomNavigation />
      </body>
    </html>
  );
}
