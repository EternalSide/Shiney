"use client";
import {useModal} from "@/hooks/useModal";
import {X} from "lucide-react";
import {Button} from "../ui/button";

interface Props {
	shopLink: string;
	shopAvatar: string;
	adminPage?: boolean;
	clerkId: string | null;
}

const DeleteShopAction = ({
	shopLink,
	shopAvatar,
	adminPage,
	clerkId,
}: Props) => {
	const {onOpen} = useModal();

	// Добавить clerkId
	if (adminPage) {
		return (
			<Button
				onClick={() =>
					onOpen("deleteShop", {
						shopLink,
						shopAvatar,
					})
				}
				className='h-20 bg-transparent text-black text-xl justify-start gap-5 font-semibold border border-sky-400'
			>
				<X className='h-9 w-9 text-red-500' />
				Удалить
			</Button>
		);
	}

	return (
		<button
			onClick={() =>
				onOpen("deleteShop", {
					shopLink: shopLink,
					shopAvatar: shopAvatar,
				})
			}
			type='button'
		>
			<X className='text-red-500 relative h-7 w-7 -mt-1.5' />
		</button>
	);
};
export default DeleteShopAction;
