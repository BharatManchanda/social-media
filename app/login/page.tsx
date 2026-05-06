"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border">

        <h1 className="text-2xl font-bold text-center mb-6">
          Welcome Back 👋
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg text-sm"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg text-sm"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <div className="text-right">
            <Link href="/forgot" className="text-sm text-blue-600">
              Forgot password?
            </Link>
          </div>

          <button className="bg-blue-600 text-white py-2 rounded-lg">
            Login
          </button>

        </form>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-600">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}