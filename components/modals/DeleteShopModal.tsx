"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useModal } from "@/hooks/useModal";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { deleteShop } from "@/actions/dbActions/shop.action";
import { usePathname, useRouter } from "next/navigation";
import { useEdgeStore } from "@/lib/edgestore";

const DeleteShopModal = () => {
      const { isOpen, onClose, type, data } = useModal();
      const modalOpen = type === "deleteShop" && isOpen;
      const path = usePathname();
      const router = useRouter();
      const { edgestore } = useEdgeStore();

      const onClick = async () => {
            try {
                  toast({
                        title: "Мы начали удалять ваш магазин..",
                  });

                  if (path !== "/shops") {
                        router.push("/shops");
                  }

                  onClose();

                  await deleteShop({ shopId: data.shopId, path });

                  if (data.shopAvatar) {
                        await edgestore.shopImage.delete({
                              url: data.shopAvatar,
                        });
                  }

                  if (data.shopBanner) {
                        await edgestore.shopBanner.delete({
                              url: data.shopBanner,
                        });
                  }

                  toast({
                        title: "Магазин удален ✔️",
                  });
            } catch (e) {
                  toast({
                        title: "Что-то пошло не так...",
                        description: "Попробуйте еще раз",
                        variant: "destructive",
                  });
                  console.log(e);
            }
      };

      return (
            <Dialog open={modalOpen} onOpenChange={onClose}>
                  <DialogContent className="bg-white">
                        <DialogHeader>
                              <DialogTitle className="text-center text-2xl">Вы уверены?</DialogTitle>
                        </DialogHeader>
                        <DialogDescription className="text-zinc-700 text-center">
                              После подтверждения будут удалены все товары магазина, а также связанная с ним информация. Возможность отмены
                              данного действия отсутствует.
                        </DialogDescription>
                        <div className="flex justify-end items-center gap-3">
                              <Button className="bg-sky-500 text-white" onClick={onClose}>
                                    Отменить
                              </Button>
                              <Button onClick={onClick} variant="destructive">
                                    Удалить
                              </Button>
                        </div>
                  </DialogContent>
            </Dialog>
      );
};
export default DeleteShopModal;
