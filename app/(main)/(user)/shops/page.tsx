import MyShopCard from "@/components/cards/MyShopCard";
import {IShop} from "@/database/models/shop.model";
import {getUserShops} from "@/serverActions/user.action";
import {auth} from "@clerk/nextjs";

const ShopsPage = async () => {
	const {userId} = auth();
	const {shops} = await getUserShops({clerkId: userId});

	return (
		<div className='max-w-[1420px] w-full mx-auto p-6'>
			<div className='p-6 bg-white rounded-xl'>
				<h1 className='font-semibold text-2xl'>Мои магазины</h1>
				{shops?.length > 0 ? (
					<div className='mt-4 flex flex-col gap-10'>
						{shops.map((shop: IShop) => (
							<MyShopCard
								key={shop._id}
								name={shop.name}
								description={shop.description}
								link={shop.link}
								buyCount={shop.buyCount}
								productsCount={shop.products.length}
							/>
						))}
					</div>
				) : (
					<h3 className='mt-4'>Ничего не найдено.</h3>
				)}
			</div>
		</div>
	);
};
export default ShopsPage;
