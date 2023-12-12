"use server";
import { GlobalSearchParams } from "./index.shared";
import { db } from "@/lib/prisma";

export const globalSearch = async (params: GlobalSearchParams) => {
	try {
		const { searchQuery, page } = params;

		let pageLimit = 10;

		let skipAmount = (page - 1) * pageLimit;

		const products = await db.product.findMany({
			where: {
				title: {
					contains: searchQuery,
				},
			},
			include: {
				Shop: {
					select: {
						id: true,
						link: true,
						name: true,
						buyCount: true,
					},
				},
			},
			skip: skipAmount,
			take: pageLimit,
		});

		const noResultsFound = {
			products: [],
			totalLength: 0,
			isNext: false,
		};

		if (!products) return noResultsFound;

		const totalLength = await db.product.count({
			where: {
				title: {
					contains: searchQuery,
				},
			},
		});

		const isNext = totalLength > products.length + skipAmount;

		return { products, totalLength, isNext };
	} catch (e) {
		console.log(e);
	}
};
