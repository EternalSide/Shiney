"use client";
import {Moon, Sun} from "lucide-react";
import {useState} from "react";

const ThemeAction = () => {
	const [theme, setTheme] = useState("light");

	const onClick = () => {
		{
			theme === "light" ? setTheme("dark") : setTheme("light");
		}
	};
	return (
		<button
			onClick={onClick}
			className='flex items-end gap-1.5 z-[10]'
		>
			{theme === "light" ? (
				<Sun
					className='h-4 w-4 text-orange-500'
					fill='orange'
				/>
			) : (
				<Moon
					className='h-4 w-4 text-purle-500'
					fill='purple'
				/>
			)}

			<p className='text-xs font-semibold'>
				{theme === "light" ? "Светлая" : "Темная"}
			</p>
		</button>
	);
};
export default ThemeAction;
