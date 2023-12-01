import Product from "@/database/models/product.model";
import Shop from "@/database/models/shop.model";
import entryDatabase from "@/lib/mongoose";

export const globalSearch = async (params: any) => {
	try {
		entryDatabase();
		const {query, page} = params;

		let pageLimit = 10;
		let skipAmount = (page - 1) * pageLimit;

		const regexQuery = {$regex: query, $options: "i"};

		const products = await Product.find({title: regexQuery})
			.populate({
				path: "shop",
				model: Shop,
				options: {
					select: "_id link name buyCount",
				},
			})
			.skip(skipAmount)
			.limit(pageLimit);

		if (!products)
			return {
				products: [],
				totalLength: 0,
				isNext: false,
			};

		const totalLength = await Product.countDocuments({title: regexQuery});
		const isNext = totalLength > products.length + skipAmount;

		return {products, totalLength, isNext};
	} catch (e) {
		console.log(e);
	}
};
