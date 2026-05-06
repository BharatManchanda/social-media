"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border">

        <h1 className="text-2xl font-bold text-center mb-4">
          Forgot Password 🔑
        </h1>

        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your email and we’ll send you a reset link.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg text-sm"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="bg-blue-600 text-white py-2 rounded-lg">
            Send Reset Link
          </button>

        </form>

        <p className="text-sm text-center mt-4">
          Back to{" "}
          <Link href="/login" className="text-blue-600">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}