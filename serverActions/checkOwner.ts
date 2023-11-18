import {IUser} from "@/database/models/user.model";
import {Schema} from "mongoose";

const checkOwner = (user: IUser, shopId: string) => {
	const shopIds = user?.shops.map((id: Schema.Types.ObjectId) => id.toString());
	const isOwner = shopIds.includes(shopId.toString());
	if (!isOwner) return false;

	return true;
};
export default checkOwner;
