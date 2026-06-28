import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import BootSequence from "@/components/BootSequence";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.roles[0]} · founder`,
    template: `%s · ${profile.name}`,
  },
  description: profile.blurb,
  metadataBase: new URL("https://frankwalsh.tech"),
  openGraph: {
    title: `${profile.name} — EE · founder`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrains.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="grid-bg" aria-hidden />
        <BootSequence />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
