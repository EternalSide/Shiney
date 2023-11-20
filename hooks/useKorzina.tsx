import {create} from "zustand";

interface KorzinaStore {
	products: any;
}

export const useKorzina = create<KorzinaStore>((set) => ({
	products: [],
}));
