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
			gif: "add-product.gif",
		},
		{
			label: "Управление товарами",
			href: `/shop/${data?.shop.link}/admin/products`,
			gif: "upravlenie.gif",
		},
		{
			label: "Заказы",
			href: `/shop/${data?.shop.link}/admin/orders`,
			gif: "zakazi.gif",
		},
		{
			label: "Редактировать",
			href: `/shop/${data?.shop.link}/admin/edit`,
			gif: "edit.gif",
		},
		{
			label: "Оформление",
			href: `/shop/${data?.shop.link}/admin/view`,
			gif: "view.gif",
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
							src={data?.shop.avatar || "/noShopImage.jpg"}
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
								<div className='relative h-28 w-28'>
									<Image
										fill
										className='object-cover'
										src={`/ducks/${item.gif}`}
										alt={item.label}
									/>
								</div>

								<p className='group-hover:text-white transition'>
									{item.label}
								</p>
							</button>
						</Link>
					))}
					<DeleteShopAction
						shopId={data?.shop._id.toString()}
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
