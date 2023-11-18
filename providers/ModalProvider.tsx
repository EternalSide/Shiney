"use client";
import DeleteShopModal from "@/components/modals/DeleteShopModal";
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
		</>
	);
};
export default ModalProvider;
