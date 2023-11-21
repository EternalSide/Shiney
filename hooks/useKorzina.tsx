import {IProduct} from "@/database/models/product.model";
import {create} from "zustand";

interface KorzinaStore {
	products: IProduct[];
	addProduct: (newProduct: IProduct) => void;
	updateProduct: (
		productId: string,
		update: (data: Partial<IProduct>) => any
	) => void;
	removeProduct: (productId: string) => void;
}

export const useKorzina = create<KorzinaStore>((set) => ({
	products: [],
	addProduct: (newProduct) => {
		set((state) => ({products: [newProduct, ...state.products]}));
	},
	updateProduct: (productId, update) => {
		set((state) => ({
			products: state.products.map((product: IProduct) =>
				product.id === productId ? {...product, ...update(product)} : product
			),
		}));
	},
	removeProduct: (productId) => {
		set((state) => ({
			products: state.products.filter(
				(product: IProduct) => product.id !== productId
			),
		}));
	},
}));
