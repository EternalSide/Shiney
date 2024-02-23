"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
	mode: string;
	setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [mode, setMode] = useState("dark");
	const [h, setH] = useState(false);

	const handleThemeChange = () => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setMode("dark");
			document.documentElement.classList.add("dark");
		} else {
			setMode("light");
			document.documentElement.classList.remove("dark");
		}
	};

	useEffect(() => {
		handleThemeChange();
	}, []);

	return <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error("Ошибка, возможная причина: Layout.tsx не обернут в ThemeProvider.");
	}
	return context;
};
