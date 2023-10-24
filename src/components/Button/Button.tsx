"use client";

import { ReactNode } from "react";
import classNames from "classnames";

import styles from "./button.module.scss";

type ButtonVariant = "primary" | "secondary" | "thrid";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant: ButtonVariant;
  icon?: ReactNode;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant,
  icon,
  disabled,
}) => {
  const buttonClassNames = classNames(styles.Button, {
    [styles[`button-${variant}`]]: variant,
  });

  return (
    <button className={buttonClassNames} onClick={onClick} disabled={disabled}>
      {icon}
      <span>{text}</span>
    </button>
  );
};
