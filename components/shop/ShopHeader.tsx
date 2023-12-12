"use client";
import { Check, Star } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { useModal } from "@/hooks/useModal";
import { formatDateString } from "@/lib/utils";
import { toast } from "../ui/use-toast";
import { usePathname } from "next/navigation";
import { useOptimistic } from "react";
import { noShopImage } from "@/constants";
import { followShopAction } from "@/actions/shop.action";

interface Props {
	shopName: string;
	shopImage: string | null;
	shopDescription: string | null;
	ratingNumber: string;
	shopLink: string;
	clerkId: string | null;
	verified: boolean;
	isFollowing: boolean;
	followersLength: number;
	buyCount: number;
	commentsLength: number;
	createdOn: Date;
}

const ShopHeader = ({
	shopName,
	shopDescription,
	shopImage,
	followersLength,
	buyCount,
	commentsLength,
	ratingNumber,
	createdOn,
	verified,
	clerkId,
	shopLink,
	isFollowing,
}: Props) => {
	const { onOpen } = useModal();
	const path = usePathname();

	// Открыть аватар
	const openAvatar = () => onOpen("shopAvatar", shopImage || "/noShopImage.jpg");

	// Optimistic Change Follow UI (Моментально меняет инфо подписки)
	const [optimisticState, addOptimistic] = useOptimistic(
		isFollowing,
		(currentState: boolean, optimisticValue: boolean) => {
			return (currentState = optimisticValue);
		}
	);
	const [optimisticFollowers, addOptimisticFollowers] = useOptimistic(
		followersLength,
		(currentState: number, optimisticValue: number) => {
			return (currentState = optimisticValue);
		}
	);

	// Подписаться на магазин
	const followShop = async () => {
		try {
			if (!clerkId) {
				return toast({
					title: "Вы не авторизованы",
					description: "Войдите, чтобы подписаться на магазин",
					variant: "destructive",
				});
			}

			addOptimisticFollowers(
				optimisticState ? optimisticFollowers - 1 : optimisticFollowers + 1
			);
			addOptimistic(!optimisticState);

			await followShopAction({ clerkId, path, shopLink, isFollowing });
		} catch (e) {
			toast({
				title: "Что-то пошло не так...",
				description: "Попробуйте еще раз",
				variant: "destructive",
			});
		}
	};

	return (
		<div className="p-6 flex justify-between items-start  max-lg:flex-col max-lg:gap-6 bg-white rounded-tr-none rounded-tl-none dark:bg-[#1d1f24]">
			<div className="flex items-center gap-3">
				<button
					onClick={openAvatar}
					className="h-28 w-28 relative -mt-24 border-[4px] border-white rounded-full"
				>
					<Image
						className="rounded-full object-cover object-center hover:scale-105 transition"
						src={shopImage || noShopImage}
						alt={shopName}
						fill
					/>
				</button>

				<div className="flex flex-col gap-2">
					<div>
						<div className="flex items-center gap-1">
							<h1 className="font-bold text-2xl dark:text-white">{shopName}</h1>
							{verified && <Check className="text-blue-500" />}
						</div>
						<p className="dark:text-white"> {shopDescription}</p>
					</div>
					<div className="flex items-center gap-1.5">
						<Star className="h-4 w-4 text-orange-400 " fill="orange" />
						<div className="flex items-center gap-3">
							<p className="font-semibold text-gray-400 text-sm">
								<span className="text-orange-400">{ratingNumber}</span>
							</p>
							<Link href={`/shop/${shopLink}/reviews`}>
								<p className="font-semibold text-sky-500 text-sm">
									{commentsLength} Отзывов
								</p>
							</Link>
						</div>
					</div>
					<p className="text-sm font-semibold dark:text-white">
						На <span className="text-sky-500 font-bold">Shiney</span>{" "}
						{formatDateString(createdOn)}
					</p>
				</div>
			</div>

			<div className="flex items-start gap-10  max-md:flex-col-reverse max-md:gap-3">
				<div className="flex gap-10 items-center">
					<div className="text-center mt-1">
						<h3 className="font-bold dark:text-white">{buyCount}</h3>
						<p className="text-zinc-600 text-xs font-semibold mt-1 dark:text-white">
							Продаж
						</p>
					</div>
					<div className="text-center mt-1">
						<h3 className="font-bold dark:text-white">{optimisticFollowers}</h3>
						<p className="text-zinc-600 text-xs font-semibold mt-1 dark:text-white">
							Подписчиков
						</p>
					</div>
				</div>
				<Button onClick={followShop} variant="blue" className="!px-10 min-w-[210px]">
					{optimisticState ? "Вы подписаны  ✓" : "Подписаться"}
				</Button>
			</div>
		</div>
	);
};
export default ShopHeader;
