import ShopBanner from "@/components/shop/ShopBanner";
import ShopHeader from "@/components/shop/ShopHeader";
import ShopLinks from "@/components/shop/ShopLinks";
import { auth } from "@clerk/nextjs";
import { AdminParams } from "@/types";
import { getShopInfo } from "@/actions/dbActions/shop.action";

export async function generateMetadata({ params }: AdminParams) {
      const shop = await getShopInfo({ name: params.name });

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

const ShopPageLayout = async ({ params, children }: Props) => {
      const shop = await getShopInfo({ name: params.name });

      const { userId } = auth();

      if (!shop) {
            return (
                  <h1 className="base-title">
                        Магазин <span className="text-blue-500">{params.name}</span> не найден
                  </h1>
            );
      }

      return (
            <div className="rounded-lg">
                  <ShopBanner alt={`Баннер магазина ${shop.name}`} shopBanner={shop?.banner} />
                  <ShopHeader
                        shopName={shop.name}
                        shopImage={shop.avatar}
                        shopDescription={shop.description}
                        shopLink={shop.link}
                        buyCount={shop.buyCount}
                        followersLength={0}
                        commentsLength={0}
                        ratingNumber={shop.rating}
                        createdOn={shop.createdOn}
                        verified={shop.verified}
                        isFollowing={false}
                        clerkId={userId || null}
                  />
                  <div className="min-h-[720px] bg-white rounded-lg mt-6 p-6">
                        <ShopLinks shopLink={shop.link} />
                        {children}
                  </div>
            </div>
      );
};
export default ShopPageLayout;
