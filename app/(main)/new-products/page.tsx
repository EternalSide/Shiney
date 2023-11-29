import {getNewProducts} from "@/actions/dbActions/shop.action";
import {getUserProducts} from "@/actions/dbActions/user.action";
import Pagination from "@/components/shared/Pagination";
import ProductCard from "@/components/cards/ProductCard";
import {noShopImage} from "@/constants";
import {auth} from "@clerk/nextjs";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: "Shiney / Новинки",
};

interface Props {
	searchParams: {
		[key: string]: string | undefined;
	};
}

const NewProductsPage = async ({searchParams}: Props) => {
	const {userId} = auth();

	const userProducts = await getUserProducts({
		clerkId: userId,
	});

	// Текущая страница
	const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;

	const {newProducts, isNextPage} = await getNewProducts({
		page: currentPage,
	});

	return (
		<>
			<h1 className='base-title'>Новинки</h1>
			<div className='grid_new-products'>
				{newProducts?.length > 0 ? (
					newProducts.map((item: any) => (
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
					<h1 className='text-[#626d7a] font-semibold text-2xl'>
						Ничего не найдено
					</h1>
				)}
			</div>
			<Pagination
				currentPage={currentPage}
				isNextPage={isNextPage}
			/>
		</>
	);
};
export default NewProductsPage;
