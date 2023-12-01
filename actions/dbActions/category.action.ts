import entryDatabase from "@/lib/mongoose";
import Product from "@/database/models/product.model";
import Category from "@/database/models/category.model";
import Shop from "@/database/models/shop.model";

interface GetCategoryProductsParams {
	page: number;
	categoryHref: string | undefined;
}

export const getCategoryProducts = async (
	params: GetCategoryProductsParams
) => {
	try {
		entryDatabase();

		const {categoryHref, page} = params;

		let pageSize = 10;

		const skipAmount = (page - 1) * pageSize;

		const category = await Category.findOne({
			href: categoryHref,
		}).populate({
			path: "products",
			model: Product,

			options: {
				populate: {
					path: "shop",
					model: Shop,
					select: "_id name link buyCount",
				},
				skip: skipAmount,
				limit: pageSize,
			},
		});

		const totalLength = await Product.countDocuments({category: category._id});

		const isNextPage = totalLength > category.products.length + skipAmount;

		return {products: category.products, isNextPage, totalLength};
	} catch (e) {
		console.log(e);
		throw e;
	}
};
