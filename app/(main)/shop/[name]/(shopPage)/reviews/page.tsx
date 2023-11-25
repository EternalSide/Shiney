import CommentCard from "@/components/cards/CommentCard";

const ShopReviewsPage = async ({params}: {params: {name: string}}) => {
	let comments = [];
	return (
		<>
			<div className='flex items-center justify-between w-3/4 mt-8'>
				<h3 className='text-3xl font-bold'>
					Отзывы <span className='text-zinc-500'>0</span>
				</h3>
			</div>
			{comments?.length > 0 ? (
				<div className='w-3/4 flex flex-col gap-3 mt-6'>
					<CommentCard />
					<CommentCard />
					<CommentCard />
				</div>
			) : (
				<div className='flex justify-start items-center mt-6 w-full'>
					<h1 className='text-[#626d7a] font-semibold text-xl'>
						Отзывы отсутствуют
					</h1>
				</div>
			)}
		</>
	);
};
export default ShopReviewsPage;
