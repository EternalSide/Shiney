import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
      title: "Shiney / Для продавцов ",
};

const SellersInfoPage = () => {
      return (
            <div className="font-medium text-sm text-[#626d7a]">
                  <h1 className="base-title text-black">Для продавцов</h1>
                  <div className="base-block mt-4">
                        <div className="flex flex-col gap-1.5">
                              <p>
                                    Для начала торговли на Shiney вам нужно
                                    <Link href="/create">
                                          <span className="text-blue-600 font-semibold"> создать свой магазин.</span>
                                    </Link>
                              </p>
                              <p>После этого вам будет доступна админ панель, в которой вы сможете управлять магазином.</p>
                              <p>Если пользователь совершит у вас покупку, уведомление будет у вас в заказах админ панели.</p>
                              <p>Количество магазинов и товаров не ограничено. Удачных продаж! ❤️</p>
                        </div>
                  </div>
            </div>
      );
};
export default SellersInfoPage;
