"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getMe } from "../redux/slices/authSlice";

export default function AuthInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    // Check if a token exists in local storage
    const token = localStorage.getItem("token");
    
    // If the token exists but there's no user in the store, fetch the user data
    if (token && !user) {
      dispatch(getMe());
    }
  }, [dispatch, user]);

  return <>{children}</>;
}
