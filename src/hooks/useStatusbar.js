import { useEffect } from "react";

export function useStatusbar(val, theme) {
    useEffect(() => {
        if (!val) return;

        const el = document.createElement("div");
        el.style.color = `var(${val})`;
        el.style.display = "none";
        document.body.appendChild(el);

        const color = getComputedStyle(el).color;
        document.body.removeChild(el);

        if (!color) return;

        let meta = document.querySelector('meta[name="theme-color"]');
        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("name", "theme-color");
            document.head.appendChild(meta);
        }

        meta.setAttribute("content", color);
    }, [val, theme]);
}