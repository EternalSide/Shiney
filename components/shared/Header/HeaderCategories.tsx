"use client";
import {useEffect, useRef, useState} from "react";
import OverlayMain from "../OverlayMain";
import CategoryMenu from "@/components/category/CategoryMenu";
import CategoryLinks from "@/components/category/CategoryLinks";
import CategoryLogoButton from "@/components/category/CategoryLogoButton";
import {usePathname} from "next/navigation";
import useClickOutside from "@/hooks/useClickOutside";

const HeaderCategories = () => {
	const [activeCategory, setActiveCategory] = useState("Электроника");
	const [active, setActive] = useState(false);

	const containerRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	useClickOutside({
		ref: containerRef,
		setOpen: setActive,
		open: active,
	});

	useEffect(() => setActive(false), [pathname]);

	return (
		<>
			{active && <OverlayMain zIndex='z-[20]' />}
			<div
				ref={containerRef}
				className={`relative h-[90px]  bg-white px-4 ${
					active && "rounded-xl rounded-b-none z-[30]"
				}`}
			>
				<CategoryLogoButton
					active={active}
					setActive={setActive}
				/>

				{active && (
					<div className='max-[1300px]:min-w-[900px] absolute top-0 left-0 !z-[220] min-w-[1180px] mt-[90px]'>
						<div className='flex gap-6 py-8 pl-2.5 rounded-xl rounded-tl-none bg-white w-full'>
							<CategoryMenu
								setActive={setActive}
								setActiveCategory={setActiveCategory}
							/>
							<CategoryLinks
								setActive={setActive}
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
