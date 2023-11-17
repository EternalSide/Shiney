"use client";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Navigation, Pagination} from "swiper/modules";
import Link from "next/link";
const MainSlider = () => {
	return (
		<Swiper
			navigation={true}
			modules={[Navigation, Pagination]}
			className='mySwiper'
		>
			<SwiperSlide>
				<Link href='/'>
					<img
						className='rounded-xl'
						src='https://blablabla.cdn.wikkeo.com/BlaBlaBla/01/10/fe/9e/ec/018a746f-0110-7dfe-9eec-ce3a7db29844.avif'
					/>
				</Link>
			</SwiperSlide>
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide>
			<SwiperSlide>Slide 5</SwiperSlide>
			<SwiperSlide>Slide 6</SwiperSlide>
			<SwiperSlide>Slide 7</SwiperSlide>
			<SwiperSlide>Slide 8</SwiperSlide>
			<SwiperSlide>Slide 9</SwiperSlide>
		</Swiper>
	);
};
export default MainSlider;
