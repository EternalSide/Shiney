"use client";
import {useEffect, useRef, useState} from "react";
import OverlayMain from "../OverlayMain";
import CategoryMenu from "@/components/category/CategoryMenu";
import CategoryLinks from "@/components/category/CategoryLinks";
import CategoryLogoButton from "@/components/category/CategoryLogoButton";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import {categories} from "@/lib/category";

const HeaderCategories = () => {
	const [activeCategory, setActiveCategory] = useState("Электроника");
	const [active, setActive] = useState(false);
	const containerRef = useRef(null);

	const pathname = usePathname();

	useEffect(() => {
		setActive(false);
	}, [pathname]);

	useEffect(() => {
		const handleOutsideClick = (event: any) => {
			// @ts-ignore
			if (
				containerRef.current &&
				// @ts-ignore
				!containerRef.current.contains(event.target)
			) {
				setActive(false);
			}
		};

		const handleScroll = (e: any) => {
			window.scrollTo(0, 0);
		};

		const handleEscClick = (e: any) => {
			if (e.key === "Escape") return setActive(false);
		};

		document.addEventListener("click", handleOutsideClick);
		document.addEventListener("keydown", handleEscClick);

		if (active) {
			document.addEventListener("scroll", handleScroll);
		}

		return () => {
			document.removeEventListener("click", handleOutsideClick);
			document.removeEventListener("scroll", handleScroll);
			document.removeEventListener("keydown", handleEscClick);
		};
	}, [containerRef, active]);

	return (
		<>
			{active && <OverlayMain zIndex='z-[20]' />}
			<div
				ref={containerRef}
				className={cn(
					"relative h-[90px] pt-3.5 bg-white z-[30] px-3",
					active && "rounded-xl rounded-b-none"
				)}
			>
				<CategoryLogoButton
					active={active}
					setActive={setActive}
				/>
				{active && (
					<div className='max-[1300px]:min-w-[900px] flex gap-6 absolute top-0 left-0 !z-[220] bg-white min-w-[1200px] mt-[90px] rounded-t-none rounded-lg py-6 pl-2.5'>
						<CategoryMenu
							setActiveCategory={setActiveCategory}
							categories={categories}
						/>
						<CategoryLinks
							categories={categories}
							activeCategory={activeCategory}
						/>
					</div>
				)}
			</div>
		</>
	);
};
export default HeaderCategories;
