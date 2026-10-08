import { useEffect, useState, useLayoutEffect } from "react";
import { useUIStore } from "@stores/useUIStore";

export function useTheme() {
  const theme = useUIStore((s) => s.theme);
  const [sysTheme, setSysTheme] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const resolvedTheme = theme === "auto" ? sysTheme : theme;

  useEffect(()=> {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setSysTheme(e.matches ? "dark" : "light");
    mql.addEventListener("change", handler);
    return ()=> mql.removeEventListener("change", handler);
  }, []);


  useLayoutEffect(()=> document.documentElement.setAttribute("data-theme", resolvedTheme), [resolvedTheme]);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.add("freeze");

    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => root.classList.remove("freeze"));
    });

    return () => {
      cancelAnimationFrame(id);
      root.classList.remove("freeze");
    };
  }, [resolvedTheme]);

  return resolvedTheme;
}