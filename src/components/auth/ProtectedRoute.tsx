"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isLoggedIn) {
      router.push("/auth/sign-in");
    }
  }, [mounted, isLoggedIn, router]);

  if (!mounted) return null; // Avoid hydration mismatch

  if (!isLoggedIn) return null; // Wait for redirect to happen

  return <>{children}</>;
}
