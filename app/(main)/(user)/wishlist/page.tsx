import {getUserInfo, getUserProducts} from "@/actions/dbActions/user.action";
import ProductCard from "@/components/cards/ProductCard";
import {noShopImage} from "@/constants";
import {auth} from "@clerk/nextjs";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: "Shiney / Избранное ",
};

const WishListPage = async () => {
	const {userId} = auth();
	const userProducts = await getUserProducts({clerkId: userId});

	return (
		<>
			<h1 className='base-title'>Избранное</h1>
			<div className='mt-4 grid max-[520px]:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 !gap-6'>
				{userProducts?.length > 0 ? (
					userProducts.map((item: any) => (
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
								(product: any) => product._id.toString() === item._id.toString()
							)}
						/>
					))
				) : (
					<div>Ничего не найдено</div>
				)}
			</div>
		</>
	);
};
export default WishListPage;
