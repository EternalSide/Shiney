import { globalSearch } from "@/actions/general.action";
import { getUserProducts } from "@/actions/user.action";
import ProductCard from "@/components/cards/ProductCard";
import MainMenuLink from "@/components/shared/MainMenuLink";
import Pagination from "@/components/shared/Pagination";
import { noShopImage } from "@/constants";
import { auth } from "@clerk/nextjs";
import { ChevronRight } from "lucide-react";

interface Props {
	searchParams: {
		q: string;
		page?: string;
	};
}

const SearchPage = async ({ searchParams }: Props) => {
	const { userId } = auth();

	// Текущая страница
	const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;
	// @ts-ignore
	const { products, totalLength, isNext } = await globalSearch({
		searchQuery: searchParams.q,
		page: currentPage,
	});
	const userProducts = await getUserProducts({
		clerkId: userId,
	});

	return (
		<>
			<div className="mt-2 flex items-end gap-2">
				<MainMenuLink />
				<div className="flex items-center gap-2">
					<ChevronRight className="h-4 w-4 dark:text-zinc-400" />
					<p className="font-medium text-sm text-sky-500">Поиск</p>
				</div>
			</div>
			<h1 className="base-title mt-12">
				По запросу <span className="text-blue-500">“{searchParams?.q}”</span> найдено{" "}
				{totalLength} товаров
			</h1>
			<div className="grid_new-products !mt-2">
				{products?.length > 0 &&
					products.map((item: any) => (
						<ProductCard
							key={item.id}
							title={item.title}
							id={item.id}
							imgSrc={item?.picture || noShopImage}
							price={Number(item.price)}
							ratingNumber={5.0}
							ratingCounter={0}
							buyNumber={item.Shop.buyCount}
							shopName={item.Shop.name}
							shopLink={item.Shop.link}
							shopImage={item.Shop.avatar}
							description={item.description}
							clerkId={userId!}
							inFav={userProducts?.some(
								(product: any) => product.product.id === item.id
							)}
						/>
					))}
			</div>
			{products?.length >= 20 && <Pagination currentPage={currentPage} isNextPage={isNext} />}
		</>
	);
};
export default SearchPage;
