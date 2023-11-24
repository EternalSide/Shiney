import {Skeleton} from "@/components/ui/skeleton";

const Loading = () => {
	return (
		<>
			<h3 className='text-3xl font-bold mt-8 '>Товары</h3>
			<div className='grid mt-6 max-[520px]:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 !gap-6 w-full'>
				{Array.from({length: 20}, (_, i) => (
					<Skeleton
						key={i}
						className='h-64 rounded-lg bg-neutral-300'
					/>
				))}
			</div>
		</>
	);
};
export default Loading;
