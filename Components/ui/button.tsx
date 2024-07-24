

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const baseStyles = "py-2 px-4 rounded-md text-sm font-medium";
  const variantStyles = {
    default: "bg-slate-500 text-white hover:bg-slate-600",
    outline: "border border-slate-500 text-neutral-500 hover:bg-slate-100",
    ghost: "bg-transparent text-slate-500 hover:bg-slate-100",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
