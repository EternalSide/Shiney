import ShopBanner from "@/components/shop/ShopBanner";
import ShopHeader from "@/components/shop/ShopHeader";
import {getShopInfo} from "@/serverActions/shop.action";
import {redirect} from "next/navigation";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {MailQuestion, Star, Store} from "lucide-react";
import ShopProducts from "@/components/shop/ShopProducts";
import ShopComments from "@/components/shop/ShopComments";
import ShopAbout from "@/components/shop/ShopAbout";

interface ShopPageProps {
	params: {
		name: string;
	};
}

const ShopPage = async ({params}: ShopPageProps) => {
	const {name} = params;

	const shop = await getShopInfo({name});
	if (!shop) redirect("/");

	return (
		<>
			<div className='rounded-lg'>
				<ShopBanner />
				<ShopHeader shopName={shop.name} />
				<div className='min-h-[720px] bg-white rounded-lg mt-6 p-6'>
					<Tabs
						defaultValue='products'
						className='w-full'
					>
						<TabsList className='flex gap-10 bg-transparent'>
							<TabsTrigger
								className='text-base font-semibold'
								value='products'
							>
								<Store className='h-5 w-5' />
								Товары
							</TabsTrigger>
							<TabsTrigger
								className='text-base font-semibold'
								value='reviews'
							>
								<Star className='h-5 w-5' />
								Отзывы
							</TabsTrigger>
							<TabsTrigger
								className=' text-base font-semibold'
								value='about'
							>
								<MailQuestion className='h-5 w-5' />О Нас
							</TabsTrigger>
						</TabsList>

						<TabsContent value='products'>
							<ShopProducts />
						</TabsContent>
						<TabsContent value='reviews'>
							<ShopComments />
						</TabsContent>
						<TabsContent value='about'>
							<ShopAbout />
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</>
	);
};
export default ShopPage;
