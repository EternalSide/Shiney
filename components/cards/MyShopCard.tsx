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
	avatar: string;
}

const MyShopCard = ({
	name,
	description,
	avatar,
	link,
	buyCount,
	productsCount,
	clerkId,
}: Props) => {
	return (
		<div className='flex items-start justify-between relative py-3'>
			<div className='flex items-start gap-3'>
				<Link
					href={`/shop/${link}`}
					className='relative h-32 w-32 mt-1'
				>
					<Image
						className='rounded-lg'
						alt={`Изображение магазина ${name}`}
						fill
						src={avatar || "/no-photo.jpg"}
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
						<p className='text-[#223bdd] font-semibold'>{`shiney.ru/shop/${link}`}</p>
						<CopyAction text={`https:/shiney.ru/shop/${link}`} />
					</Link>
				</div>
			</div>
			<div className='flex flex-col items-end'>
				<div className='flex items-center gap-2'>
					<Link
						className='block'
						href={`shop/${link}/admin/edit`}
					>
						<button>
							<FileSignature className='text-sky-500' />
						</button>
					</Link>
					<DeleteShopAction
						shopLink={link}
						clerkId={clerkId}
						shopAvatar={avatar}
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
