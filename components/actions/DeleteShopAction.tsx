"use client";
import { useModal } from "@/hooks/useModal";
import { X } from "lucide-react";
import Image from "next/image";

interface Props {
      shopId: string;
      shopAvatar: string | null;
      shopBanner: string | null;
      adminPage?: boolean;
      clerkId: string;
}

const DeleteShopAction = ({ shopId, shopAvatar, shopBanner, adminPage, clerkId }: Props) => {
      const { onOpen } = useModal();

      const openDeleteModal = () => {
            onOpen("deleteShop", {
                  shopId,
                  shopAvatar,
                  shopBanner,
            });
      };

      if (adminPage) {
            return (
                  <button onClick={openDeleteModal} className="admin-shop-card group hover:bg-sky-500" type="button">
                        <div className="relative h-28 w-28">
                              <Image fill className="object-cover" src={`/ducks/delete.gif`} alt="Удалить" />
                        </div>

                        <div className="flex items-center group">
                              <X className="h-9 w-9 text-red-500" />
                              <p className="group-hover:text-white transition">Удалить</p>
                        </div>
                  </button>
            );
      }

      return (
            <button onClick={openDeleteModal} type="button">
                  <X className="text-red-500 relative h-7 w-7 -mt-1.5" />
            </button>
      );
};
export default DeleteShopAction;
