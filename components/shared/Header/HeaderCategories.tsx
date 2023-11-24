"use client";
import {useRef, useState} from "react";
import OverlayMain from "../OverlayMain";
import CategoryMenu from "@/components/category/CategoryMenu";
import CategoryLinks from "@/components/category/CategoryLinks";
import CategoryLogoButton from "@/components/category/CategoryLogoButton";
import useClickOutside from "@/hooks/useClickOutside";

const HeaderCategories = () => {
	const [activeCategory, setActiveCategory] = useState("Электроника");
	const [open, setOpen] = useState(false);

	const containerRef = useRef<HTMLDivElement>(null);

	useClickOutside({
		ref: containerRef,
		setOpen,
		open,
	});

	return (
		<>
			{open && <OverlayMain zIndex='z-[20]' />}
			<div
				ref={containerRef}
				className={`relative h-[90px]  bg-white px-4 ${
					open && "rounded-xl rounded-b-none z-[30]"
				}`}
			>
				<CategoryLogoButton
					open={open}
					setOpen={setOpen}
				/>

				{open && (
					<div className='max-[1300px]:min-w-[900px] absolute top-0 left-0 !z-[220] min-w-[1180px] mt-[90px]'>
						<div className='flex gap-6 py-8 pl-2.5 rounded-xl rounded-tl-none bg-white w-full'>
							<CategoryMenu
								setOpen={setOpen}
								setActiveCategory={setActiveCategory}
							/>
							<CategoryLinks
								setOpen={setOpen}
								activeCategory={activeCategory}
							/>
						</div>
					</div>
				)}
			</div>
		</>
	);
};
export default HeaderCategories;
