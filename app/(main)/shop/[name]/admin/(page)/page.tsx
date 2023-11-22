import DeleteShopAction from "@/components/actions/DeleteShopAction";
import checkAdmin from "@/actions/checkAdmin";
import {AdminParams} from "@/types";
import Link from "next/link";
import Image from "next/image";
import CopyAction from "@/components/actions/CopyAction";

const ShopAdminPage = async ({params}: AdminParams) => {
	const data = await checkAdmin(params.name);

	const buttons = [
		{
			label: "Добавить товар",
			href: `/shop/${data?.shop.link}/admin/add`,
			gif: "https://media.tenor.com/zi5awiBippkAAAAC/cxyduck-cxydck.gif",
		},
		{
			label: "Управление товарами",
			href: `/shop/${data?.shop.link}/admin/products`,
			gif: "https://askstroy.od.ua/images/gif/develop.gif",
		},
		{
			label: "Заказы",
			href: `/shop/${data?.shop.link}/admin/orders`,
			gif: "https://media.tenor.com/MxAltJxjlL8AAAAC/utya-duck.gif",
		},
		{
			label: "Редактировать",
			href: `/shop/${data?.shop.link}/admin/edit`,
			gif: "https://media.tenor.com/eXZyHOtNs7gAAAAC/cxyduck-cxydck.gif",
		},
		{
			label: "Оформление",
			href: `/shop/${data?.shop.link}/admin/view`,
			gif: "https://octogram.site/assets/animations/wallpaperAnimation.gif",
		},
	];

	return (
		<>
			<div className='base-block'>
				<div className='flex items-start gap-3'>
					<Link
						href={`/shop/${data?.shop.link}`}
						className='relative h-32 w-32 mt-1'
					>
						<Image
							className='rounded-lg'
							alt={`Изображение магазина ${data?.shop.name}`}
							fill
							src={data?.shop.avatar || "/no-photo.jpg"}
						/>
					</Link>
					<div className='flex flex-col gap-3'>
						<Link href={`/shop/${data?.shop.link}`}>
							<h3 className='font-bold text-xl'>
								{data?.shop.name} | Админ панель
							</h3>
						</Link>
						<p className=''>{data?.shop.description}</p>

						<div className='flex items-center gap-3'>
							<p>Товаров: {data?.shop.products.length}</p>
							<p>Покупок: {data?.shop.buyCount}</p>
						</div>

						<Link
							className='flex gap-2 items-center'
							href={`/shop/${data?.shop.link}`}
						>
							<p className='text-[#223bdd] font-semibold'>{`shiney.ru/shop/${data?.shop.link}`}</p>
							<CopyAction text={`https:/shiney.ru/shop/${data?.shop.link}`} />
						</Link>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8'>
					{buttons.map((item: any) => (
						<Link
							key={item.label}
							className='rounded-md bg-transparent text-black text-xl font-semibold flex justify-center transition group hover:bg-sky-500'
							href={item.href}
						>
							<button className='admin-shop-card'>
								<img
									className='h-28 w-28'
									src={item.gif}
								/>
								<p className='group-hover:text-white transition'>
									{item.label}
								</p>
							</button>
						</Link>
					))}
					<DeleteShopAction
						shopLink={data?.shop.link!}
						shopAvatar={data?.shop.avatar!}
						adminPage={true}
						clerkId={data?.clerkId!}
					/>
				</div>
			</div>
		</>
	);
};
export default ShopAdminPage;
