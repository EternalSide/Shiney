import {getShopInfo} from "@/serverActions/shop.action";
import {redirect} from "next/navigation";

interface ShopPageProps {
	params: {
		name: string;
	};
}

const ShopPage = async ({params}: ShopPageProps) => {
	const {name} = params;

	const shop = await getShopInfo({name});
	if (!shop) redirect("/");

	return (
		<div className='max-w-[1420px] w-full mx-auto p-6'>
			<h1>Магазин - {name}</h1>
		</div>
	);
};
export default ShopPage;
