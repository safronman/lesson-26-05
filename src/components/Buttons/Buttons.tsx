import { Button as BaseButton } from "@base-ui/react/button";
import clsx from "clsx";
import styles from "./Buttons.module.css";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";

type ButtonProps = {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: BaseButton.Props["className"];
} & Omit<BaseButton.Props, "className">;

function getClassName(
  state: BaseButton.State,
  variant: ButtonVariant,
  fullWidth: boolean,
  className: ButtonProps["className"],
) {
  const externalClassName = typeof className === "function" ? className(state) : className;

  return clsx(styles.button, styles[variant], fullWidth && styles.fullWidth, externalClassName);
}

export function Button({ variant = "primary", fullWidth = false, className, type = "button", ...props }: ButtonProps) {
  return (
    <BaseButton className={(state) => getClassName(state, variant, fullWidth, className)} type={type} {...props} />
  );
}
