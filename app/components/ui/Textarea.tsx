import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-black placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${className}`}
      {...props}
    />
  );
}
