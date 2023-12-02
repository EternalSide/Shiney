"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter } from "next/navigation";
import { shopSchema } from "@/lib/validations";
import { useToast } from "../ui/use-toast";
import { createShop, updateShop } from "@/actions/dbActions/shop.action";
import { useEdgeStore } from "@/lib/edgestore";
import { useState } from "react";
import { SingleImageDropzone } from "./SingleImageDropzone";
import { Follower, Product, Shop } from "@prisma/client";

interface ShopWithProductsAndFollowers extends Shop {
      followers: Follower[];
      products: Product[];
}

interface Props {
      clerkId: string;
      type?: string;
      shopData?: ShopWithProductsAndFollowers;
}

const CreateEditShopForm = ({ clerkId, type, shopData }: Props) => {
      const shop = shopData && type === "Edit" ? shopData : null;

      const form = useForm<z.infer<typeof shopSchema>>({
            resolver: zodResolver(shopSchema),
            defaultValues: {
                  name: shop?.name ? shop.name : "",
                  link: shop?.link ? shop.link : "",
                  description: shop?.description ? shop.description : "",
            },
      });

      const [shopImage, setShopImage] = useState<File>();
      const { edgestore } = useEdgeStore();
      const router = useRouter();
      const { toast } = useToast();
      const path = usePathname();

      const onSubmit = async (values: z.infer<typeof shopSchema>) => {
            try {
                  if (type !== "Edit") {
                        toast({
                              title: "Ваш магазин создается.. 🏪",
                              description: "Через несколько секунд вы будете перенаправлены на его страницу.",
                        });

                        let shop_image = "";

                        if (shopImage) {
                              const res = await edgestore.shopImage.upload({
                                    file: shopImage,
                              });

                              shop_image = res.url;
                        }

                        const { shopLink } = await createShop({
                              ...values,
                              clerkId,
                              path,
                              image: shop_image,
                        });

                        toast({
                              title: "Магазин успешно создан ✔️",
                        });

                        router.push(`/shop/${shopLink}`);
                  } else {
                        toast({
                              title: "Обновляем информацию..",
                        });

                        let updated_shop_avatar = shop?.avatar || "";

                        if (shopImage) {
                              // Загрузить новую
                              const res = await edgestore.shopImage.upload({
                                    onProgressChange: (progress) => {},
                                    file: shopImage,
                                    options: {
                                          replaceTargetUrl: shop?.avatar!,
                                    },
                              });

                              updated_shop_avatar = res.url;
                        }

                        await updateShop({
                              ...values,
                              path,
                              avatar: updated_shop_avatar,
                              shopLink: shop?.link.trim()!,
                        });

                        toast({
                              title: "Изменения сохранены ✔️",
                        });

                        router.push(`/shops`);
                  }
            } catch (e) {
                  toast({
                        title: "Что-то пошло не так...",
                        description: "Попробуйте еще раз",
                        variant: "destructive",
                  });
                  console.log(e);
            }
      };

      const { isLoading, isDirty } = form.formState;

      return (
            <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
                        <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                    <FormItem>
                                          <FormLabel className="font-semibold">
                                                Название <span className="text-orange-500">*</span>
                                          </FormLabel>
                                          <FormControl>
                                                <Input className="border-none bg-[#f4f5fa]" placeholder="Peppe Shop" {...field} />
                                          </FormControl>
                                          <FormDescription>Введите название дла вашего магазина.</FormDescription>
                                          <FormMessage />
                                    </FormItem>
                              )}
                        />
                        <FormField
                              control={form.control}
                              name="link"
                              render={({ field }) => (
                                    <FormItem>
                                          <FormLabel className="font-semibold">
                                                Ссылка на магазин <span className="text-orange-500">*</span>
                                          </FormLabel>
                                          <FormControl>
                                                <Input className="border-none bg-[#f4f5fa]" placeholder="PeppeShop" {...field} />
                                          </FormControl>
                                          <FormDescription>
                                                Ваш магазин будет располагаться по адресу{" "}
                                                {`shiney.ru/shop/${form.getValues().link.trim() || ""}`}
                                          </FormDescription>
                                          <FormMessage />
                                    </FormItem>
                              )}
                        />
                        <FormField
                              control={form.control}
                              name="description"
                              render={({ field }) => (
                                    <FormItem>
                                          <FormLabel className="font-semibold">
                                                Описание <span className="text-orange-500">*</span>
                                          </FormLabel>
                                          <FormControl>
                                                <Input className="border-none bg-[#f4f5fa]" placeholder="Продаем лягушек" {...field} />
                                          </FormControl>
                                          <FormDescription>Введите описание дла вашего магазина.</FormDescription>
                                          <FormMessage />
                                    </FormItem>
                              )}
                        />

                        {type !== "Edit" && (
                              <FormField
                                    control={form.control}
                                    // @ts-ignore
                                    name="image"
                                    render={({ field }) => (
                                          <FormItem>
                                                <FormLabel className="font-semibold">Изображение</FormLabel>
                                                <FormControl>
                                                      <SingleImageDropzone
                                                            width={300}
                                                            height={300}
                                                            value={shopImage}
                                                            onChange={(file) => {
                                                                  setShopImage(file);
                                                            }}
                                                      />
                                                </FormControl>
                                                <FormDescription>Изображение вашего магазина.</FormDescription>
                                                <FormMessage />
                                          </FormItem>
                                    )}
                              />
                        )}
                        <div className="flex justify-end items-center gap-6">
                              <Button
                                    onClick={() => router.back()}
                                    className="bg-[#edeefb] font-semibold text-sky-500  p-6 rounded-lg"
                                    type="button"
                              >
                                    Отменить
                              </Button>
                              <Button disabled={isLoading || !isDirty} variant="blue" type="submit">
                                    {type === "Edit" ? "Сохранить изменения" : "Создать магазин"}
                              </Button>
                        </div>
                  </form>
            </Form>
      );
};
export default CreateEditShopForm;
