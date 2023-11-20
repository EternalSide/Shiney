import Link from "next/link";
import Image from "next/image";
import {FileSignature} from "lucide-react";
import CopyAction from "../actions/CopyAction";
import DeleteShopAction from "../actions/DeleteShopAction";
import {Button} from "../ui/button";

interface Props {
	name: string;
	description: string;
	link: string;
	buyCount: number;
	productsCount: number;
	clerkId: string | null;
}

const MyShopCard = ({
	name,
	description,
	link,
	buyCount,
	productsCount,
	clerkId,
}: Props) => {
	return (
		<div className='flex items-start justify-between relative'>
			<div className='flex items-start gap-3'>
				<Link
					href={`/shop/${link}`}
					className='relative h-32 w-32 mt-1'
				>
					<Image
						className='rounded-lg'
						alt={`Изображение магазина ${name}`}
						fill
						src='https://i.pinimg.com/564x/eb/3b/46/eb3b46dbd475a0a01f0fa6ed15c36986.jpg'
					/>
				</Link>
				<div className='flex flex-col gap-3'>
					<Link href={`/shop/${link}`}>
						<h3 className='font-bold text-xl'>{name}</h3>
					</Link>
					<p className=''>{description}</p>

					<div className='flex items-center gap-3'>
						<p>Товаров: {productsCount}</p>
						<p>Покупок: {buyCount}</p>
					</div>

					<Link
						className='flex gap-2 items-center'
						href={`/shop/${link}`}
					>
						<p className='text-[#223bdd] font-semibold'>{`peppe-blue.vercel.app/shop/${link}`}</p>
						<CopyAction text={`https:/peppe-blue.vercel.app/shop/${link}`} />
					</Link>
				</div>
			</div>
			<div className='flex flex-col items-end'>
				<div className='flex items-center gap-2'>
					<Link href={`shop/${link}/admin/edit`}>
						<button>
							<FileSignature className='text-green-500' />
						</button>
					</Link>
					<DeleteShopAction
						shopLink={link}
						clerkId={clerkId}
					/>
				</div>
				<Link
					href={`/shop/${link}/admin`}
					className='absolute bottom-0 right-0'
				>
					<Button
						variant='blue'
						className='!px-10'
					>
						Управление
					</Button>
				</Link>
			</div>
		</div>
	);
};
export default MyShopCard;
