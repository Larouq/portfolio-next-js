"use client";

import { ReactNode } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
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
  const { pending } = useFormStatus();

  const buttonClassNames = classNames(styles.Button, {
    [styles[`button-${variant}`]]: variant,
    [styles["button-disabled"]]: disabled || pending,
  });

  console.log("pending", pending);

  return (
    <button
      className={buttonClassNames}
      onClick={onClick}
      disabled={disabled || pending}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};
