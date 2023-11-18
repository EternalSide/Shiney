"use client";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {useModal} from "@/hooks/useModal";
import {DialogDescription} from "@radix-ui/react-dialog";
import {Button} from "../ui/button";
import {toast} from "../ui/use-toast";
import {deleteShopAction} from "@/serverActions/shop.action";
import {usePathname} from "next/navigation";

const DeleteShopModal = () => {
	const {isOpen, onClose, type, data: shopLink} = useModal();
	const modalOpen = type === "deleteShop" && isOpen;
	const path = usePathname();
	const deleteShop = async () => {
		try {
			await deleteShopAction({shopLink, path});
			onClose();
			toast({
				title: "Действие совершенно ✔️",
				description: "Вся информация удалена.",
			});
		} catch (e) {
			toast({
				title: "Что-то пошло не так...",
				description: "Попробуйте еще раз",
				variant: "destructive",
			});
		}
	};

	return (
		<Dialog
			open={modalOpen}
			onOpenChange={() => onClose()}
		>
			<DialogContent className='bg-white'>
				<DialogHeader>
					<DialogTitle className='text-center text-2xl'>
						Вы уверены?
					</DialogTitle>
				</DialogHeader>
				<DialogDescription className='text-zinc-700 text-center'>
					После подтверждения, все товары магазина, его информация, статистика,
					и уникальная ссылка будут удалены. Отменить данное действие
					невозможно.
				</DialogDescription>
				<div className='flex justify-end items-center gap-3'>
					<Button
						className='bg-sky-500'
						onClick={() => onClose()}
					>
						Отменить
					</Button>
					<Button
						onClick={deleteShop}
						variant='destructive'
					>
						Удалить
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};
export default DeleteShopModal;
