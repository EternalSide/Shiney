import CommentCard from "../cards/CommentCard";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
const ShopComments = () => {
	return (
		<>
			<div className='flex items-center justify-between w-3/4 mt-8'>
				<h3 className='text-3xl font-bold'>
					Отзывы <span className='text-zinc-500'>0</span>
				</h3>
				<Select>
					<SelectTrigger className='w-[180px]'>
						<SelectValue placeholder='Сортировка: Новые' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='light'>Light</SelectItem>
						<SelectItem value='dark'>Dark</SelectItem>
						<SelectItem value='system'>System</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className='w-3/4 flex flex-col gap-3 mt-6'>
				<CommentCard />
				<CommentCard />
				<CommentCard />
			</div>
		</>
	);
};
export default ShopComments;
