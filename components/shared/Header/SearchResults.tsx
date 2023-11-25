import {ScrollArea} from "@/components/ui/scroll-area";
import {Loader2Icon, SearchIcon} from "lucide-react";
import Link from "next/link";

interface Props {
	isLoading: boolean;
	results: any;
}

const SearchResults = ({isLoading, results}: Props) => {
	return (
		<div className='p-2 z-[10] absolute top-0 min-h-[400px] mt-[48px] rounded-xl bg-white w-full rounded-t-none border-[1px] shadow-black border-[#f4f5fa]'>
			{isLoading && (
				<div className='h-full w-full flex justify-center items-center'>
					<Loader2Icon className='mx-auto h-10 w-10 animate-spin text-indigo-500' />
				</div>
			)}
			<ScrollArea className='relative h-[400px]'>
				<Link
					href='/'
					className='flex items-center gap-6 w-full  hover:bg-[#f4f5fa] transition rounded-xl rounded-b-none px-3 py-4 border-b'
				>
					<SearchIcon className='text-zinc-400' />
					<p className='font-medium'>носки</p>
				</Link>
			</ScrollArea>
		</div>
	);
};
export default SearchResults;
