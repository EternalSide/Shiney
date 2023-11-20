import {Star, ThumbsDown, ThumbsUp} from "lucide-react";
import Image from "next/image";
import {Button} from "../ui/button";

const CommentCard = () => {
	return (
		<div className='p-6 bg-[#e0f2fe] rounded-xl'>
			<div className='flex justify-between'>
				<h3 className='font-bold text-sky-500 text-lg'>Портрет Даши Каплан</h3>
				<p className='text-sm font-semibold text-zinc-500'>11 часов назад</p>
			</div>
			<div className='flex items-center gap-1.5 mt-1'>
				<Star
					className='h-4 w-4 text-orange-400 '
					fill='orange'
				/>
				<p className='font-semibold text-gray-400 text-sm'>
					<span className='text-orange-400'>5.00 </span>
				</p>
			</div>
			<div className='flex gap-2 items-center mt-3'>
				<div className='h-12 w-16 relative'>
					<Image
						className='rounded-full object-cover object-center'
						src='https://i.pinimg.com/736x/34/83/27/348327ebf09db5e14fb15274b9cc3503.jpg'
						alt='bg'
						fill
					/>
				</div>
				<p className='mt-4 font-medium'>
					Заказывал первый раз, и не зря, супер быстрая доставка, коробка пришла
					целая , упакована надежно, продавца советую, сам буду брать
				</p>
			</div>
			<div className='flex gap-1 justify-end mt-3'>
				<Button className='gap-2.5 bg-transparent text-blue-600 hover:bg-sky-200'>
					<ThumbsUp />
					Полезно
				</Button>
				<Button className='gap-2.5 bg-transparent text-blue-600 hover:bg-sky-200'>
					<ThumbsDown />
					Не полезно
				</Button>
			</div>
		</div>
	);
};
export default CommentCard;
