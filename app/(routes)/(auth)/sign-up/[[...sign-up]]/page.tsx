"use client";
import { useTheme } from "@/providers/ThemeProvider";
import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
	const { mode } = useTheme();
	return (
		<SignUp
			appearance={{
				elements: {
					formButtonPrimary: "clerk__styles",
					footerActionLink: "text-sky-500 hover:text-sky-600",
				},
				baseTheme: mode === "dark" ? dark : undefined,
			}}
		/>
	);
}
