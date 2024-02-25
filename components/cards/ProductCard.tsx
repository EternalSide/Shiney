"use client";
import { useKorzina } from "@/hooks/useKorzina";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { usePathname } from "next/navigation";
import { useEffect, useOptimistic } from "react";
import { MotionDiv } from "../shared/MotionDiv";
import { addProductToUserFav } from "@/actions/product.action";
import Image from "next/image";
import { motionVariants } from "@/constants";
import { ILocalProduct } from "@/types";

interface Props {
	id: string;
	title: string;
	description: string;
	imgSrc: string;
	shopName: string;
	shopImage: string;
	shopLink: string;
	buyNumber: number | string;
	ratingNumber: number | string;
	ratingCounter: number;
	price: number;
	clerkId?: string | undefined | null;
	inFav?: boolean;
}

const ProductCard = ({
	id,
	inFav,
	title,
	description,
	imgSrc,
	buyNumber,
	ratingNumber,
	ratingCounter,
	price,
	clerkId,
	shopLink,
	shopName,
	shopImage,
}: Props) => {
	const { addProduct, products, removeProduct } = useKorzina();
	const { toast } = useToast();
	const path = usePathname();

	const [optimisticState, addOptimistic] = useOptimistic(
		inFav,
		(currentState: boolean | undefined, optimisticValue: boolean) =>
			(currentState = optimisticValue)
	);

	const alreadyInKorzina = products.some((item: ILocalProduct) => item.id === id);

	const [optimisticKorzina, addOptimisticKorzina] = useOptimistic(
		alreadyInKorzina,
		(currentState: boolean | undefined, optimisticValue: boolean) =>
			(currentState = optimisticValue)
	);

	// Для реал тайма удаления подсветки с иконки корзины,
	// если товар был удален из корзины, а не из карточки.
	// zustand  прокинет products и мы перепишем значение.
	useEffect(() => {
		addOptimisticKorzina(products.some((item: ILocalProduct) => item.id === id));
	}, [products]);

	// Управление корзиной
	const handleKorzina = () => {
		addOptimisticKorzina(!optimisticKorzina);

		toast({
			title: optimisticKorzina ? "Товар удален из корзины!" : "Товар добавлен в корзину!",
		});
		if (alreadyInKorzina) {
			removeProduct(id);
		} else {
			const product = {
				title,
				description,
				picture: imgSrc,
				price,
				id,
				quantity: 1,
				shopName,
				shopLink,
				shopImage,
			};
			return addProduct(product);
		}
	};

	// Добавить в избранное
	const handleLikeProduct = async () => {
		if (!clerkId) {
			return toast({
				title: "Вы не авторизованы.",
				description: "Войдите, чтобы добавить товар в избранное.",
				variant: "destructive",
			});
		}

		addOptimistic(!optimisticState);

		toast({
			title: optimisticState ? "Товар удален из избранного" : "Товар добавлен в избранное!",
		});

		await addProductToUserFav({
			productId: id,
			userId: clerkId,
			path,
			inFav,
		});
	};

	return (
		<MotionDiv
			variants={motionVariants}
			initial="hidden"
			animate="visible"
			transition={{
				delay: 0,
				ease: "easeInOut",
				duration: 0.5,
			}}
			viewport={{ amount: 0 }}
			className="max-w-sm rounded relative w-full"
		>
			<Link className="block relative w-full h-64" href={`/item/${id}`}>
				<Image className="h-64 object-cover rounded-xl" src={imgSrc} alt={title} fill />
			</Link>

			<div className="flex justify-between w-full items-center mt-2.5">
				<Link href={`/item/${id}`} className="flex-1">
					<h3 className="text-[#252525] font-semibold text-lg dark:text-white">
						{title}
					</h3>
				</Link>
				<div className="flex gap-2 items-center">
					<button onClick={handleLikeProduct}>
						<Heart
							fill={optimisticState ? "#38bdf8" : "none"}
							className={`h-5 w-5 hover:text-sky-400 transition hover:scale-110 dark:text-[#9aa2b4] ${
								optimisticState && "text-sky-400 dark:text-sky-400"
							}`}
						/>
					</button>
					<button onClick={handleKorzina}>
						<ShoppingCart className="h-5 w-5 hover:text-orange-400 transition hover:scale-110 dark:text-[#9aa2b4]" />
					</button>
				</div>
			</div>

			<div className="mt-4 flex items-center justify-between">
				<h3 className="text-xl font-semibold dark:text-white">{price}₽</h3>
				<div className="flex items-center gap-1.5">
					<Star className="h-4 w-4 text-orange-400" fill="orange" />
					<p className="font-semibold text-gray-400 text-sm">
						<span className="text-orange-400">{ratingNumber} </span>(
						{ratingCounter || 0})
					</p>
				</div>
			</div>

			<div className="mt-2 flex items-center justify-between">
				<Link href={`/shop/${shopLink}`}>
					<h3 className="text-zinc-700 font-semibold text-sm hover:text-blue-600 transition dark:text-[#626d7a]">
						{shopName}
					</h3>
				</Link>
				<p className="text-zinc-700 text-sm font-semibold dark:text-[#626d7a]">
					Покупок: <span className="text-gray-400 ">{buyNumber}</span>
				</p>
			</div>
		</MotionDiv>
	);
};
export default ProductCard;
