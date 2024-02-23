import { auth } from "@clerk/nextjs";
import ProductCard from "../cards/ProductCard";
import { getUserProducts } from "@/actions/user.action";
import { getNewProducts } from "@/actions/shop.action";
import { noShopImage } from "@/constants";

const SpecialOffers = async () => {
	const { userId } = auth();

	const userProducts = await getUserProducts({
		clerkId: userId,
	});

	const { newProducts } = await getNewProducts({
		page: 1,
	});

	return (
		<div className="mt-10">
			<h3 className="main-title">Новинки</h3>
			<div className="mt-4 grid max-md:grid-cols-2 max-md:gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
				{newProducts?.length > 0 ? (
					newProducts.map((item: any) => (
						<ProductCard
							key={item.id}
							title={item.title}
							id={item.id}
							imgSrc={item?.picture || noShopImage}
							price={Number(item.price)}
							ratingNumber={"0.00"}
							ratingCounter={0}
							buyNumber={item.shop.buyCount}
							shopName={item.shop.name}
							shopLink={item.shop.link}
							shopImage={item.shop.avatar}
							description={item.description}
							clerkId={userId!}
							inFav={userProducts?.some(
								(product: (typeof userProducts)[0]) =>
									product.product.id === item.id
							)}
						/>
					))
				) : (
					<h1 className="text-[#626d7a] font-semibold text-2xl">Ничего не найдено</h1>
				)}
			</div>
		</div>
	);
};
export default SpecialOffers;
