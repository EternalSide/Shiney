"use client";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {useModal} from "@/hooks/useModal";
import Image from "next/image";

const ShopAvatarModal = () => {
	const {isOpen, onClose, type, data} = useModal();
	const modalOpen = type === "shopAvatar" && isOpen;

	if (!modalOpen) return null;

	return (
		<>
			<Dialog
				open={modalOpen}
				onOpenChange={() => onClose()}
			>
				<DialogContent className='border-none'>
					<div className='w-64 min-h-[500px]'>
						<Image
							className='object-cover object-center'
							alt='Изображение магазина'
							fill
							src={data}
						/>
					</div>
				</DialogContent>
			</Dialog>
			<div className='z-[900] fixed bottom-2 right-3 text-lg font-bold text-sky-400'></div>
		</>
	);
};
export default ShopAvatarModal;
