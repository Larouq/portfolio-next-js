import { Header } from "@/components/header";
import { Modal } from "@/components/modal";

import styles from "./app.module.scss";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className={styles.app_container}>{children}</div>
    </main>
  );
}
