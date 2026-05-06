"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
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
          Create Account 🚀
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-lg text-sm"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

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

          <button className="bg-blue-600 text-white py-2 rounded-lg">
            Register
          </button>

        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}