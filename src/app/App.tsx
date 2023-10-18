import { ColorsProvider } from "@/contexts/colorsContext";
import { ModalProvider } from "@/contexts/modalContext";

import { GlowingDots } from "@/components/glowing-dots";
import { Header } from "@/components/header";
import { Modal } from "@/components/modal";

import styles from "./app.module.scss";

export default function Home() {
  return (
    <main>
      <ModalProvider>
        <ColorsProvider>
          <GlowingDots>
            <div className={styles.app_container}>
              <Header />
              <Modal />
            </div>
          </GlowingDots>
        </ColorsProvider>
      </ModalProvider>
    </main>
  );
}
