import {IProduct} from "@/database/models/product.model";
import {create} from "zustand";
import Cookies from "js-cookie";

interface KorzinaStore {
	products: any;
	addProduct: (newProduct: any) => void;
	updateProduct: (productId: string, data: any) => void;
	removeProduct: (productId: string) => void;
	clearAllProducts: () => void;
}

// Загрузка данных из куки
const getInitialProducts = () => {
	if (typeof window !== "undefined") {
		const productsCookie = Cookies.get("products");
		return productsCookie ? JSON.parse(productsCookie) : [];
	}
	return [];
};

// Сохранение данных в куках
const saveProductsToCookie = (products: any) => {
	return Cookies.set("products", JSON.stringify(products), {expires: 7}); // 7 дней
};

export const useKorzina = create<KorzinaStore>((set) => ({
	products: getInitialProducts(),
	addProduct: (newProduct) => {
		set((state) => {
			const products = [newProduct, ...state.products];

			saveProductsToCookie(products);

			return {products};
		});
	},
	updateProduct: (productId, data) => {
		set((state) => {
			const products = state.products.map((product: IProduct) =>
				product.id === productId ? {...product, ...data} : product
			);
			saveProductsToCookie(products);
			return {
				products,
			};
		});
	},
	removeProduct: (productId) => {
		set((state) => {
			const products = state.products.filter(
				(product: IProduct) => product.id !== productId
			);
			saveProductsToCookie(products);
			return {
				products,
			};
		});
	},
	clearAllProducts: () => {
		set(() => ({products: []}));
		Cookies.remove("products");
	},
}));
