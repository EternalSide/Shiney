import ShopCard from "@/components/cards/ShopCard";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Shop } from "@prisma/client";
import { noShopImage } from "@/constants";
export const metadata: Metadata = {
      title: "Shiney / Магазины",
};

interface Props {
      searchParams: {
            [key: string]: string | undefined;
      };
}

const AllShopsPage = async ({ searchParams }: Props) => {
      const allShops = await prisma.shop.findMany({
            include: {
                  followers: {
                        include: {
                              user: true,
                        },
                  },
            },
      });

      return (
            <>
                  <h1 className="base-title">Магазины</h1>
                  <div className="grid_new-products">
                        {allShops?.length > 0 ? (
                              allShops.map((shop: (typeof allShops)[0]) => (
                                    <ShopCard
                                          key={shop.id}
                                          title={shop.name}
                                          imgSrc={shop?.avatar || noShopImage}
                                          link={shop.link}
                                          buyNumber={shop.buyCount}
                                          description={shop.description}
                                          followersCount={shop.followers.length}
                                    />
                              ))
                        ) : (
                              <h1 className="text-[#626d7a] font-semibold text-2xl">Ничего не найдено</h1>
                        )}
                  </div>
                  {/* {allShops?.length > 0 && <Pagination currentPage={currentPage} isNextPage={isNextPage} />} */}
            </>
      );
};
export default AllShopsPage;
