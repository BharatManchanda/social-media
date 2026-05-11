import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "icon" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20 hover:scale-[1.02]",
    ghost: "text-slate-400 hover:text-blue-400",
    outline:
      "border border-white/10 bg-white/5 text-slate-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white",
    icon: "text-slate-400 hover:text-blue-400",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "w-full py-3 text-sm",
    lg: "w-full py-4 text-base",
    icon: "h-11 w-11 p-0",
  };

  const isTextIcon = variant === "ghost" || variant === "icon";

  const isDisabled = disabled || loading;

  return (
    <button
      disabled={isDisabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${isTextIcon ? "" : sizes[size]}
        ${isDisabled ? "opacity-60 cursor-not-allowed" : ""}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}