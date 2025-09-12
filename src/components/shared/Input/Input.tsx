import { cn } from "@/lib/clsx";
import type React from "react";
import { useState, forwardRef } from "react";
import {
  Eye,
  EyeOff,
  AlertCircle,
  Lock,
  FileQuestionMark,
  BadgeQuestionMark,
  BadgeQuestionMarkIcon,
  CircleQuestionMark,
} from "lucide-react";
import { numberToPersian } from "@/lib/numberToPersian";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  size: "sm" | "md" | "lg";
  variant?: "default" | "error" | "disabled";
  helperText?: string;
  showPasswordToggle?: boolean;
  icon?: React.ReactNode;
  isRequired?: boolean;
  colorLabel?: "background" | "primary";
  mainColor?: "default" | "background";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      size,
      variant = "default",
      helperText,
      showPasswordToggle = false,
      icon,
      isRequired = false,
      className,
      type = "text",
      colorLabel,
      mainColor,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState(props.value || "");

    const hasValue = value !== "" || isFocused;
    const isDisabled = disabled || variant === "disabled";
    const isError = variant === "error";
    const inputType = showPasswordToggle && showPassword ? "text" : type;

    const sizeClasses = {
      sm: {
        container: "h-10",
        input: "text-sm px-3 pt-2 pb-2",
        label: "text-xs",
        labelFocused: "text-xs -top-2 bg-white px-2",
        labelDefault: "text-sm top-3.5",
      },
      md: {
        container: "h-14",
        input: "text-base px-4 pt-2 pb-2",
        label: "text-sm",
        labelFocused: "text-xs -top-2 bg-white px-2",
        labelDefault: "text-base top-4",
      },
      lg: {
        container: "h-16",
        input: "text-lg px-4 pt-2 pb-2",
        label: "text-base",
        labelFocused: "text-sm -top-2 bg-white px-2",
        labelDefault: "text-lg top-4",
      },
    };

    const currentSize = sizeClasses[size];

    return (
      <div className="w-full">
        <div className={cn("relative", currentSize.container, className)}>
          {/* Icon */}
          {icon && (
            <div
              className={cn(
                "absolute right-4 top-1/2 -translate-y-1/2 z-10",
                isDisabled
                  ? "text-gray-400"
                  : mainColor == "background"
                  ? "text-background"
                  : "text-black-300"
              )}
            >
              {icon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            type={inputType}
            value={value}
            disabled={isDisabled}
            className={cn(
              "w-full h-full rounded-lg border-2 bg-transparent transition-all duration-200 ease-in-out outline-none",
              currentSize.input,
              icon ? "pr-10" : "",
              showPasswordToggle ? "pl-10" : "",

              // Default state
              !isError && !isDisabled && mainColor == "background"
                ? "text-background border-background"
                : "border-black-300 text-gray-900",
              !isError && !isDisabled && "focus:border-black",

              // Error state
              isError && "border-red-500 text-red-900 bg-red-50",

              // Disabled state
              isDisabled &&
                "border-black-100 bg-black-100 text-black-100 cursor-not-allowed",

              // Focus states
              isFocused &&
                !isError &&
                !isDisabled &&
                (mainColor === "background"
                  ? "border-background"
                  : "border-black")
            )}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            onChange={(e) => {
              setValue(e.target.value);
              props.onChange?.(e);
            }}
            {...props}
          />

          {/* Floating Label */}
          <label
            className={cn(
              "absolute right-12 pointer-events-none transition-all duration-200 ease-in-out",
              currentSize.label,

              // Position based on focus/value state
              hasValue ? currentSize.labelFocused : currentSize.labelDefault,

              // Colors based on state
              !isError &&
                !isDisabled &&
                (isFocused
                  ? "text-black"
                  : mainColor === "background"
                  ? "text-background"
                  : "text-black-300"),
              isError && "text-red-600",
              isDisabled && "text-gray-400",
              colorLabel == "primary" ? "bg-primary" : "bg-background",

              // RTL support for Persian text
              "text-right"
            )}
          >
            {label}
            {isRequired && <span className="text-red-500 mr-1">*</span>}
          </label>

          {/* Password Toggle */}
          {showPasswordToggle && (
            <button
              type="button"
              className={cn(
                "absolute left-3 top-1/2 -translate-y-1/2 z-10",
                isDisabled
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-black-300 hover:text-gray-700"
              )}
              onClick={() => setShowPassword(!showPassword)}
              disabled={isDisabled}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}

          {/* Lock Icon for Disabled State */}
          {isDisabled && !icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-gray-400">
              <Lock size={20} />
            </div>
          )}
        </div>

        {/* Helper Text */}
        {helperText && (
          <div
            className={cn(
              "mt-1 text-sm text-right",
              isError
                ? "text-red-600"
                : mainColor === "background"
                ? "text-background"
                : "text-black-300"
            )}
          >
            <div className="w-full flex justify-between px-3.5">
              <span>
                <CircleQuestionMark
                  className="inline ml-1"
                  width={size == "lg" ? 12 : size == "md" ? 10 : 8}
                  height={size == "lg" ? 12 : size == "md" ? 10 : 8}
                />
                {helperText}
              </span>
              <span>
                {numberToPersian(8)} / {numberToPersian(String(value).length)}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
