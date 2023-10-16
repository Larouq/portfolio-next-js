import styles from "./app.module.scss";
import { ColorsProvider } from "@/contexts/colorsContext";
import { ModalProvider } from "@/contexts/modalContext";

import { Header } from "@/components/header";
import { Modal } from "@/components/modal";

export default function Home() {
  return (
    <main>
      <ModalProvider>
        <ColorsProvider>
          <div className={styles.app_container}>
            <Header />
            <Modal />
          </div>
        </ColorsProvider>
      </ModalProvider>
    </main>
  );
}
