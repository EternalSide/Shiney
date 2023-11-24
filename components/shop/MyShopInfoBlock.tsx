import Image from "next/image";
import Link from "next/link";
import CopyAction from "../actions/CopyAction";
import {noShopImage} from "@/constants";

interface Props {
	link: string;
	avatar: string;
	description: string;
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
		<div className='flex items-start gap-3'>
			<Link
				href={`/shop/${link}`}
				className='relative h-32 w-32 mt-1'
			>
				<Image
					className='rounded-lg'
					alt={`Изображение магазина ${name}`}
					fill
					src={avatar || noShopImage}
				/>
			</Link>
			<div className='flex flex-col gap-3'>
				<Link href={`/shop/${link}`}>
					<h3 className='font-bold text-xl'>{headerText}</h3>
				</Link>
				<p className=''>{description}</p>

				<div className='flex items-center gap-3'>
					<p>Товаров: {productsCount}</p>
					<p>Покупок: {buyCount}</p>
				</div>

				<div className='flex gap-3 items-center'>
					<Link href={`/shop/${link}`}>
						<p className='text-[#223bdd] font-semibold'>{`shiney.ru/shop/${link}`}</p>
					</Link>
					<CopyAction text={`https:/shiney.ru/shop/${link}`} />
				</div>
			</div>
		</div>
	);
};
export default MyShopInfoBlock;
