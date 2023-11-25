"use server";
import Shop from "@/database/models/shop.model";
import User from "@/database/models/user.model";
import entryDatabase from "@/lib/mongoose";
import {revalidatePath} from "next/cache";
import Product from "@/database/models/product.model";
import Category from "@/database/models/category.model";

export const addProductToShop = async (productData: any) => {
	try {
		entryDatabase();

		const {
			title,
			description,
			price,
			categories: categoryHref,
			userId,
			shopId,
			path,
		} = productData;

		// const user = await User.findById(userId);
		const shop = await Shop.findById(shopId);
		console.log(shop);
		const product = await Product.create({
			title,
			description,
			price,
			shop: shopId,
		});

		console.log(product);

		const category = await Category.findOne({
			href: categoryHref,
		});

		product.categories.push(category._id);

		await product.save();

		shop.products.push(product._id);

		await shop.save();

		category.products.push(product._id);

		await category.save();

		revalidatePath(path);
		console.log(product);
		return JSON.parse(JSON.stringify(product));
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const addProductToUserFav = async (params: any) => {
	try {
		entryDatabase();

		const {productId, userId, path, inFav} = params;
		let updateQuery = {};

		if (inFav) {
			updateQuery = {
				$pull: {
					savedProducts: productId,
				},
			};
		} else {
			updateQuery = {
				$push: {
					savedProducts: productId,
				},
			};
		}

		const user = await User.findOneAndUpdate({clerkId: userId}, updateQuery);

		revalidatePath(path);
	} catch (e) {
		console.log(e);
		throw e;
	}
};
