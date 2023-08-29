"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import LargeBtn from "@/components/LargeBtn";

type Props = {};

export default function ThemeBtn({}: Props) {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(true);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = async () => {
        const theme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(theme);
        await fetch(`api/set-theme?scheme=${theme}`);
    };

    return (
        <div>
            <LargeBtn onClick={toggleTheme}>Toggle Dark Theme</LargeBtn>
        </div>
    );
}
