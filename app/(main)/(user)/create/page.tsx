import CreateEditShopForm from "@/components/forms/CreateEditShopForm";
import {auth, redirectToSignIn} from "@clerk/nextjs";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: "Shiney / Создание магазина",
};

const CreateShopPage = async () => {
	const {userId} = auth();
	if (!userId) redirectToSignIn();

	return (
		<div className='base-block'>
			<h1 className='base-title'>Создание магазина</h1>
			<CreateEditShopForm clerkId={userId!} />
		</div>
	);
};
export default CreateShopPage;
