"use server";
import Shop from "@/database/models/shop.model";
import User from "@/database/models/user.model";
import entryDatabase from "@/lib/mongoose";

export const createUser = async (userData: any) => {
	try {
		entryDatabase();

		const user = await User.create(userData);

		return user;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const getUserShops = async (params: any) => {
	try {
		entryDatabase();
		const {clerkId} = params;

		const user = await User.findOne({clerkId}).populate({
			path: "shops",
			model: Shop,
		});

		return {
			shops: user.shops,
		};
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

		return user;
	} catch (e) {
		console.log(e);
		throw e;
	}
};
