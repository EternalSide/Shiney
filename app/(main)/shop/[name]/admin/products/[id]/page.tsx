import checkAdmin from "@/actions/checkAdmin";
import checkOwner from "@/actions/checkOwner";
import { getUserInfo } from "@/actions/dbActions/user.action";
import CreateEditProductForm from "@/components/forms/CreateEditProductForm";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import { Shop } from "@prisma/client";
import { redirect } from "next/navigation";

interface Props {
      params: {
            id: string;
      };
}

export async function generateMetadata({ params }: Props) {
      const productInfo = await prisma.product.findFirst({
            where: {
                  id: params.id,
            },
            include: {
                  Shop: {
                        select: {
                              name: true,
                        },
                  },
            },
      });
      if (!productInfo) return redirect("/");

      return {
            title: `Магазин ${productInfo?.Shop.name} / Редактировать товар / ${productInfo?.title}`,
      };
}

const EditProductPage = async ({ params }: Props) => {
      const productInfo = await prisma.product.findFirst({
            where: {
                  id: params.id,
            },
            include: {
                  Shop: {
                        select: {
                              name: true,
                        },
                  },
            },
      });

      const { userId } = auth();
      if (!productInfo || !userId) return redirect("/");
      const currentUser = await getUserInfo({ clerkId: userId });
      const isAdmin = currentUser?.shops.some((shop: Shop) => shop.id === productInfo.shopId);
      if (!isAdmin) return redirect("/");

      return (
            <div className="base-block">
                  <h1 className="base-title">
                        Магазин {productInfo?.Shop.name} / Редактировать товар / {productInfo?.title}
                  </h1>
                  <CreateEditProductForm productData={productInfo} type="Edit" />
            </div>
      );
};
export default EditProductPage;
