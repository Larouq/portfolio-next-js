"use client";

import { Header } from "@/components/header";
import { ColorsProvider } from "@/contexts/colorsContext";
import { ModalProvider } from "@/contexts/modalContext";
import { GlowingDots } from "@/components/glowing-dots";
import { Modal } from "@/components/modal";

import "./globals.scss";

export default function AppContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <ColorsProvider>
        <GlowingDots>
          <Header />
          <Modal />
          {children}
        </GlowingDots>
      </ColorsProvider>
    </ModalProvider>
  );
}
