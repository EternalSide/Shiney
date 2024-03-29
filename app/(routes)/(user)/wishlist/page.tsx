import { getUserProducts } from "@/actions/user.action";
import ProductCard from "@/components/cards/ProductCard";
import { noShopImage } from "@/constants";
import { auth } from "@clerk/nextjs";
import { Favorite } from "@prisma/client";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Shiney / Избранное ",
};

const WishListPage = async () => {
	const { userId } = auth();
	const userProducts = await getUserProducts({ clerkId: userId });

	return (
		<>
			<h1 className="base-title">Избранное</h1>
			<div className="mt-4 grid max-[520px]:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 !gap-6">
				{userProducts && userProducts.length > 0 ? (
					userProducts?.map((item: (typeof userProducts)[0]) => (
						<ProductCard
							key={item.id}
							title={item.product.title}
							id={item.productId}
							imgSrc={item.product.picture || noShopImage}
							price={Number(item.product.price)}
							ratingNumber={5.0}
							ratingCounter={0}
							buyNumber={item?.product.shop.buyCount}
							shopName={item?.product.shop.name}
							shopLink={item?.product.shop.link}
							description={item.product.description}
							shopImage={item?.product.shop.avatar!}
							clerkId={userId!}
							inFav={userProducts.some((product: Favorite) => product.id === item.id)}
						/>
					))
				) : (
					<h3 className="dark:text-white">Ничего не найдено.</h3>
				)}
			</div>
		</>
	);
};
export default WishListPage;
