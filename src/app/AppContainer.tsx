import { Header } from "@/components/header";
import { Modal } from "@/components/modal";

import styles from "./app.module.scss";

export default function AppContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.app_container}>
      <Header />
      <Modal />
      {children}
    </div>
  );
}
