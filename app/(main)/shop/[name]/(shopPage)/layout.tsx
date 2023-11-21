import ShopBanner from "@/components/shop/ShopBanner";
import ShopHeader from "@/components/shop/ShopHeader";
import ShopLinks from "@/components/shop/ShopLinks";
import checkShop from "@/actions/checkShop";
import {auth} from "@clerk/nextjs";
import {getUserInfo} from "@/actions/dbActions/user.action";

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

	return (
		<div className='rounded-lg'>
			<ShopBanner alt={`Баннер магазина ${shop.name}`} />
			<ShopHeader
				shopName={shop.name}
				shopImage={shop.avatar}
				shopLink={shop.link}
				buyCount={shop.buyCount}
				followersLength={shop.followers?.length}
				commentsLength={shop.comments?.length}
				ratingNumber={shop.rating}
				createdOn={shop.createdOn}
				verified={shop.verified}
				isFollowing={shop.followers.includes(user._id.toString())}
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
