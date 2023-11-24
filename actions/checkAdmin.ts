import {auth} from "@clerk/nextjs";
import {getUserInfo} from "./dbActions/user.action";
import {getShopInfo} from "./dbActions/shop.action";
import {redirect} from "next/navigation";
import checkOwner from "./checkOwner";
import {IShop} from "@/database/models/shop.model";
import {IUser} from "@/database/models/user.model";

// Проверка админки, пользователя и магазина
const checkAdmin = async (shopName: string) => {
	const {userId} = auth();

	if (!userId) return redirect("/");

	const user: IUser = await getUserInfo({clerkId: userId});

	if (!user) return redirect("/");

	const shop: IShop = await getShopInfo({name: shopName});

	if (!shop) return redirect("/");

	const isOwner = checkOwner(user, shop._id.toString());

	if (!isOwner) return redirect("/");

	return {clerkId: userId, user, shop, isOwner};
};
export default checkAdmin;
