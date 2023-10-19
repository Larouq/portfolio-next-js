"use client";

import { Header } from "@/components/header";
import { ColorsProvider } from "@/contexts/colorsContext";
import { ModalProvider } from "@/contexts/modalContext";
import { GlowingDots } from "@/components/glowing-dots";
import { Modal } from "@/components/modal";

import "./globals.scss";

import styles from "./app.module.scss";

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
          <main className={styles.app_container}>
            <div className="page-container">{children}</div>
          </main>
        </GlowingDots>
      </ColorsProvider>
    </ModalProvider>
  );
}
