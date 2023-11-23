import CommentCard from "@/components/cards/CommentCard";

const ShopReviewsPage = async ({params}: {params: {name: string}}) => {
	return (
		<>
			<div className='flex items-center justify-between w-3/4 mt-8'>
				<h3 className='text-3xl font-bold'>
					Отзывы <span className='text-zinc-500'>0</span>
				</h3>
			</div>
			<div className='w-3/4 flex flex-col gap-3 mt-6'>
				<CommentCard />
				<CommentCard />
				<CommentCard />
			</div>
		</>
	);
};
export default ShopReviewsPage;
