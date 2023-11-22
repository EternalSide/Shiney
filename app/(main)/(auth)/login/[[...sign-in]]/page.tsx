import {SignIn} from "@clerk/nextjs";

export default function Page() {
	return (
		<SignIn
			appearance={{
				elements: {
					formButtonPrimary: "bg-sky-400 hover:bg-sky-500",
				},
			}}
		/>
	);
}
