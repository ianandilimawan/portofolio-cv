"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {mounted ? children : (
        <div className="min-h-screen bg-white dark:bg-[#0d0d0d]" />
      )}
    </ThemeProvider>
  );
}
