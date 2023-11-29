"use client";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {useModal} from "@/hooks/useModal";
import {cn} from "@/lib/utils";
import Image from "next/image";

const ShopAvatarModal = () => {
	const {isOpen, onClose, type, data, banner} = useModal();
	const modalOpen = type === "shopAvatar" && isOpen;

	if (!modalOpen) return null;

	return (
		<Dialog
			open={modalOpen}
			onOpenChange={onClose}
		>
			<DialogContent
				className={cn("border-none", banner && "w-full max-w-[1420px] h-64")}
			>
				<div className={cn(banner ? "h-64 w-full" : "w-64 min-h-[500px]")}>
					<Image
						className='object-cover object-center'
						alt='Изображение магазина'
						fill
						src={data}
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
};
export default ShopAvatarModal;
