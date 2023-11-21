import MyShopCard from "@/components/cards/MyShopCard";
import {IShop} from "@/database/models/shop.model";
import {getUserShops} from "@/actions/dbActions/user.action";
import {auth} from "@clerk/nextjs";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: "Shiney / Мои магазины",
};

const ShopsPage = async () => {
	const {userId} = auth();

	const {shops} = await getUserShops({clerkId: userId});

	return (
		<div className='base-block'>
			<h1 className='base-title'>Мои магазины</h1>
			{shops?.length > 0 ? (
				<div className='mt-4 flex flex-col gap-8'>
					{shops.map((shop: IShop) => (
						<MyShopCard
							key={shop._id}
							name={shop.name}
							description={shop.description}
							link={shop.link}
							buyCount={shop.buyCount}
							productsCount={shop.products.length}
							clerkId={userId}
							avatar={shop.avatar}
						/>
					))}
				</div>
			) : (
				<h3 className='mt-4'>Ничего не найдено.</h3>
			)}
		</div>
	);
};
export default ShopsPage;
