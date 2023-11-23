import checkShop from "@/actions/checkShop";
import Link from "next/link";

const ShopAboutPage = async ({params}: any) => {
	const shop = await checkShop(params.name);
	return (
		<div className='mt-8'>
			<h3 className='text-3xl font-bold mt-8'>О нас</h3>
			<div className='font-medium text-sm text-[#626d7a]'>
				<div className='mt-4'>
					<div className='flex flex-col gap-1.5'>
						<p>
							Для начала торговли на Shiney вам нужно{" "}
							<Link href='/create'>
								<span className='text-blue-600 font-semibold'>
									создать свой магазин.
								</span>
							</Link>
						</p>
						<p>
							После создания магазина вы сможете добавлять товары, управлять им
							и кастомизировать его.
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
		</div>
	);
};

export default ShopAboutPage;
