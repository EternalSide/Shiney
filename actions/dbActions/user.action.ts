"use server";
import Shop from "@/database/models/shop.model";
import User from "@/database/models/user.model";
import entryDatabase from "@/lib/mongoose";
import {CreateUserParams} from "./index.shared";
import Product from "@/database/models/product.model";

export const createUser = async (userData: CreateUserParams) => {
	try {
		entryDatabase();

		const user = await User.create(userData);

		return user;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const getUserShops = async (params: {clerkId: string}) => {
	try {
		entryDatabase();

		const {clerkId} = params;

		const user = await User.findOne({clerkId}).populate({
			path: "shops",
			model: Shop,
			options: {sort: {createdOn: -1}},
		});

		return {
			shops: user.shops,
		};
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const getUserProducts = async (params: {clerkId: string | null}) => {
	try {
		entryDatabase();

		const {clerkId} = params;

		const user = await User.findOne({clerkId}).populate({
			path: "savedProducts",
			model: Product,
			options: {
				sort: {createdOn: -1},
				populate: {
					path: "shop",
					select: "name _id buyCount rating link",
				},
			},
		});

		return user.savedProducts;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const getUserInfo = async (params: {clerkId: string}) => {
	try {
		entryDatabase();

		const {clerkId} = params;

		const user = await User.findOne({clerkId});

		if (!user) return null;

		return user;
	} catch (e) {
		console.log(e);
		throw e;
	}
};
