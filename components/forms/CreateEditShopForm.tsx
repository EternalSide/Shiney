"use client";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {Button} from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {usePathname, useRouter} from "next/navigation";
import {shopSchema} from "@/lib/validations";
import {useToast} from "../ui/use-toast";
import {createShop, updateShop} from "@/actions/dbActions/shop.action";

interface Props {
	clerkId: string;
	type?: string;
	shopData?: any;
}

const CreateEditShopForm = ({clerkId, type, shopData}: Props) => {
	const shop = shopData && type === "Edit" && JSON.parse(shopData);

	const form = useForm<z.infer<typeof shopSchema>>({
		resolver: zodResolver(shopSchema),
		defaultValues: {
			name: shop?.name ? shop.name : "",
			link: shop?.link ? shop.link : "",
			description: shop?.description ? shop.description : "",
		},
	});

	const router = useRouter();
	const {toast} = useToast();
	const path = usePathname();

	const onSubmit = async (values: z.infer<typeof shopSchema>) => {
		try {
			if (type !== "Edit") {
				const newShop = await createShop({...values, clerkId});

				setTimeout(() => {
					router.push(`/shop/${newShop.link}`);
				}, 1000);
			} else {
				const updatedShop = await updateShop({
					...values,
					shopLink: shop.link,
					path,
				});

				setTimeout(() => {
					router.push(`/shop/${updatedShop.link}`);
				}, 1000);
			}

			toast({
				title:
					type !== "Edit"
						? "Магазин успешно создан ✔️"
						: "Изменения сохранены ✔️",
				description: "Через секунду вы будете перенаправлены на его страницу.",
			});
		} catch (e) {
			toast({
				title: "Что-то пошло не так...",
				description: "Попробуйте еще раз",
				variant: "destructive",
			});
		}
	};

	const {isLoading, isDirty} = form.formState;

	const cancelButton = () => (type === "Edit" ? form.reset() : router.back());

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8 mt-4'
			>
				<FormField
					control={form.control}
					name='name'
					render={({field}) => (
						<FormItem>
							<FormLabel className='font-semibold'>Название</FormLabel>
							<FormControl>
								<Input
									className='border-none bg-[#f4f5fa]'
									placeholder='Peppe Shop'
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Введите название дла вашего магазина.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='link'
					render={({field}) => (
						<FormItem>
							<FormLabel className='font-semibold'>Ссылка на магазин</FormLabel>
							<FormControl>
								<Input
									className='border-none bg-[#f4f5fa]'
									placeholder='PeppeShop'
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Ваш магазин будет располагаться по адресу{" "}
								{`peppe-blue.vercel.app/shop/${
									form.getValues().link || "peppeshop"
								}`}
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='description'
					render={({field}) => (
						<FormItem>
							<FormLabel className='font-semibold'>Описание</FormLabel>
							<FormControl>
								<Input
									className='border-none bg-[#f4f5fa]'
									placeholder='Продаем лягушек'
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Введите описание дла вашего магазина.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='flex justify-end items-center gap-6'>
					<Button
						onClick={cancelButton}
						className='bg-[#edeefb] font-semibold text-sky-500  p-6 rounded-lg'
						type='button'
					>
						{type === "Edit" ? "Очистить" : "Отменить"}
					</Button>
					<Button
						disabled={isLoading || !isDirty}
						variant='blue'
						type='submit'
					>
						{type === "Edit" ? "Сохранить изменения" : "Создать магазин"}
					</Button>
				</div>
			</form>
		</Form>
	);
};
export default CreateEditShopForm;
