"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {Button} from "../ui/button";
import {formUrlQuery} from "@/lib/utils";

interface Props {
	currentPage: number;
	isNextPage: boolean;
}

const Pagination = ({currentPage, isNextPage}: Props) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleNavigation = (action: "decrement" | "increment") => {
		let page = action === "decrement" ? currentPage - 1 : currentPage + 1;

		const newUrl = formUrlQuery({
			params: searchParams.toString(),
			key: "page",
			value: page,
		});

		router.push(newUrl);
	};

	return (
		<div className='flex items-center gap-3 justify-center mt-10 min-w-full'>
			<Button
				disabled={currentPage === 1}
				onClick={() => handleNavigation("decrement")}
				variant='blue'
				className='min-w-[120px]'
			>
				Пред
			</Button>
			<p className='text-lg font-semibold'>{currentPage || 1}</p>
			<Button
				disabled={!isNextPage}
				onClick={() => handleNavigation("increment")}
				variant='blue'
				className='min-w-[120px]'
			>
				След
			</Button>
		</div>
	);
};
export default Pagination;
