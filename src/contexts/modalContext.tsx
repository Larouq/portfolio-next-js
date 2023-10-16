import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react";

interface ModalContextType {
  title: string;
  contentElement: ReactNode;
  onClose: () => void | boolean; // The onClose function can return void or boolean
}

const initialState: ModalContextType = {
  title: "",
  contentElement: <></>,
  onClose: () => false,
};

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider"); // Updated error message
  }
  return context;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalProps, setModalProps] = useState(initialState);

  const openModal = useCallback(
    ({ title, contentElement, onClose }: ModalContextType) => {
      setModalProps({
        title,
        contentElement,
        onClose: onClose || initialState.onClose,
      });
    },
    []
  );

  const closeModal = useCallback(() => {
    if (modalProps.onClose) modalProps.onClose();
    setModalProps(initialState);
  }, [modalProps]);

  const value = useMemo(
    () => ({
      title: modalProps.title,
      contentElement: modalProps.contentElement,
      onClose: modalProps.onClose,
      modalOpened: modalProps.contentElement !== <></>,
      openModal,
      closeModal,
      modalProps,
    }),
    [modalProps, openModal, closeModal]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
