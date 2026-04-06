import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ian Andi Limawan | Fullstack Developer",
  description: "Passionate Fullstack Developer with expertise in React, Next.js, Angular, Vue, Laravel, and more. View my portfolio and projects.",
  keywords: ["Fullstack Developer", "React", "Next.js", "Angular", "Vue.js", "Laravel", "Portfolio", "Ian Andi Limawan"],
  authors: [{ name: "Ian Andi Limawan" }],
  openGraph: {
    title: "Ian Andi Limawan | Fullstack Developer",
    description: "Passionate Fullstack Developer with expertise in modern web technologies. View my portfolio and projects.",
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ian Andi Limawan | Fullstack Developer",
    description: "Passionate Fullstack Developer with expertise in modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
