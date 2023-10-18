"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { ColorsProvider } from "@/contexts/colorsContext";
import { ModalProvider } from "@/contexts/modalContext";

import "./globals.scss";
import { GlowingDots } from "@/components/glowing-dots";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ColorsProvider>
          <GlowingDots>
            <ModalProvider>
              <ColorsProvider>
                <Header />
                {children}
              </ColorsProvider>
            </ModalProvider>
          </GlowingDots>
        </ColorsProvider>
      </body>
    </html>
  );
}
