import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://natthapoljinavanich.me"),
  title: {
    default: "Natthapol Jinavanich Project Portfolio",
    template: "%s | Natthapol Jinavanich",
  },
  description:
    "Selected power-generation, energy-infrastructure, and industrial projects delivered by Natthapol (NJ) Jinavanich, PMP.",
  openGraph: {
    title: "Natthapol Jinavanich Project Portfolio",
    description: "Power generation, energy infrastructure, and industrial project case studies.",
    url: "https://natthapoljinavanich.me",
    siteName: "Natthapol Jinavanich Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Natthapol Jinavanich Project Portfolio",
    description: "Power generation, energy infrastructure, and industrial project case studies.",
  },
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
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
