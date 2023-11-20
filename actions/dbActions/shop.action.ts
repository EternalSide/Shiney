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

export const createShop = async (shopData: CreateShopParams) => {
	try {
		entryDatabase();

		const {name, link, description, clerkId} = shopData;

		const user = await User.findOne({clerkId});

		const newShop = await Shop.create({
			name,
			link,
			description,
			creator: user._id,
		});

		user.shops.push(newShop._id);

		await user.save();

		return newShop;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const updateShop = async (params: UpdateShopParams) => {
	try {
		entryDatabase();

		const {shopLink, name, link, description, path} = params;

		const shop = await Shop.findOneAndUpdate(
			{link: shopLink},
			{name, link, description}
		);

		revalidatePath(path);

		// Без JSON будет ошибка.
		return JSON.parse(JSON.stringify(shop));
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

export const deleteShopAction = async (params: DeleteShopParams) => {
	try {
		entryDatabase();

		// * TODO: Удалить у пользователя магазин

		const {shopLink: link, path} = params;

		await Shop.deleteOne({link});

		// await User.findByIdAndUpdate({link});

		revalidatePath(path);
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const followShopAction = async (params: FollowShopParams) => {
	try {
		entryDatabase();

		const {shopLink, path, clerkId, isFollowing} = params;

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
		await Shop.findOneAndUpdate({link: shopLink}, updateQuery);

		revalidatePath(path);
	} catch (e) {
		console.log(e);
		throw e;
	}
};
