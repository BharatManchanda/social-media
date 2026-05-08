"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, KeyRound } from "lucide-react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export default function ForgotPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4">

      {/* Card */}
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            Forgot Password
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Enter your email and we’ll send you a reset link.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          <Input
            type="email"
            placeholder="Email address"
            icon={<Mail size={18} />}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button type="submit">
            <KeyRound size={18} />
            Send Reset Link
          </Button>

        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-500">
          Back to{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}