"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { redirect, usePathname, useRouter } from "next/navigation";
import { productSchema } from "@/lib/validations";
import { useToast } from "../ui/use-toast";
import { AllCategoryItem, allCategories } from "@/lib/allCategories";
import { useState } from "react";
import { addProductToShop } from "@/actions/dbActions/product.action";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "./SingleImageDropzone";

interface Props {
      userId: string;
      shopId: string;
}

const CreateEditProductForm = ({ userId, shopId }: Props) => {
      const form = useForm<z.infer<typeof productSchema>>({
            resolver: zodResolver(productSchema),
            defaultValues: {
                  title: "",
                  description: "",
                  price: "0",
                  categoryHref: "",
            },
      });
      const router = useRouter();
      const { toast } = useToast();
      const path = usePathname();

      const [mainCategory, setMainCategory] = useState("");
      const [currentCategory, setCurrentCategory] = useState(null);
      const [productImage, setProductImage] = useState<File>();
      const { edgestore } = useEdgeStore();

      const onSubmit = async (values: z.infer<typeof productSchema>) => {
            let pic_avatar = "";

            try {
                  if (productImage) {
                        const res = await edgestore.productImages.upload({
                              file: productImage!,
                        });
                        pic_avatar = res.url;
                  }

                  await addProductToShop({
                        title: values.title,
                        description: values.description,
                        price: values.price,
                        categories: values.categoryHref,
                        path,
                        shopId,
                        avatar: pic_avatar,
                  });

                  toast({
                        title: "Товар добавлен",
                  });

                  return redirect("/new-products");
            } catch (e) {
                  toast({
                        title: "Что-то пошло не так...",
                        description: "Попробуйте еще раз",
                        variant: "destructive",
                  });
            }
      };

      const { isLoading } = form.formState;

      return (
            <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4 w-full">
                        <div className="flex gap-3 items-end w-full">
                              <FormField
                                    control={form.control}
                                    name="categoryHref"
                                    render={({ field }) => (
                                          <FormItem className="w-full">
                                                <FormLabel className="font-semibold">Категория</FormLabel>
                                                <FormControl>
                                                      <Select
                                                            onValueChange={(value) => {
                                                                  const currentItem = allCategories?.find((item: any) => {
                                                                        if (value === item.data.value) return item;
                                                                  });
                                                                  // @ts-ignore
                                                                  setCurrentCategory(currentItem);

                                                                  // @ts-ignore
                                                                  setMainCategory(currentItem.href);
                                                                  // @ts-ignore
                                                                  form.setValue("categoryHref", currentItem.href);
                                                            }}
                                                      >
                                                            <SelectTrigger className="!min-w-full  bg-[#f4f5fa]">
                                                                  <SelectValue placeholder="Выберите категорию" />
                                                            </SelectTrigger>
                                                            <SelectContent className="bg-[#f4f5fa]">
                                                                  {allCategories.map((item: AllCategoryItem) => (
                                                                        <div className="flex flex-col items-start">
                                                                              <SelectItem
                                                                                    value={item.value}
                                                                                    key={item.value}
                                                                                    className="hover:bg-[#e0f2fe] p-3 rounded-md w-full cursor-pointer"
                                                                              >
                                                                                    <div className="!flex !flex-row items-center gap-4">
                                                                                          <item.data.icon className="text-zinc-500 h-[22px] w-[22px]" />
                                                                                          <h3 className="font-medium text-base">
                                                                                                {item.data.label}
                                                                                          </h3>
                                                                                    </div>
                                                                              </SelectItem>
                                                                        </div>
                                                                  ))}
                                                            </SelectContent>
                                                      </Select>
                                                </FormControl>
                                                <FormMessage />
                                          </FormItem>
                                    )}
                              />
                        </div>
                        <FormField
                              control={form.control}
                              name="title"
                              render={({ field }) => (
                                    <FormItem>
                                          <FormLabel className="font-semibold">Наименование</FormLabel>
                                          <FormControl>
                                                <Input
                                                      className="border-none bg-[#f4f5fa]"
                                                      placeholder="Введите название товара"
                                                      {...field}
                                                />
                                          </FormControl>

                                          <FormMessage />
                                    </FormItem>
                              )}
                        />
                        <FormField
                              control={form.control}
                              name="description"
                              render={({ field }) => (
                                    <FormItem>
                                          <FormLabel className="font-semibold">Описание</FormLabel>
                                          <FormControl>
                                                <Input
                                                      className="border-none bg-[#f4f5fa]"
                                                      placeholder="Введите описание товара"
                                                      {...field}
                                                />
                                          </FormControl>
                                          <FormMessage />
                                    </FormItem>
                              )}
                        />
                        <FormField
                              control={form.control}
                              name="price"
                              render={({ field }) => (
                                    <FormItem>
                                          <FormLabel className="font-semibold">Цена</FormLabel>
                                          <FormControl>
                                                <Input type="number" className="border-none bg-[#f4f5fa]" {...field} />
                                          </FormControl>
                                          <FormMessage />
                                    </FormItem>
                              )}
                        />
                        <div>
                              <h3 className="mb-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold">
                                    Изображение
                              </h3>
                              <SingleImageDropzone
                                    width={300}
                                    height={300}
                                    value={productImage || undefined}
                                    onChange={(file) => setProductImage(file)}
                              />
                        </div>
                        <div className="flex justify-end items-center gap-6">
                              <Button
                                    onClick={() => router.back()}
                                    className="bg-[#edeefb] font-semibold text-sky-500  p-6 rounded-lg"
                                    type="button"
                              >
                                    Отменить
                              </Button>
                              <Button disabled={isLoading} variant="blue" type="submit">
                                    Добавить
                              </Button>
                        </div>
                  </form>
            </Form>
      );
};
export default CreateEditProductForm;
