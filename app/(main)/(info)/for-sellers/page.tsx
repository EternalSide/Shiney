import Link from "next/link";

const SellersInfoPage = () => {
	return (
		<div className='max-w-[1420px] w-full mx-auto p-6 font-medium text-sm text-[#626d7a]'>
			<h1 className='font-semibold text-2xl text-black'>Для продавцов</h1>
			<div className='p-6 bg-white rounded-xl mt-4'>
				<div className='flex flex-col gap-1.5'>
					<p>
						Для начала торговли на Peppe вам нужно{" "}
						<Link href='/create'>
							<span className='text-blue-600 font-semibold'>
								создать свой магазин.
							</span>
						</Link>
					</p>
					<p>
						После создания магазина вы сможете добавлять товары, управлять им и
						кастомизировать его.
					</p>
					<p>
						Если пользователь совершит у вас покупку, вы получите об этом
						уведомление.
					</p>
					<p>
						Количество магазинов и товаров не ограничено. Удачных продаж! ❤️
					</p>
				</div>
			</div>
		</div>
	);
};
export default SellersInfoPage;
