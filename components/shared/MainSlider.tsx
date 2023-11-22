"use client";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import {Pagination, Autoplay} from "swiper/modules";
import Link from "next/link";
import {useEffect, useState} from "react";
import Image from "next/image";
const MainSlider = () => {
	const [progress, setProgress] = useState(0);

	return (
		<>
			<Swiper
				modules={[Pagination, Autoplay]}
				className='mySwiper'
				autoplay={{delay: 5000}}
			>
				<SwiperSlide>
					<Link href='/'>
						<img
							className='rounded-xl'
							src='https://blablabla.cdn.wikkeo.com/BlaBlaBla/01/10/fe/9e/ec/018a746f-0110-7dfe-9eec-ce3a7db29844.avif'
						/>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href='/'>
						<img
							className='rounded-xl'
							src='https://blablabla.cdn.wikkeo.com/BlaBlaBla/0f/90/c9/ad/b7/018b3810-0f90-7dc9-adb7-2c4fcf0a988d.avif'
						/>
					</Link>
				</SwiperSlide>

				<SwiperSlide>
					<Link href='/'>
						<img
							className='rounded-xl'
							src='https://blablabla.cdn.wikkeo.com/BlaBlaBla/de/85/44/aa/e3/018ba942-de85-7c44-aae3-27ce8101b797.avif'
						/>
					</Link>
				</SwiperSlide>
			</Swiper>
		</>
	);
};
export default MainSlider;
