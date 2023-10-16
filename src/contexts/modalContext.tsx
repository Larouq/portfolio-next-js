import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react";

interface ModalPropsType {
  title: string;
  contentElement: ReactNode;
}

interface ModalContextType {
  title: string;
  contentElement: ReactNode;
  modalOpened: boolean;
  openModal: (value: ModalPropsType) => void;
  closeModal: () => void;
}

const initialState: ModalPropsType = {
  title: "",
  contentElement: null,
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

  const openModal = useCallback(({ title, contentElement }: ModalPropsType) => {
    setModalProps({
      title,
      contentElement,
    });
  }, []);

  const closeModal = useCallback(() => {
    setModalProps(initialState);
  }, []);

  const value = useMemo(
    () => ({
      title: modalProps.title,
      contentElement: modalProps.contentElement,
      modalOpened: modalProps.contentElement !== null,
      openModal,
      closeModal,
    }),
    [modalProps, openModal, closeModal]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
