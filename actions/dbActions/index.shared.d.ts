interface ShopName {
	name: string;
}

export interface CreateShopParams extends ShopName {
	link: string;
	description: string;
	clerkId: string;
	image: string;
	path: string;
}

export interface GetShopInfoParams extends ShopName {}

export interface DeleteShopParams {
	shopLink: string;
	path: string;
}

export interface FollowShopParams {
	shopLink: string;
	path: string;
	clerkId: string | null;
	isFollowing: boolean;
}

export interface UpdateShopParams {
	shopLink: string;
	name: string;
	avatar: string;
	link: string;
	description: string;
	path: string;
}

export interface CreateUserParams {
	clerkId: string;
	name: string;
	username: string;
	email: string;
	picture: string;
}
