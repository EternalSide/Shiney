import {create} from "zustand";

export type ModalType = "deleteShop" | "help" | "shopAvatar" | "development";

interface ModalStore {
	type: ModalType | null;
	isOpen: boolean;
	data: any;
	onOpen: (type: ModalType, data?: any) => void;
	onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
	type: null,
	isOpen: false,
	data: null,
	onOpen: (type, data = {}) => set({isOpen: true, type: type, data: data}),
	onClose: () => set({isOpen: false, type: null}),
}));
