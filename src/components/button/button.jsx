import React from "react";
import clsx from "clsx";
export const Button = ({ children, variant, leftIcon, rightIcon }) => {
  return (
    <button
      className={clsx(
        "flex items-center rounded-lg transition duration-300 ease-in-out",
        {
          // Primary variant styles
          "bg-pastelOrange py-[14px] px-[30px] gap-2 text-sm font-medium whitespace-nowrap":
            variant === "primary",
          // Secondary variant styles
          "bg-pastelOrange py-[14px] px-[100px] gap-2 text-sm font-medium whitespace-nowrap":
            variant === "secondary",
          // Card variant styles
          "bg-pastelOrange py-[14px] px-[56px] gap-2 text-sm font-medium whitespace-nowrap":
            variant === "card",
          // No color variant styles
          "border-[1px] text-white max-w-[410px] text-center w-full border-pastelOrange py-[14px] px-[100px] justify-center gap-2 text-sm font-medium whitespace-nowrap":
            variant === "nocolor",
        },
        "transition duration-300 ease-in-out", // Transition for smooth effects
        "md:text-base md:py-3 md:px-6", // Medium screen and up
        "lg:text-lg lg:py-4 lg:px-8" // Large screen and up
      )}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};
