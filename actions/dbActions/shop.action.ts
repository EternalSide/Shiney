"use server";
import Shop from "@/database/models/shop.model";
import User from "@/database/models/user.model";
import entryDatabase from "@/lib/mongoose";
import {revalidatePath} from "next/cache";
import {
	CreateShopParams,
	DeleteShopParams,
	FollowShopParams,
	GetShopInfoParams,
	UpdateShopParams,
} from "./index.shared";
import Product from "@/database/models/product.model";

export const createShop = async (shopData: CreateShopParams) => {
	try {
		entryDatabase();

		const {name, link, description, clerkId, image, path} = shopData;

		const user = await User.findOne({clerkId});

		const newShop = await Shop.create({
			name,
			link,
			description,
			creator: user._id,
			avatar: image,
		});

		newShop.followers.push(user._id);

		await newShop.save();

		user.shops.push(newShop._id);

		await user.save();

		revalidatePath(path);

		return {
			shopLink: newShop.link,
		};
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const updateShop = async (params: UpdateShopParams) => {
	try {
		entryDatabase();

		const {shopLink, name, link, description, path, avatar} = params;

		const shop = await Shop.findOneAndUpdate(
			{link: shopLink},
			{name, link, description, avatar}
		);

		revalidatePath(path);

		// Без JSON будет ошибка.
		return JSON.parse(JSON.stringify(shop));
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const updateShopImages = async (params: any) => {
	try {
		entryDatabase();

		const {shopId, shopImage, path, shopBanner} = params;

		const shop = await Shop.findOneAndUpdate(
			{_id: shopId},
			{avatar: shopImage, banner: shopBanner}
		);

		revalidatePath(path);

		const shopLink = shop.link;

		return shopLink;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const getShopInfo = async (params: GetShopInfoParams) => {
	try {
		entryDatabase();

		const {name: link} = params;

		const shop = await Shop.findOne({link});

		if (!shop) return null;

		return shop;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const getShopProducts = async (params: GetShopInfoParams) => {
	try {
		entryDatabase();

		const {name} = params;

		const shop = await Shop.findOne({link: name}).populate({
			path: "products",
			model: Product,
			options: {
				populate: {
					path: "shop",
				},
			},
		});
		console.log(shop);
		if (!shop) return null;

		return shop.products;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const getNewProducts = async (params: {page: number}) => {
	try {
		entryDatabase();
		const {page} = params;

		if (page === 0) return {newProducts: [], isNextPage: false};

		const pageSize = 20;

		const skipAmount = (page - 1) * pageSize;

		const newProducts = await Product.find({})
			.populate({
				path: "shop",
				model: Shop,
			})
			.sort({createdAt: -1})
			.limit(pageSize)
			.skip(skipAmount);

		const totalNewProducts = await Product.countDocuments();

		const isNextPage = totalNewProducts > skipAmount + newProducts.length;
		return {newProducts, isNextPage};
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const deleteShop = async (params: DeleteShopParams) => {
	try {
		entryDatabase();

		const {shopId, path, clerkId} = params;

		await Shop.deleteOne({_id: shopId});
		await User.findOneAndUpdate({clerkId}, {$pull: {shops: shopId}});

		revalidatePath(path);
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const followShopAction = async (params: FollowShopParams) => {
	try {
		entryDatabase();

		const {shopLink: link, path, clerkId, isFollowing} = params;

		let updateQuery = {};
		let updateUserQuery = {};

		const updatedUser = await User.findOne({clerkId});

		if (isFollowing) {
			updateQuery = {
				$pull: {
					followers: updatedUser._id,
				},
			};
			updateUserQuery = {
				$pull: {
					followingShops: updatedUser._id,
				},
			};
		} else {
			updateQuery = {
				$addToSet: {
					followers: updatedUser._id,
				},
			};
			updateUserQuery = {
				$pull: {
					followingShops: updatedUser._id,
				},
			};
		}

		await User.findOneAndUpdate({clerkId}, updateUserQuery);
		await Shop.findOneAndUpdate({link}, updateQuery);

		revalidatePath(path);
	} catch (e) {
		console.log(e);
		throw e;
	}
};
