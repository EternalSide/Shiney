import Link from "next/link";
import { FileSignature } from "lucide-react";
import DeleteShopAction from "../actions/DeleteShopAction";
import { Button } from "../ui/button";
import MyShopInfoBlock from "../shop/MyShopInfoBlock";

interface Props {
      name: string;
      description: string;
      link: string;
      buyCount: number;
      productsCount: number;
      clerkId: string;
      avatar: string;
      id: string;
      shopBanner: string;
}

const MyShopCard = ({ name, description, id, avatar, link, buyCount, shopBanner, productsCount, clerkId }: Props) => {
      return (
            <div className="flex items-start justify-between relative py-3 max-sm:pb-20">
                  <MyShopInfoBlock
                        avatar={avatar}
                        buyCount={buyCount}
                        description={description}
                        link={link}
                        productsCount={productsCount}
                        name={name}
                        headerText={name}
                  />
                  <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2">
                              <Link className="block" href={`shop/${link}/admin/edit`}>
                                    <button>
                                          <FileSignature className="text-sky-500" />
                                    </button>
                              </Link>
                              <DeleteShopAction shopId={id} shopBanner={shopBanner} clerkId={clerkId} shopAvatar={avatar} />
                        </div>
                        <Link href={`/shop/${link}/admin`} className="absolute bottom-0 right-0 max-sm:left-0 max-sm:-bottom-0">
                              <Button variant="blue" className="!px-10">
                                    Управление
                              </Button>
                        </Link>
                  </div>
            </div>
      );
};
export default MyShopCard;
