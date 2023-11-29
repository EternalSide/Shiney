import ProductCard from "@/components/cards/ProductCard";
import CategoriesMenu from "@/components/shared/CategoriesMenu";
import {getCategory} from "@/lib/allCategories";
import {Suspense} from "react";
import Loading from "./loading";
import {ParamsName} from "@/types";
import {getCategoryProducts} from "@/actions/dbActions/category.action";
import {noShopImage} from "@/constants";
import {auth} from "@clerk/nextjs";
import {getUserProducts} from "@/actions/dbActions/user.action";

const CategoryPage = async ({params}: ParamsName) => {
	const {userId} = auth();
	const userProducts = await getUserProducts({clerkId: userId});

	const {
		accumulator,
		noCategory,
		activeTitle,
		currentCategory,
		isMainCategory,
	} = getCategory(params.name);

	const categoryProducts = await getCategoryProducts(
		currentCategory?.href || isMainCategory?.href
	);

	if (noCategory) {
		return (
			<h1 className='base-title'>
				Категории <span className='text-blue-500'>{params.name}</span> не
				существует
			</h1>
		);
	}

	return (
		<>
			<CategoriesMenu
				currentCategory={activeTitle}
				accumulator={accumulator}
			/>
			<div className='mt-12'>
				<div className='flex items-center gap-2.5'>
					<h1 className='base-title'>{activeTitle}</h1>
					<p className='text-[#626d7a] font-semibold mt-0.5'>
						{categoryProducts.length} Товаров
					</p>
				</div>
				<div className='mt-4 flex items-start h-full'>
					<Suspense fallback={<Loading />}>
						{categoryProducts?.length > 0 ? (
							<div className='grid max-[520px]:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full'>
								{categoryProducts.map((item: any) => (
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
							<div className='flex justify-center items-center mt-10 w-full'>
								<h1 className='text-[#626d7a] font-semibold text-2xl'>
									Ничего не найдено
								</h1>
							</div>
						)}
					</Suspense>
				</div>
			</div>
		</>
	);
};
export default CategoryPage;
