import {SignUp} from "@clerk/nextjs";

export default function Page() {
	return (
		<SignUp
			appearance={{
				elements: {
					formButtonPrimary: "bg-sky-400 hover:bg-sky-500",
				},
			}}
		/>
	);
}
