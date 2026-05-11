"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { UserRegisterData } from "../types/register.type";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { createUser } from "../redux/slices/userSlice";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState<UserRegisterData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useAppDispatch();
  const router = useRouter();
  const auth = useAppSelector((state: any) => state.auth);
	const token = localStorage.getItem("token")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(createUser(form));
  };

  useEffect(() => {
		if (auth.user || token) {
		  router.push("/");
		}
	}, [auth, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4">

      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Join our community
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <Input
            type="text"
            placeholder="Full name"
            icon={<User size={18} />}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

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

          <Input
            type="password"
            placeholder="Confirm Password"
            icon={<Lock size={18} />}
            onChange={(e) =>
              setForm({
                ...form,
                confirmPassword: e.target.value,
              })
            }
          />

          <Button type="submit">
            <UserPlus size={18} />
            Create Account
          </Button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
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