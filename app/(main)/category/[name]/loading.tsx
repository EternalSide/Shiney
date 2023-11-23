import {Skeleton} from "@/components/ui/skeleton";
import {ChevronRight} from "lucide-react";

const Loading = () => {
	return (
		<>
			<div className='flex items-center gap-2'>
				<p className='text-[#626d7a] font-medium text-sm hover:text-sky-500 transition'>
					Главная
				</p>
				<ChevronRight className='h-4 w-4' />
			</div>
			<div className='mt-16'>
				<div className='grid_new-products'>
					{Array.from({length: 20}, (_, i) => (
						<Skeleton
							key={i}
							className='h-64 rounded-lg bg-neutral-300'
						/>
					))}
				</div>
			</div>
		</>
	);
};
export default Loading;
