import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Third = "third",
}

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, variant }) => {
  const buttonClassNames = classNames(styles.Button, {
    [styles[`button-${variant}`]]: variant,
  });

  return (
    <button className={buttonClassNames} onClick={onClick}>
      {text}
    </button>
  );
};
