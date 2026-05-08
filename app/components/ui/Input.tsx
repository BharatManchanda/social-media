import React from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export function Input({
  icon,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>
      )}

      <input
        className={`
          w-full rounded-2xl border border-slate-300 bg-white
          py-3 ${icon ? "pl-12" : "pl-4"} pr-4
          text-sm text-slate-800
          placeholder:text-slate-400
          shadow-sm outline-none transition
          focus:border-blue-500
          focus:ring-4 focus:ring-blue-100
          ${className}
        `}
        {...props}
      />
    </div>
  );
}