import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revetio - Creative Agency Portfolio",
  description:
    "Professional web development and creative solutions by Revetio. We build modern, responsive websites with cutting-edge technology.",
  keywords:
    "web development, portfolio, creative agency, Next.js, React, modern websites",
  authors: [{ name: "Revetio" }],
  creator: "Revetio",
  openGraph: {
    title: "Revetio - Creative Agency Portfolio",
    description:
      "Professional web development and creative solutions by Revetio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revetio - Creative Agency Portfolio",
    description:
      "Professional web development and creative solutions by Revetio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900 ">{children}</body>
    </html>
  );
}
