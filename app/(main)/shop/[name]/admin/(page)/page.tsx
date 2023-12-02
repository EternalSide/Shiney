import DeleteShopAction from "@/components/actions/DeleteShopAction";
import checkAdmin from "@/actions/checkAdmin";
import { AdminParams } from "@/types";
import MyShopInfoBlock from "@/components/shop/MyShopInfoBlock";
import AdminButton from "@/components/shop/AdminButton";

export async function generateMetadata({ params }: AdminParams) {
      const data = await checkAdmin(params.name);
      return {
            title: `Магазин ${data?.shop.name} / Админ панель`,
      };
}

const ShopAdminPage = async ({ params }: AdminParams) => {
      const data = await checkAdmin(params.name);

      const adminButtons = [
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

      type AdminButton = (typeof adminButtons)[0];

      return (
            <div className="base-block">
                  <MyShopInfoBlock
                        headerText={`${data?.shop.name} / Админ панель`}
                        name={data?.shop.name}
                        avatar={data?.shop.avatar}
                        buyCount={data?.shop.buyCount}
                        description={data?.shop.description}
                        link={data?.shop.link}
                        productsCount={data?.shop.products.length}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
                        {adminButtons.map((button: AdminButton) => (
                              <AdminButton key={button.href} href={button.href} imgSrc={button.gif} label={button.label} />
                        ))}
                        <DeleteShopAction
                              shopId={data.shop.id}
                              shopAvatar={data.shop.avatar}
                              shopBanner={data.shop.banner}
                              clerkId={data.clerkId}
                              adminPage={true}
                        />
                  </div>
            </div>
      );
};
export default ShopAdminPage;
