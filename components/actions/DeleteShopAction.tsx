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
			<button
				onClick={() =>
					onOpen("deleteShop", {
						shopLink,
						shopAvatar,
					})
				}
				className='admin-shop-card group hover:bg-sky-500'
			>
				<img
					className='h-28 w-28'
					src='https://media.tenor.com/aS_EMXObWn8AAAAj/cxyduck.gif'
				/>
				<div className='flex items-center group'>
					<X className='h-9 w-9 text-red-500' />
					<p className='group-hover:text-white transition'>Удалить</p>
				</div>
			</button>
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
