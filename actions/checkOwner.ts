import {IUser} from "@/database/models/user.model";
import {Schema} from "mongoose";

// Проверка является ли пользователь владельцем магазина
const checkOwner = (user: IUser, shopId: string): boolean => {
	const shopIds = user?.shops.map((id: Schema.Types.ObjectId) => id.toString());

	const isOwner = shopIds.includes(shopId.toString());

	if (!isOwner) return false;

	return true;
};
export default checkOwner;
