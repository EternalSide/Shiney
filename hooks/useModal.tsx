import {create} from "zustand";

// Модалки, которые открываются хуком.
export type ModalType = "deleteShop" | "help" | "shopAvatar" | "development";

interface ModalStore {
	type: ModalType | null;
	isOpen: boolean;
	data: any;
	banner: boolean;
	onOpen: (type: ModalType, data?: any, banner?: boolean) => void;
	onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
	type: null,
	isOpen: false,
	banner: false,
	data: null,
	onOpen: (type, data = {}, banner) =>
		set({isOpen: true, type: type, data: data, banner: banner}),
	onClose: () => set({isOpen: false, type: null}),
}));
