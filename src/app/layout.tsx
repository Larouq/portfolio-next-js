"use client";

import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { ColorsProvider } from "@/contexts/colorsContext";
import { ModalProvider } from "@/contexts/modalContext";
import { GlowingDots } from "@/components/glowing-dots";
import { Modal } from "@/components/modal";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider>
          <ColorsProvider>
            <GlowingDots>
              <Header />
              <Modal />
              {children}
            </GlowingDots>
          </ColorsProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
