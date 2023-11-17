import {Heart, Star} from "lucide-react";
import Link from "next/link";

interface Props {
	title: string;
	imgSrc: string;
	shopName: string;
	buyNumber: number;
	ratingNumber: number;
	price: number;
}

const ProductCard = ({
	title,
	imgSrc,
	shopName,
	buyNumber,
	ratingNumber,
	price,
}: Props) => {
	return (
		<div className='block w-64 '>
			<Link href='/'>
				<img
					className='w-64 h-64 object-cover rounded-xl'
					src='https://miro.medium.com/v2/resize:fit:512/1*kzDS0UK5LyGz-Wg7qD1NLA.png'
				/>
			</Link>
			<div className='flex justify-between w-full items-center mt-3'>
				<Link
					href='/'
					className='flex-1'
				>
					<h3 className='text-[#252525] font-semibold'>Часы Peppe LUX</h3>
				</Link>
				<button>
					<Heart className='h-5 w-5 hover:text-orange-400 transition hover:scale-110' />
				</button>
			</div>
			<div className='mt-4 flex items-center justify-between'>
				<h3 className='text-xl font-semibold'>66666₽</h3>
				<div className='flex items-center gap-1.5'>
					<Star
						className='h-4 w-4 text-orange-400 '
						fill='orange'
					/>
					<p className='font-semibold text-gray-400 text-sm'>
						<span className='text-orange-400'>5.0</span> (666)
					</p>
				</div>
			</div>
			<div className='mt-2 flex items-center justify-between'>
				<Link href='/'>
					<h3 className='text-zinc-700 font-semibold text-sm hover:text-blue-600 transition'>
						Peppe
					</h3>
				</Link>
				<p className='text-zinc-700 text-sm font-semibold '>
					Покупок: <span className='text-gray-400'>1M +</span>
				</p>
			</div>
		</div>
	);
};
export default ProductCard;
