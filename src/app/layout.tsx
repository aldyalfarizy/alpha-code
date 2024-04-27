import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/utils/cn";

import "../styles/globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://alpharizy.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "alpha code",
    template: `%s | alpha code`,
  },
  icons: "/image/favicon.ico",
  description: "The versatile boilerplate code.",
  keywords: ["Aldy Alfarizy", "alpha code"],
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
    description: "Aldy Alfarizy's Boilerplate Code",
    siteName: "alpharizy",
    images: "https://",
  },
  twitter: {
    card: "summary_large_image",
    site: "alpha code.com",
    creator: "Aldy Alfarizy",
    title: "alpha code",
    description: "Aldy Alfarizy's Boilerplate Code",
    images: "https://",
  },
  appleWebApp: {
    capable: true,
    title: "alpha code",
    statusBarStyle: "black",
  },
  referrer: "origin",
  category: "Starter Project",
  classification: "Starter Project",
  bookmarks: "https://alpha-code.com/bookmarks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "dark container min-h-screen overflow-x-hidden bg-background font-sans antialiased selection:bg-muted-foreground",
          fontSans.variable,
        )}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
