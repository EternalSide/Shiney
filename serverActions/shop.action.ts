"use server";
import Shop from "@/database/models/shop.model";
import User from "@/database/models/user.model";
import entryDatabase from "@/lib/mongoose";
import {revalidatePath} from "next/cache";

export const createShop = async (shopData: any) => {
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
// sadsadsadsa// sadsadsadsa// sadsadsadsa
export const updateShop = async (updatedData: any) => {
	try {
		entryDatabase();
		const {shopLink, name, link, description, path} = updatedData;
		const shop = await Shop.findOneAndUpdate(
			{link: shopLink},
			{name, link, description}
		);
		// Иначе ошибка вылетает
		revalidatePath(path);
		return JSON.parse(JSON.stringify(shop));
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const getShopInfo = async (params: any) => {
	try {
		entryDatabase();

		const {name} = params;

		const shop = await Shop.findOne({
			link: name,
		});

		if (!shop) return null;

		return shop;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const deleteShopAction = async (params: any) => {
	try {
		entryDatabase();

		const {shopLink, path} = params;

		const shop = await Shop.deleteOne({
			link: shopLink,
		});

		revalidatePath(path);
	} catch (e) {
		console.log(e);
		throw e;
	}
};
