"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { ISliderItem } from "@/types";
import Link from "next/link";

const MainSlider = () => {
	const sliders: ISliderItem[] = [
		{
			href: "/",
			imgSrc: "/banners/1.avif",
		},
		{
			href: "/",
			imgSrc: "/banners/2.avif",
		},
		{
			href: "/",
			imgSrc: "/banners/3.avif",
		},
	];

	return (
		<Swiper modules={[Autoplay]} className="mySwiper px-0" autoplay={{ delay: 5000 }}>
			{sliders.map((item: ISliderItem) => (
				<SwiperSlide key={item.imgSrc}>
					<Link href={item.href}>
						<img className="rounded-xl" src={item.imgSrc} />
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default MainSlider;
