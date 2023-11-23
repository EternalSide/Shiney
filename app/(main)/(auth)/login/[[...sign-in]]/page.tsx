import {SignIn} from "@clerk/nextjs";

export default function Page() {
	return (
		<SignIn
			appearance={{
				elements: {
					formButtonPrimary: "clerk__styles",
				},
			}}
		/>
	);
}
