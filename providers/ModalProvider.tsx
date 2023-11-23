"use client";
import DeleteShopModal from "@/components/modals/DeleteShopModal";
import DevelopModal from "@/components/modals/DevelopModal";
import ShopAvatarModal from "@/components/modals/ShopAvatarModal";
import SupportModal from "@/components/modals/SupportModal";
import {useEffect, useState} from "react";

const ModalProvider = () => {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		setHydrated(true);
	}, []);

	if (!hydrated) return null;

	return (
		<>
			<SupportModal />
			<DeleteShopModal />
			<ShopAvatarModal />
			<DevelopModal />
			{/* <OverlayMain /> */}
		</>
	);
};
export default ModalProvider;
