"use client";

import Link from "next/link";
import { useState } from "react";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { UserRegisterData } from "../types/register.type";
import { useAppDispatch } from "../redux/hooks";
import { createUser } from "../redux/slices/userSlice";

export default function RegisterPage() {
	const [form, setForm] = useState<UserRegisterData>({
		name: "",
		email: "",
    	password: "",
    	confirmPassword: "",
	});
	const dispatch = useAppDispatch();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await dispatch(createUser(form));
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4">

			<div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">

				<div className="mb-8 text-center">
					<h1 className="text-3xl font-bold text-white">
						Create Account
					</h1>
					<p className="mt-2 text-sm text-slate-400">
						Join our community
					</p>
				</div>

				<form onSubmit={handleSubmit} className="flex flex-col gap-5">

					<Input
						type="text"
						placeholder="Full name"
						icon={<User size={18} />}
						onChange={(e) => setForm({ ...form, name: e.target.value })}
					/>

					<Input
						type="email"
						placeholder="Email address"
						icon={<Mail size={18} />}
						onChange={(e) => setForm({ ...form, email: e.target.value })}
					/>

					<Input
						type="password"
						placeholder="Password"
						icon={<Lock size={18} />}
						onChange={(e) => setForm({ ...form, password: e.target.value })}
					/>

					<Input
						type="password"
						placeholder="Confirm Password"
						icon={<Lock size={18} />}
						onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
					/>

					<Button type="submit">
						<UserPlus size={18} />
						Create Account
					</Button>
				</form>

				<p className="mt-6 text-center text-sm text-slate-400">
					Already have an account?{" "}
					<Link
						href="/login"
						className="font-medium text-blue-400 hover:text-blue-300"
					>
						Login
					</Link>
				</p>
			</div>
		</div>
	);
}