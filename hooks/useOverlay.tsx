// import {create} from "zustand";

// interface OverlayStore {
// 	isOpen: boolean;
// 	onOpen: (zIndex: string, ref: any) => void;
// 	zIndex: string;
// 	onClose: () => void;
// 	ref: any;
// }

// export const useOverlay = create<OverlayStore>((set) => ({
// 	isOpen: false,
// 	zIndex: "z-[0]",
// 	ref: null,
// 	onOpen: (zIndex: string, ref: any) => set({isOpen: true, zIndex, ref}),
// 	onClose: () => set({isOpen: false}),
// }));
