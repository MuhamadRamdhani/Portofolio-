import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// 👉 Set your real deployed URL here (or via NEXT_PUBLIC_SITE_URL env var) so
// social previews and canonical links resolve to absolute URLs.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ramdhani.dev";

const title = "Muhamad Ramdhani — Full-Stack Developer";
const description =
  "Portfolio Muhamad Ramdhani, full-stack developer. Membangun aplikasi web berskala enterprise dengan Next.js, Node.js, dan Laravel.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Muhamad Ramdhani",
  },
  description,
  applicationName: "Muhamad Ramdhani — Portfolio",
  authors: [{ name: "Muhamad Ramdhani", url: siteUrl }],
  creator: "Muhamad Ramdhani",
  keywords: [
    "Muhamad Ramdhani",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js",
    "Node.js",
    "Laravel",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
    languages: { "id-ID": "/", "en-US": "/" },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Muhamad Ramdhani",
    title,
    description,
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // suppressHydrationWarning is required because next-themes mutates the
  // <html> class before React hydrates.
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
