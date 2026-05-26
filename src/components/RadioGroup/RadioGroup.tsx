import { Radio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./RadioGroup.module.css";

type RadioGroupProps = {
  children: ReactNode;
  className?: BaseRadioGroup.Props<string>["className"];
} & Omit<BaseRadioGroup.Props<string>, "children" | "className">;

type RadioGroupItemProps = {
  children: ReactNode;
  className?: string;
  controlClassName?: Radio.Root.Props<string>["className"];
  indicatorClassName?: Radio.Indicator.Props["className"];
} & Omit<Radio.Root.Props<string>, "children" | "className">;

function getGroupClassName(state: BaseRadioGroup.State, className: RadioGroupProps["className"]) {
  const externalClassName = typeof className === "function" ? className(state) : className;

  return clsx(styles.group, externalClassName);
}

function getControlClassName(state: Radio.Root.State, className: RadioGroupItemProps["controlClassName"]) {
  const externalClassName = typeof className === "function" ? className(state) : className;

  return clsx(styles.control, externalClassName);
}

function getIndicatorClassName(state: Radio.Indicator.State, className: RadioGroupItemProps["indicatorClassName"]) {
  const externalClassName = typeof className === "function" ? className(state) : className;

  return clsx(styles.indicator, externalClassName);
}

export function RadioGroup({ children, className, ...props }: RadioGroupProps) {
  return (
    <BaseRadioGroup className={(state) => getGroupClassName(state, className)} {...props}>
      {children}
    </BaseRadioGroup>
  );
}

export function RadioGroupItem({
  children,
  className,
  controlClassName,
  indicatorClassName,
  ...props
}: RadioGroupItemProps) {
  return (
    <label className={clsx(styles.item, className)}>
      <Radio.Root className={(state) => getControlClassName(state, controlClassName)} {...props}>
        <Radio.Indicator className={(state) => getIndicatorClassName(state, indicatorClassName)} />
      </Radio.Root>
      <span className={styles.label}>{children}</span>
    </label>
  );
}
