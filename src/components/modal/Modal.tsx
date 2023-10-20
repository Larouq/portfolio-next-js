"use client";

import { useEffect, useLayoutEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import { useModal } from "@/contexts/modalContext";
import { X } from "phosphor-react";

import styles from "./modal.module.scss";

export const Modal = () => {
  const { modalOpened, closeModal, title, contentElement } = useModal();

  const mountingPoint: HTMLElement | null = useMemo(() => {
    if (typeof document !== "undefined") {
      return document.createElement("div");
    }
    return null;
  }, []);

  useLayoutEffect(() => {
    if (!modalOpened || !mountingPoint) return () => {};
    if (modalOpened) {
      document.body.appendChild(mountingPoint);
      return () => document.body.removeChild(mountingPoint);
    }
  }, [modalOpened, mountingPoint]);

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

  if (!modalOpened || !mountingPoint) return null;

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
              <X
                size={24}
                onClick={closeModal}
                className={styles["close-modal-icon"]}
              />
            </div>
            <div className={styles["modal-content"]}>{contentElement}</div>
          </div>
        </>,
        mountingPoint
      )}
    </>
  );
};
