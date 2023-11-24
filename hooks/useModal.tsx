import {create} from "zustand";

// Модалки, которые открываются хуком.
export type ModalType = "deleteShop" | "help" | "shopAvatar" | "development";

interface shopData {
	shopId: string;
	shopAvatar: string;
	shopBanner: string;
	clerkId: string;
}

interface ModalStore {
	type: ModalType | null;
	isOpen: boolean;
	data: shopData | any;
	banner: boolean;
	onOpen: (type: ModalType, data?: shopData | any, banner?: boolean) => void;
	onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
	type: null,
	isOpen: false,
	banner: false,
	data: null,
	onOpen: (type, data, banner) => set({isOpen: true, type, data, banner}),
	onClose: () => set({isOpen: false, type: null}),
}));
