import { useEffect, useLayoutEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import { useModal } from "@/contexts/modalContext";

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

  const onCloseModal = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      return closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onCloseModal);
    return () => {
      document.removeEventListener("keydown", onCloseModal);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!modalOpened) return null;

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div
            className={styles["modal-blur-container"]}
            onClick={closeModal}
          />
          <div id="tailorModal" className={styles["modal-container"]}>
            <div className={styles["modal-container-header"]}>
              <div className="f fw-w ai-c w-100-p h-100-p g-24">
                <h5 className={styles["modal-header-title"]}>{title}</h5>
              </div>
              <div className={styles["modal-container-header-separator"]} />
            </div>
            <div className={styles["modal-content"]}>{contentElement}</div>
          </div>
        </>,
        moutingPoint
      )}
    </>
  );
};
