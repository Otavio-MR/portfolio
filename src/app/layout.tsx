import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name}, Portfólio`,
  description: profile.tagline.pt,
  openGraph: {
    title: `${profile.name}, Portfólio`,
    description: profile.tagline.pt,
    type: "website",
  },
  icons: {
    icon: [{ url: "/penguin.png", type: "image/png" }],
    shortcut: [{ url: "/penguin.png", type: "image/png" }],
    apple: [{ url: "/penguin.png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <LanguageProvider>
          <div className="noise-overlay" />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
