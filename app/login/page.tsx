"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

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
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4">

			{/* Card */}
			<div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">

				{/* Header */}
				<div className="mb-8 text-center">
					<h1 className="text-3xl font-bold text-white">
						Welcome Back
					</h1>
					<p className="mt-2 text-sm text-slate-400">
						Login to continue your journey
					</p>
				</div>

				<form onSubmit={handleSubmit} className="flex flex-col gap-5">

					{/* Email */}
					<Input
						type="email"
						placeholder="Email address"
						icon={<Mail size={18} />}
						onChange={(e) => setForm({ ...form, email: e.target.value })}
					/>

					{/* Password */}
					<Input
						type="password"
						placeholder="Password"
						icon={<Lock size={18} />}
						onChange={(e) => setForm({ ...form, password: e.target.value })}
					/>

					{/* Forgot */}
					<div className="flex justify-end">
						<Link
							href="/forgot"
							className="text-xs text-slate-400 transition hover:text-blue-400"
						>
							Forgot password?
						</Link>
					</div>

					{/* Button */}
					<Button type="submit">
						<LogIn size={18} />
						Login
					</Button>
				</form>

				{/* Footer */}
				<p className="mt-6 text-center text-sm text-slate-400">
					Don't have an account?{" "}
					<Link
						href="/register"
						className="font-medium text-blue-400 hover:text-blue-300"
					>
						Create account
					</Link>
				</p>
			</div>
		</div>
	);
}