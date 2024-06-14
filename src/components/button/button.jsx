import React from "react";
import clsx from "clsx";
export const Button = ({ children, variant, leftIcon, rightIcon }) => {
  return (
    <button
      className={clsx("flex items-center  rounded-lg", {
        "inline-block bg-pastelOrange py-[14px] px-[30px] gap-2 text-sm font-medium whitespace-nowrap":
          variant === "primary",
        "inline-block bg-pastelOrange py-[14px] px-[100px] gap-2 text-sm font-medium whitespace-nowrap":
          variant === "secondary",
        "inline-block bg-pastelOrange py-[14px] px-[56px] gap-2 text-sm font-medium whitespace-nowrap":
          variant === "card",
        "inline-block border-[1px] text-white max-w-[410px] text-center w-full border-pastelOrange py-[14px] px-[100px] justify-center gap-2 text-sm font-medium whitespace-nowrap":
          variant === "nocolor",
      })}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

