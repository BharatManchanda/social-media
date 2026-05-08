import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "icon" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20 hover:scale-[1.02]",
    ghost: "text-slate-400 hover:text-blue-400",
    outline: "border border-white/10 bg-white/5 text-slate-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white",
    icon: "text-slate-400 hover:text-blue-400"
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "w-full py-3 text-sm",
    lg: "w-full py-4 text-base",
    icon: "h-11 w-11 p-0"
  };

  // The Ghost and Icon variants often don't want standard padding
  const isTextIcon = variant === "ghost" || variant === "icon";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${isTextIcon && variant !== "outline" ? "" : sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
