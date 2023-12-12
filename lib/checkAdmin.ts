import { auth } from "@clerk/nextjs";
import { getUserInfo } from "@/actions/user.action";
import { getShopInfo } from "@/actions/shop.action";
import { redirect } from "next/navigation";
import checkOwner from "./checkOwner";
import { Shop, User } from "@prisma/client";

export interface UserWishShops extends User {
	shops: Shop[];
}

// Проверка админки, пользователя и магазина
const checkAdmin = async (shopName: string) => {
	const { userId } = auth();

	if (!userId) return redirect("/");

	const user: UserWishShops | null = await getUserInfo({ clerkId: userId });

	// Пользователя нет.
	if (!user) return redirect("/");

	const shop = await getShopInfo({ name: shopName });

	// Нет такого магазина
	if (!shop) return redirect("/");

	const isOwner = checkOwner(user, shop.id);

	// Пользователь не администратор
	if (!isOwner) return redirect("/");

	return { clerkId: userId, user, shop, isOwner };
};
export default checkAdmin;
