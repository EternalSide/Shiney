"use server";

import entryDatabase from "@/lib/mongoose";

import Product from "@/database/models/product.model";
import Category from "@/database/models/category.model";
import Shop from "@/database/models/shop.model";

export const getCategoryProducts = async (categoryHref: any) => {
	try {
		entryDatabase();

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
			},
		});

		return category.products;
	} catch (e) {
		console.log(e);
		throw e;
	}
};
