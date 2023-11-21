import DeleteShopAction from "@/components/actions/DeleteShopAction";
import {Button} from "@/components/ui/button";
import checkAdmin from "@/actions/checkAdmin";
import {AdminParams} from "@/types";
import {FileEdit, PackagePlus, Plus, Sparkles, Store, X} from "lucide-react";
import Link from "next/link";

const ShopAdminPage = async ({params}: AdminParams) => {
	const data = await checkAdmin(params.name);

	const buttons = [
		{
			label: "Добавить товар",
			href: `/shop/${data?.shop.link}/admin/add`,
			icon: Plus,
			iconColor: "text-blue-500",
		},
		{
			label: "Управление товарами",
			href: `/shop/${data?.shop.link}/admin/products`,
			icon: Store,
			iconColor: "text-indigo-500",
		},
		{
			label: "Заказы",
			href: `/shop/${data?.shop.link}/admin/orders`,
			icon: PackagePlus,
			iconColor: "text-yellow-400",
		},
		{
			label: "Редактировать",
			href: `/shop/${data?.shop.link}/admin/edit`,
			icon: FileEdit,
			iconColor: "text-green-500",
		},
		{
			label: "Оформление",
			href: `/shop/${data?.shop.link}/admin/view`,
			icon: Sparkles,
			iconColor: "text-sky-500",
		},
	];

	return (
		<>
			<div className='base-block'>
				<h1 className='base-title'>Магазин {data?.shop.name}</h1>
				<div className='grid grid-cols-3 gap-6 mt-4'>
					{buttons.map((item: any) => (
						<Link
							key={item.label}
							className='h-20 rounded-md border border-sky-400 bg-transparent text-black text-xl font-semibold'
							href={item.href}
						>
							<Button className='h-20 bg-transparent text-black text-xl justify-start gap-5 font-semibold'>
								<item.icon className={`h-9 w-9 ${item.iconColor}`} />
								{item.label}
							</Button>
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
