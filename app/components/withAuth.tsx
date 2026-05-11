"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../redux/hooks";
import api from "@/lib/axios";

export default function withAuth(Component: any) {
  return function ProtectedComponent(props: any) {
    const router = useRouter();
    const auth = useAppSelector((state: any) => state.auth);
    const getMe = async () => {
      try {
        const res = await api.post("/get-me")
      } catch (error) {
        
      }
    };
    useEffect(() => {
      if (!auth.user) {
        getMe();
      }
      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/login");
      }
    }, [router]);

    return <Component {...props} />;
  };
}