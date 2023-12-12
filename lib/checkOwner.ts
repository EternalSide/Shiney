// asdad
import { Shop } from "@prisma/client";
import { UserWishShops } from "./checkAdmin";

// Функция проверяет только является ли пользователь владельцем магазина
const checkOwner = (user: UserWishShops, shopId: string): boolean => {
	const isOwner = user.shops.some((shop: Shop) => shop.id === shopId);

	return isOwner;
};
export default checkOwner;
