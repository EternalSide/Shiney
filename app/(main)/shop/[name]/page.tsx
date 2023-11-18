import ShopBanner from "@/components/shop/ShopBanner";
import ShopHeader from "@/components/shop/ShopHeader";
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
			<div className='rounded-lg'>
				<ShopBanner />
				<ShopHeader shopName={shop.name} />
				<div className='h-[2000px] bg-white rounded-lg mt-6 p-6'>a</div>
			</div>
		</div>
	);
};
export default ShopPage;
