import ShopBanner from "@/components/shop/ShopBanner";
import ShopHeader from "@/components/shop/ShopHeader";
import ShopLinks from "@/components/shop/ShopLinks";
import checkShop from "@/actions/checkShop";
import {auth} from "@clerk/nextjs";
import {getUserInfo} from "@/actions/dbActions/user.action";

import {AdminParams} from "@/types";

export async function generateMetadata({params}: AdminParams) {
	const shop = await checkShop(params.name);
	if (!shop) {
		return {
			title: `Магазин не найден / Shiney.ru`,
		};
	}
	return {
		title: `Магазин ${shop.name} / Shiney.ru`,
	};
}

interface Props {
	params: {
		name: string;
	};
	children: React.ReactNode;
}

const ShopPageLayout = async ({params, children}: Props) => {
	const shop = await checkShop(params.name);

	const {userId} = auth();
	const user = await getUserInfo({clerkId: userId!});

	if (!shop) {
		return (
			<h1 className='base-title'>
				Магазин <span className='text-blue-500'>{params.name}</span> не найден
			</h1>
		);
	}

	return (
		<div className='rounded-lg'>
			<ShopBanner
				alt={`Баннер магазина ${shop.name}`}
				shopBanner={shop?.banner}
			/>
			<ShopHeader
				shopName={shop.name}
				shopImage={shop.avatar}
				shopDescription={shop.description}
				shopLink={shop.link}
				buyCount={shop.buyCount}
				followersLength={shop.followers?.length}
				commentsLength={shop.comments?.length}
				ratingNumber={shop.rating}
				createdOn={shop.createdOn}
				verified={shop.verified}
				isFollowing={shop.followers.includes(user?._id.toString())}
				clerkId={userId || null}
			/>
			<div className='min-h-[720px] bg-white rounded-lg mt-6 p-6'>
				<ShopLinks shopLink={shop.link} />
				{children}
			</div>
		</div>
	);
};
export default ShopPageLayout;
