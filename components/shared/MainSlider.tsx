"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Autoplay} from "swiper/modules";
import Link from "next/link";
import {ISliderItem} from "@/types";

const MainSlider = () => {
	const sliders: ISliderItem[] = [
		{
			href: "/",
			imgSrc:
				"https://blablabla.cdn.wikkeo.com/BlaBlaBla/01/10/fe/9e/ec/018a746f-0110-7dfe-9eec-ce3a7db29844.avif",
		},
		{
			href: "/",
			imgSrc:
				"https://blablabla.cdn.wikkeo.com/BlaBlaBla/0f/90/c9/ad/b7/018b3810-0f90-7dc9-adb7-2c4fcf0a988d.avif",
		},
		{
			href: "/",
			imgSrc:
				"https://blablabla.cdn.wikkeo.com/BlaBlaBla/de/85/44/aa/e3/018ba942-de85-7c44-aae3-27ce8101b797.avif",
		},
	];

	return (
		<Swiper
			modules={[Autoplay]}
			className='mySwiper px-0'
			autoplay={{delay: 5000}}
		>
			{sliders.map((item: ISliderItem) => (
				<SwiperSlide key={item.imgSrc}>
					<Link href={item.href}>
						<img
							className='rounded-xl'
							src={item.imgSrc}
						/>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default MainSlider;
