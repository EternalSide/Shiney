import {getShopProducts} from "@/actions/dbActions/shop.action";
import {getUserProducts} from "@/actions/dbActions/user.action";
import ProductCard from "@/components/cards/ProductCard";
import {noShopImage} from "@/constants";
import {auth} from "@clerk/nextjs";

interface ShopPageProps {
	params: {
		name: string;
	};
}

const ShopProductsPage = async ({params}: ShopPageProps) => {
	// const shop = await checkShop(params.name);

	const {userId} = auth();

	const shopProducts = await getShopProducts({name: params.name});
	const userProducts = await getUserProducts({clerkId: userId});
	return (
		<>
			<h3 className='text-3xl font-bold mt-8 '>
				Товары <span className='text-zinc-500'>{shopProducts.length}</span>
			</h3>
			<div>
				{shopProducts?.length > 0 ? (
					<div className='grid mt-6 max-[520px]:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-full max-md:gap-3'>
						{shopProducts.map((item: any) => (
							<ProductCard
								key={item._id}
								title={item.title}
								id={item._id.toString()}
								imgSrc={item?.image || noShopImage}
								price={Number(item.price)}
								ratingNumber={5.0}
								ratingCounter={item.comments.length}
								buyNumber={item.shop.buyCount}
								shopName={item.shop.name}
								shopLink={item.shop.link}
								description={item.description}
								clerkId={userId!}
								inFav={userProducts.some(
									(product: any) =>
										product._id.toString() === item._id.toString()
								)}
							/>
						))}
					</div>
				) : (
					<div className='flex justify-start items-center mt-6 w-full'>
						<h1 className='text-[#626d7a] font-semibold text-xl'>
							Магазин не добавил товаров
						</h1>
					</div>
				)}
			</div>
		</>
	);
};
export default ShopProductsPage;
