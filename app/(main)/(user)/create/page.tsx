import CreateEditShopForm from "@/components/forms/CreateEditShopForm";

import {auth, redirectToSignIn} from "@clerk/nextjs";

const CreateShopPage = async () => {
	const {userId} = auth();
	if (!userId) redirectToSignIn();

	return (
		<div className='max-w-[1420px] w-full mx-auto p-6'>
			<div className='p-6 bg-white rounded-xl'>
				<h1 className='font-semibold text-2xl'>Создание магазина</h1>
				<CreateEditShopForm clerkId={userId!} />
			</div>
		</div>
	);
};
export default CreateShopPage;
