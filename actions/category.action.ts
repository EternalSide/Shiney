"use server";

import { GetCategoryProductsParams } from "./index.shared";
import { db } from "@/lib/prisma";

export const getCategoryProducts = async (params: GetCategoryProductsParams) => {
	try {
		const { categoryHref, page } = params;

		let pageSize = 10;

		const skipAmount = (page - 1) * pageSize;

		if (!categoryHref) return { products: [], isNextPage: false, totalLength: 0 };

		const category = await db.category.findFirst({
			where: { href: categoryHref },
			include: {
				products: {
					include: {
						shop: {
							select: {
								name: true,
								link: true,
								buyCount: true,
								avatar: true,
							},
						},
					},
					orderBy: {
						createdAt: "desc",
					},
					take: pageSize,
					skip: skipAmount,
				},
			},
		});

		if (!category) return { products: [], isNextPage: false, totalLength: 0 };

		const totalLength = await db.product.count({ where: { categoryId: category.id } });

		const isNextPage = totalLength > category.products.length + skipAmount;

		return { products: category.products, isNextPage, totalLength };
	} catch (e) {
		console.log(e);
		throw e;
	}
};
