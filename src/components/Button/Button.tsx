"use client";

import classNames from "classnames";
import styles from "./button.module.scss";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "thrid";

type ButtonProps = {
  text: string;
  onClick: () => void;
  variant: ButtonVariant;
  icon?: ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant,
  icon,
}) => {
  const buttonClassNames = classNames(styles.Button, {
    [styles[`button-${variant}`]]: variant,
  });

  return (
    <button className={buttonClassNames} onClick={onClick}>
      {icon}
      <span>{text}</span>
    </button>
  );
};
