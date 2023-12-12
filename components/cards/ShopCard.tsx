import Link from "next/link";
import { MotionDiv } from "../shared/MotionDiv";
import Image from "next/image";
import { motionVariants } from "@/constants";
import { Star } from "lucide-react";

interface Props {
	imgSrc: string | null;
	title: string;
	productCount: number;
	description: string;
	followersCount: number;
	link: string;
}

const ShopCard = ({ imgSrc, title, productCount, description, followersCount, link }: Props) => {
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
			className="max-w-sm  relative w-full "
		>
			<Link className="block relative w-full h-64" href={`/shop/${link}`}>
				<Image
					className="h-64 object-cover rounded-xl rounded-b-none"
					src={imgSrc!}
					alt=""
					fill
				/>
			</Link>
			<div className="bg-white dark:bg-neutral-800 p-5 rounded-xl rounded-t-none">
				<div className="flex w-full">
					<Link
						href={`/shop/${link}`}
						className="flex-1 flex items-center justify-between"
					>
						<h3 className="text-[#252525] font-semibold hover:text-blue-600 transition text-lg dark:text-white">
							{title}
						</h3>{" "}
						<div className="flex items-center gap-1.5">
							<Star className="h-4 w-4 text-orange-400" fill="orange" />
							<p className="font-semibold text-gray-400 text-sm">
								<span className="text-orange-400">{"5.00"} </span>
							</p>
						</div>
					</Link>
				</div>
				<div className="mt-0.5">
					<p className="text-gray-500 font-medium  dark:text-gray-400">{description}</p>
				</div>
				<div className="mt-5 flex flex-col items-start gap-3 justify-center">
					<p className="text-zinc-700 text-sm font-semibold dark:text-white">
						Товаров: <span className="text-gray-400">{productCount}</span>
					</p>
					<p className="text-zinc-700 text-sm font-semibold dark:text-white">
						Подписчиков: <span className="text-gray-400 ">{followersCount}</span>
					</p>
				</div>
			</div>
		</MotionDiv>
	);
};
export default ShopCard;
