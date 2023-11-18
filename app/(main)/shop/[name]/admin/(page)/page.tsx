import {Button} from "@/components/ui/button";
import checkOwner from "@/serverActions/checkOwner";
import {getShopInfo} from "@/serverActions/shop.action";
import {getUserInfo} from "@/serverActions/user.action";
import {auth, redirectToSignIn} from "@clerk/nextjs";
import {FileEdit, PackagePlus, Plus, Sparkles, Store, X} from "lucide-react";
import Link from "next/link";
import {redirect} from "next/navigation";

const ShopAdminPage = async ({params}: {params: {name: string}}) => {
	const {userId} = auth();
	if (!userId) redirectToSignIn();

	const user = await getUserInfo({clerkId: userId});
	const shop = await getShopInfo({name: params.name});

	if (!shop) redirect("/");

	const isOwner = checkOwner(user, shop._id.toString());

	if (!isOwner) redirect("/");

	const buttons = [
		{
			label: "Добавить товар",
			href: `/shop/${shop.link}/admin/add`,
			icon: Plus,
			iconColor: "text-blue-500",
		},
		{
			label: "Управление товарами",
			href: `/shop/${shop.link}/admin/products`,
			icon: Store,
			iconColor: "text-indigo-500",
		},
		{
			label: "Заказы",
			href: "/",
			icon: PackagePlus,
			iconColor: "text-yellow-400",
		},
		{
			label: "Редактировать",
			href: `/shop/${shop.link}/admin/edit`,
			icon: FileEdit,
			iconColor: "text-green-500",
		},
		{
			label: "Оформление",
			href: "/",
			icon: Sparkles,
			iconColor: "text-sky-500",
		},
		{
			label: "Удалить",
			href: "/",
			icon: X,
			iconColor: "text-red-500",
		},
	];

	return (
		<>
			<div className='p-6 bg-white rounded-xl'>
				<h1 className='font-semibold text-2xl'>Магазин {shop.name}</h1>
				<div className='grid grid-cols-3 gap-6 mt-4'>
					{buttons.map((item: any) => (
						<Link
							className='h-20 border border-sky-400 bg-transparent text-black text-xl font-semibold'
							href={item.href}
							key={item.label}
						>
							<Button className='h-20 bg-transparent text-black text-xl justify-start gap-5 font-semibold'>
								<item.icon className={`h-9 w-9 ${item.iconColor}`} />
								{item.label}
							</Button>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};
export default ShopAdminPage;
