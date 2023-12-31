import Image from "next/image";
import Link from "next/link";
import CopyAction from "../actions/CopyAction";
import { noShopImage } from "@/constants";

interface Props {
	link: string;
	avatar: string | null;
	description: string | null;
	name: string;
	productsCount: number;
	buyCount: number;
	headerText: string;
}

const MyShopInfoBlock = ({
	link,
	avatar,
	description,
	name,
	productsCount,
	buyCount,
	headerText,
}: Props) => {
	return (
		<div className="flex items-start gap-3">
			<Link href={`/shop/${link}`} className="relative h-32 w-32 mt-1">
				<Image
					className="rounded-lg object-cover"
					alt={`Изображение магазина ${name}`}
					fill
					src={avatar || noShopImage}
				/>
			</Link>
			<div className="flex flex-col gap-3">
				<Link href={`/shop/${link}`}>
					<h3 className="font-bold text-xl dark:text-white">{headerText}</h3>
				</Link>
				<p className="dark:text-white">{description}</p>

				<div className="flex items-center gap-3">
					<p className="dark:text-white">Товаров: {productsCount}</p>
					<p className="dark:text-white">Покупок: {buyCount}</p>
				</div>

				<div className="flex gap-3 items-center">
					<Link href={`/shop/${link}`}>
						<p className="text-[#223bdd] font-semibold dark:text-sky-500">{`shiney.ru/shop/${link}`}</p>
					</Link>
					<CopyAction text={`https:/shiney.ru/shop/${link}`} />
				</div>
			</div>
		</div>
	);
};
export default MyShopInfoBlock;
