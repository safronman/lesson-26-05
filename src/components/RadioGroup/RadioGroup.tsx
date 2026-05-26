import { useId, useState } from "react";
import type { ChangeEvent, InputHTMLAttributes } from "react";
import styles from "./RadioGroup.module.css";

type RadioOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

type RadioGroupProps = {
  options: RadioOption[];
  name?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "defaultValue" | "name" | "onChange" | "disabled">;

export function RadioGroup({
  options,
  name,
  value,
  defaultValue,
  disabled = false,
  onValueChange,
  ...inputProps
}: RadioGroupProps) {
  const generatedName = useId();
  const groupName = name ?? generatedName;
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const selectedValue = value ?? internalValue;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;

    if (value === undefined) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  return (
    <div className={styles.group} role="radiogroup">
      {options.map((option) => {
        const isDisabled = disabled || option.disabled;

        return (
          <label className={styles.item} key={option.value}>
            <input
              {...inputProps}
              checked={selectedValue === option.value}
              className={styles.input}
              disabled={isDisabled}
              name={groupName}
              onChange={handleChange}
              type="radio"
              value={option.value}
            />
            <span className={styles.control} aria-hidden="true" />
            <span className={styles.label}>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}
