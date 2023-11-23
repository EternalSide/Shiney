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
import {deleteShopAction} from "@/actions/dbActions/shop.action";
import {usePathname, useRouter} from "next/navigation";
import {useEdgeStore} from "@/lib/edgestore";

const DeleteShopModal = () => {
	const {isOpen, onClose, type, data} = useModal();

	let shopLink: string;
	let shopAvatar: string;

	if (data !== null) {
		shopLink = data.shopLink;
		shopAvatar = data.shopAvatar;
	}

	const modalOpen = type === "deleteShop" && isOpen;
	const path = usePathname();
	const router = useRouter();
	const {edgestore} = useEdgeStore();

	const deleteShop = async () => {
		try {
			toast({
				title: "Мы начали удалять ваш магазин..",
			});

			onClose();

			await deleteShopAction({shopLink, path});

			await edgestore.shopImage.delete({
				url: shopAvatar,
			});

			toast({
				title: "Магазин удален ✔️",
			});

			if (path !== "/shops") return router.push("/shops");
		} catch (e) {
			toast({
				title: "Что-то пошло не так...",
				description: "Попробуйте еще раз",
				variant: "destructive",
			});
			console.log(e);
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
					После подтверждения будут удалены все товары магазина, а также
					связанная с ним информация. Возможность отмены данного действия
					отсутствует.
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
