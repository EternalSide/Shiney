"use client";
import { useModal } from "@/hooks/useModal";
import { useTheme } from "@/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";

const ThemeAction = () => {
	const { onOpen } = useModal();
	const { mode, setMode } = useTheme();
	// const onClick = () => {
	// 	mode === "light" ? setTheme("dark") : setTheme("light");
	// 	onOpen("development", "На данный момент смена темы не доступна 😔");
	// };
	const onClick = () => {
		if (localStorage?.theme && localStorage.theme === "dark") {
			setMode("light");
			document.documentElement.classList.remove("dark");
			localStorage.theme = "light";
		} else {
			setMode("dark");
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		}
	};

	return (
		<button onClick={onClick} className="flex items-end gap-1.5 z-[10]">
			{mode === "light" ? (
				<Sun className="h-4 w-4 text-orange-500" fill="orange" />
			) : (
				<Moon className="h-4 w-4 text-indigo-500" />
			)}
			<p className="text-xs font-semibold  dark:text-[#626d7a]">
				{mode === "light" ? "Светлая" : "Темная"}
			</p>
		</button>
	);
};
export default ThemeAction;
