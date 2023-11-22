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
		pathname,
		open: active,
	});

	useEffect(() => setActive(false), [pathname]);

	return (
		<>
			{active && <OverlayMain zIndex='z-[20]' />}
			<div
				ref={containerRef}
				className={`relative h-[90px] pt-3.5 bg-white  px-3 ${
					active && "rounded-xl rounded-b-none z-[30]"
				}`}
			>
				<CategoryLogoButton
					active={active}
					setActive={setActive}
				/>
				{active && (
					<div className='max-[1300px]:min-w-[900px] flex gap-6 absolute top-0 left-0 !z-[220] bg-white min-w-[1180px] mt-[90px] rounded-t-none rounded-lg py-6 pl-2.5'>
						<CategoryMenu
							setActive={setActive}
							setActiveCategory={setActiveCategory}
						/>
						<CategoryLinks
							setActive={setActive}
							activeCategory={activeCategory}
						/>
					</div>
				)}
			</div>
		</>
	);
};
export default HeaderCategories;
