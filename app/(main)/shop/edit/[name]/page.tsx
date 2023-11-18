import CreateEditShopForm from "@/components/forms/CreateEditShopForm";
import {getShopInfo} from "@/serverActions/shop.action";
import {getUserInfo} from "@/serverActions/user.action";

import {auth, redirectToSignIn} from "@clerk/nextjs";
import {redirect} from "next/navigation";

const EditShopPage = async ({params}: {params: {name: string}}) => {
	const {userId} = auth();
	if (!userId) redirectToSignIn();
	const user = await getUserInfo({clerkId: userId});

	const shop = await getShopInfo({name: params.name});
	if (!shop) redirect("/");

	// Если не создатель магазина
	const shopIds = user?.shops.map((id: any) => id.toString());
	const isOwner = shopIds.includes(shop._id.toString());
	if (!isOwner) redirect("/");

	return (
		<div className='max-w-[1420px] w-full mx-auto p-6'>
			<div className='p-6 bg-white rounded-xl'>
				<h1 className='font-semibold text-2xl'>Редактировать магазин</h1>
				<CreateEditShopForm
					clerkId={userId!}
					shopData={JSON.stringify(shop)}
					type='Edit'
				/>
			</div>
		</div>
	);
};
export default EditShopPage;
