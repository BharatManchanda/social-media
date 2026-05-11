"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { loginUser } from "../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});
	const dispatch = useAppDispatch();
	const router = useRouter();
	const auth = useAppSelector((state: any) => state.auth);
	const token = localStorage.getItem("token")
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await dispatch(loginUser({
			email: form.email,
			password: form.password,
		}))
	}

	useEffect(() => {
		if (auth.user || token) {
		  router.push("/");
		}
	}, [auth, router])

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4">
			<div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl">

			<div className="mb-8 text-center">
				<h1 className="text-3xl font-bold text-slate-800">
					Loopin
				</h1>

				<p className="mt-2 text-sm text-slate-500">
					Login to continue your journey
				</p>
			</div>

			<form onSubmit={handleSubmit} className="flex flex-col gap-5">

				<Input
					type="email"
					placeholder="Email address"
					icon={<Mail size={18} />}
					onChange={(e) =>
						setForm({ ...form, email: e.target.value })
					}
				/>

				<Input
					type="password"
					placeholder="Password"
					icon={<Lock size={18} />}
					onChange={(e) =>
						setForm({ ...form, password: e.target.value })
					}
				/>

				<div className="flex justify-end">
				<Link
					href="/forgot"
					className="text-xs text-slate-500 transition hover:text-blue-500"
				>
					Forgot password?
				</Link>
				</div>

				<Button type="submit" loading={auth.loading}>
					<LogIn size={18} />
					Login
				</Button>
			</form>

			<p className="mt-6 text-center text-sm text-slate-500">
				Don't have an account?{" "}
				<Link
					href="/register"
					className="font-medium text-blue-600 hover:text-blue-500"
				>
					Create account
				</Link>
			</p>
		</div>
	</div>
	);
}