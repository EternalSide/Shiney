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
      shopId: string;
      path: string;
}

export interface FollowShopParams {
      shopLink: string;
      path: string;
      clerkId: string;
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

export interface GetCategoryProductsParams {
      page: number;
      categoryHref: string | undefined;
}

export interface GlobalSearchParams {
      searchQuery: string;
      page: number;
}

export interface ProductData {
      title: string;
      description: string;
      price: string;
      categories: string;
      shopId: string;
      path: string;
      avatar: string | null;
}

export interface AddProductToUserFavData {
      productId: string;
      userId: string;
      path: string;
      inFav: any;
}

export interface UpdateShopImages {
      shopId: string;
      shopImage: string;
      path: string;
      shopBanner: string;
}

export interface GetNewProductsParams {
      page: number;
}
