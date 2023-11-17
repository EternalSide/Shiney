import MainSlider from "@/components/shared/MainSlider";

export default function Home() {
	return (
		<main className='max-w-[1420px] w-full mx-auto pt-6'>
			<MainSlider />
			<div className='mt-10'>
				<h3 className='main-title'>Популярные категории</h3>
			</div>
			<div className='mt-10'>
				<h3 className='main-title'>Спецпредложения</h3>
			</div>
			<div className='mt-10'>
				<h3 className='main-title'>Тренды</h3>
			</div>
			<div className='mt-10'>
				<h3 className='main-title'>Новинки</h3>
			</div>
		</main>
	);
}
