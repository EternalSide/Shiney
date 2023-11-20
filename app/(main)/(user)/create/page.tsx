import CreateEditShopForm from "@/components/forms/CreateEditShopForm";

import {auth, redirectToSignIn} from "@clerk/nextjs";

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
