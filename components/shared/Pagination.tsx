"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {Button} from "../ui/button";

interface Props {
	currentPage: number;
	isNextPage: boolean;
}

const Pagination = ({currentPage, isNextPage}: Props) => {
	const router = useRouter();

	const handleNavigation = (action: "decrement" | "increment") => {
		if (action === "decrement") {
			router.push(`/new-products?page=${currentPage - 1}`);
		}
		if (action === "increment") {
			router.push(`/new-products?page=${currentPage + 1}`);
		}
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
			<p className='text-lg font-semibold'> {currentPage || 1}</p>
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
