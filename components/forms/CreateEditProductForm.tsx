"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter } from "next/navigation";
import { productSchema } from "@/lib/validations";
import { useToast } from "../ui/use-toast";
import { AllCategoryItem, allCategories } from "@/lib/allCategories";
import { useState } from "react";
import { addProductToShop, editProduct } from "@/actions/product.action";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "./SingleImageDropzone";

interface Props {
	userId?: string;
	shopId?: string;
	shopLink?: string;
	productData?: any;
	type?: string;
}

const CreateEditProductForm = ({ userId, shopId, shopLink, productData, type }: Props) => {
	const form = useForm<z.infer<typeof productSchema>>({
		resolver: zodResolver(productSchema),
		defaultValues: {
			title: productData ? productData.title : "",
			description: productData ? productData.description : "",
			price: productData ? productData.price : "",
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
		try {
			if (type !== "Edit") {
				let pic_avatar = "";
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
					shopId: shopId!,
					avatar: pic_avatar,
				});

				toast({
					title: "Товар добавлен ✅",
				});

				return router.push(`/shop/${shopLink}`);
			} else {
				let new_pic_avatar = productData?.picture;
				toast({
					title: "Обновляем информацию..",
				});
				if (productImage) {
					const res = await edgestore.productImages.upload({
						file: productImage!,
						options: {
							replaceTargetUrl: productData?.picture!,
						},
					});
					new_pic_avatar = res.url;
				}
				await editProduct({
					title: values.title,
					description: values.description,
					price: values.price,
					id: productData?.id,
					path,
					shopId: shopId!,
					picture: new_pic_avatar,
				});

				toast({
					title: "Изменения сохранены ✅",
				});
				return router.back();
			}
		} catch (e) {
			toast({
				title: "Что-то пошло не так...",
				description: "Попробуйте еще раз",
				variant: "destructive",
			});
		}
	};

	const { isLoading, isDirty } = form.formState;

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4 w-full">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="font-semibold dark:text-white">
								Наименование
							</FormLabel>
							<FormControl>
								<Input
									className="input-product"
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
							<FormLabel className="font-semibold dark:text-white">
								Описание
							</FormLabel>
							<FormControl>
								<Input
									className="input-product"
									placeholder="Введите описание товара"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>{" "}
				{type !== "Edit" && (
					<div className="flex gap-3 items-end w-full">
						<FormField
							control={form.control}
							name="categoryHref"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel className="font-semibold dark:text-white">
										Категория
									</FormLabel>
									<FormControl>
										<Select
											onValueChange={(value) => {
												const currentItem = allCategories?.find(
													(item: any) => {
														if (value === item.data.value) return item;
													}
												);
												// @ts-ignore
												setCurrentCategory(currentItem);

												// @ts-ignore
												setMainCategory(currentItem.href);
												// @ts-ignore
												form.setValue("categoryHref", currentItem.href);
											}}
										>
											<SelectTrigger className="w-[400px]  bg-[#f4f5fa] dark:bg-neutral-900 dark:border-transparent dark:text-white">
												<SelectValue placeholder="Выберите категорию" />
											</SelectTrigger>
											<SelectContent className="bg-[#f4f5fa] dark:bg-neutral-900 dark:border-transparent dark:text-white ">
												{allCategories.map((item: AllCategoryItem) => (
													<div className="flex flex-col items-start">
														<SelectItem
															value={item.value}
															key={item.value}
															className="hover:bg-[#e0f2fe] p-3 rounded-md w-full cursor-pointer dark:hover:bg-neutral-800 dark:hover:text-white"
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
				)}
				<FormField
					control={form.control}
					name="price"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="font-semibold dark:text-zinc-400">Цена</FormLabel>
							<FormControl>
								<div className="flex items-center gap-2">
									<Input
										type="number"
										className="input-product w-1/4 max-w-[200px]"
										{...field}
									/>
									<p className="font-semibold text-lg dark:text-white">₽</p>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div>
					<h3 className="dark:text-white mb-3 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold">
						Изображение
					</h3>
					<SingleImageDropzone
						width={300}
						height={300}
						value={
							type !== "Edit"
								? productImage || undefined
								: productImage
								? productImage
								: productData?.picture
						}
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
					<Button disabled={isLoading || !isDirty} variant="blue" type="submit">
						Добавить
					</Button>
				</div>
			</form>
		</Form>
	);
};
export default CreateEditProductForm;
