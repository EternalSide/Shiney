import {Skeleton} from "@/components/ui/skeleton";

const Loading = () => {
	return (
		<>
			<h1 className='base-title'>Новинки</h1>
			<div className='mt-4 grid max-[520px]:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 !gap-6'>
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
