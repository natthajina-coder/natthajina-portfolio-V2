import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NJ Portfolio — Technician Demo",
  description:
    "Portfolio of Natthapol (NJ) Jinavanich, a PMP-certified project and program manager with a mechanical engineering background and an MBA.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
