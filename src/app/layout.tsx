import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { SatelliteOrbitIcon } from "@/components/icons/satellite-orbit";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gorbit Chat",
  description: "Gorbit Chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <header className="flex items-center gap-2 p-3">
          <div className="h-6 w-6 text-primary drop-shadow" aria-hidden>
            <SatelliteOrbitIcon />
          </div>
          <span className="text-sm font-semibold tracking-wide text-foreground/90">
            Gorbit Chat
          </span>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </header>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
