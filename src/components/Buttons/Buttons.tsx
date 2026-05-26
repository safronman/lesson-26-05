import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Buttons.module.css";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant = "primary", fullWidth = false, className = "", ...props }: ButtonProps) {
  const classes = [styles.button, styles[variant], fullWidth ? styles.fullWidth : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
