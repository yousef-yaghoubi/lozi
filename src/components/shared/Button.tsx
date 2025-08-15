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
        ? " h-6 rounded-sm m-caption-sm-bold px-2 py-[5px]"
        : size == "small"
        ? " h-10 rounded-md w-caption-md-bold "
        : size == "medium"
        ? " h-14 rounded-lg w-text-sm-bold "
        : " h-16 rounded-xl w-text-md-bold px-10 py-[18px] "
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
