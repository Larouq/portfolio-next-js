import { useEffect, useLayoutEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import { useModal } from "@/contexts/modalContext";
import { X } from "phosphor-react";

import styles from "./modal.module.scss";

export const Modal = () => {
  const { modalOpened, closeModal, title, contentElement } = useModal();

  const moutingPoint = useMemo(() => document.createElement("div"), []);

  useLayoutEffect(() => {
    if (!modalOpened) return () => {};
    if (modalOpened) {
      document.body.appendChild(moutingPoint);
      return () => document.body.removeChild(moutingPoint);
    }
  }, [modalOpened, moutingPoint]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  if (!modalOpened) return null;

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div
            className={styles["modal-blur-container"]}
            onClick={closeModal}
          />
          <div className={styles["modal-container"]}>
            <div className={styles["modal-header"]}>
              <h2>{title}</h2>
              <X size={24} onClick={closeModal} />
            </div>
            <div className={styles["modal-content"]}>{contentElement}</div>
          </div>
        </>,
        moutingPoint
      )}
    </>
  );
};
