import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import "../styles/globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://alpharizy.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "alpha-code",
    template: `%s | alpha-code`,
  },
  icons: "/image/favicon.ico",
  description:
    "Aldy Alfarizy is a Web Designer & Web Developer based in Jakarta, Indonesia, with expertise in web development. He creates high-quality website and web application. His focus is on TypeScript, React, Next.js, TailwindCSS, Redux, Prisma, and PostgreSQL. In his spare time, he enjoys coding on his projects.",
  keywords: ["Aldy Alfarizy", "Aldy", "Alfarizy", "alpharizy", "Portfolio Web", "Website Portofolio"],
  applicationName: "alpha-code",
  authors: [{ name: "Aldy Alfarizy", url: "https://alpharizy.com" }],
  creator: "Aldy Alfarizy",
  generator: "Next.js",
  publisher: "Vercel",
  verification: {
    google: "x",
  },
  openGraph: {
    type: "website",
    url: "https://alpharizy.com",
    title: "alpharizy",
    description: "Aldy Alfarizy's Portfolio Website",
    siteName: "alpharizy",
    images: "https://res.cloudinary.com/",
  },
  twitter: {
    card: "summary_large_image",
    site: "alpharizy.com",
    creator: "Aldy Alfarizy",
    title: "alpharizy",
    description: "Aldy Alfarizy's Portfolio Website",
    images: "https://res.cloudinary.com/",
  },
  appleWebApp: {
    capable: true,
    title: "alpharizy",
    statusBarStyle: "black",
  },
  referrer: "origin",
  category: "Portfolio",
  classification: "Portfolio",
  bookmarks: "https://alpharizy.com/bookmarks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-background font-sans overflow-x-hidden antialiased selection:bg-muted-foreground dark", fontSans.variable)}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
