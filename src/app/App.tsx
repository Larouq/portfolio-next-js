import styles from "./app.module.scss";
import { ColorsProvider } from "@/contexts/colorsContext";

import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main>
      <ColorsProvider>
        <div className={styles.app_container}>
          <Header />
        </div>
      </ColorsProvider>
    </main>
  );
}
