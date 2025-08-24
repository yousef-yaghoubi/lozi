import { cn } from "@/lib/clsx";
import React, { type ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btn: "text" | "stroke" | "fill";
  children: ReactNode;
  size: "superSmall" | "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  btn,
  children,
  className,
  size,
  ...rest
}) => {
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
    const textClass =
      "text-primary hover:text-primary-500 disabled:text-white-600";
    const strokeClass =
      "border-3 border-primary text-primary hover:text-primary-500 hover:border-primary-500 disabled:text-white-600 disabled:border-white-600";
    const fillClass =
      "bg-primary hover:bg-primary-500 disabled:bg-white-600 disabled:text-white text-white";

    if (btn == "fill") {
      return baseClass + fillClass;
    } else if (btn == "stroke") {
      return baseClass + strokeClass;
    } else {
      return baseClass + textClass;
    }
  }

  return (
    <button className={cn(GetClassName(btn), className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
