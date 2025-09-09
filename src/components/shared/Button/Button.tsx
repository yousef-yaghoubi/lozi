import { cn } from "@/lib/clsx";
import React, { forwardRef, type ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btn: "text" | "stroke" | "fill";
  children: ReactNode;
  size: "superSmall" | "small" | "medium" | "large";
  color?: "primary" | "white";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ btn, children, className, size, color = "primary", ...rest }, ref) => {
    function GetClassName(btn: "text" | "stroke" | "fill") {
      const baseClass = `flex items-center justify-evenly duration-300 transition-all cursor-pointer ${
        size == "superSmall"
          ? " h-6 rounded-sm m-caption-sm-bold px-2 py-[5px] !border-1 gap-1 "
          : size == "small"
          ? " h-10 rounded-md w-caption-md-bold px-4 py-3 gap-2.5 "
          : size == "medium"
          ? " h-14 rounded-lg w-text-sm-bold px-8 py-[15px] gap-2.5 "
          : " h-16 rounded-xl w-text-md-bold px-10 py-[18px] gap-3 "
      }`;

      const bgColor =
        color === "primary"
          ? "bg-primary hover:bg-primary-500"
          : "bg-white hover:bg-gray-100";
      const textColor =
        color === "primary"
          ? btn === "fill"
            ? "text-white"
            : "text-primary"
          : btn !== "fill"
          ? "text-white"
          : "text-primary";
      const borderColor =
        color === "primary" ? "border-primary" : "border-white";

      const textClass = `${textColor} hover:opacity-80 disabled:opacity-50`;
      const strokeClass = `border-2 ${borderColor} ${textColor} hover:opacity-80 disabled:opacity-50`;
      const fillClass = `${bgColor} ${textColor} disabled:opacity-50`;

      if (btn == "fill") {
        return baseClass + fillClass;
      } else if (btn == "stroke") {
        return baseClass + strokeClass;
      } else {
        return baseClass + textClass;
      }
    }

    return (
      <button ref={ref} {...rest} className={cn(GetClassName(btn), className)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
