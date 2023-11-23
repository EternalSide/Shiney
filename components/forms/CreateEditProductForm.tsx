// "use client";
// import {zodResolver} from "@hookform/resolvers/zod";
// import {useForm} from "react-hook-form";
// import * as z from "zod";
// import {Button} from "@/components/ui/button";
// import {
// 	Form,
// 	FormControl,
// 	FormDescription,
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormMessage,
// } from "@/components/ui/form";
// import {Input} from "@/components/ui/input";
// import {usePathname, useRouter} from "next/navigation";
// import {productSchema} from "@/lib/validations";
// import {useToast} from "../ui/use-toast";

// interface Props {
// 	clerkId: string;
// 	type?: string;
// 	shopData?: any;
// }

// const CreateEditProductForm = ({clerkId, type, shopData}: Props) => {
// 	// change to product
// 	const shop = shopData && type === "Edit" && JSON.parse(shopData);

// 	const form = useForm<z.infer<typeof productSchema>>({
// 		resolver: zodResolver(productSchema),
// 		defaultValues: {
// 			title: "",
// 			description: "",
// 			picture: "",
// 		},
// 	});
// 	const router = useRouter();
// 	const {toast} = useToast();
// 	const path = usePathname();

// 	const onSubmit = async (values: z.infer<typeof productSchema>) => {
// 		try {
// 			if (type !== "Edit") {
// 			} else {
// 			}

// 			toast({
// 				title: type !== "Edit" ? "Успех ✔️" : "Изменения сохранены ✔️",
// 				description: "Через секунду вы будете перенаправлены на его страницу.",
// 			});
// 		} catch (e) {
// 			toast({
// 				title: "Что-то пошло не так...",
// 				description: "Попробуйте еще раз",
// 				variant: "destructive",
// 			});
// 		}
// 	};

// 	const cancelButton = () => (type === "Edit" ? form.reset() : router.back());

// 	const {isLoading} = form.formState;

// 	return (
// 		<Form {...form}>
// 			<form
// 				onSubmit={form.handleSubmit(onSubmit)}
// 				className='space-y-8 mt-4'
// 			>
// 				<FormField
// 					control={form.control}
// 					name='title'
// 					render={({field}) => (
// 						<FormItem>
// 							<FormLabel className='font-semibold'>Наименование</FormLabel>
// 							<FormControl>
// 								<Input
// 									className='border-none bg-[#f4f5fa]'
// 									placeholder='Peppe Shop'
// 									{...field}
// 								/>
// 							</FormControl>
// 							<FormDescription>Введите наименование товара.</FormDescription>
// 							<FormMessage />
// 						</FormItem>
// 					)}
// 				/>
// 				<FormField
// 					control={form.control}
// 					name='description'
// 					render={({field}) => (
// 						<FormItem>
// 							<FormLabel className='font-semibold'>Описание</FormLabel>
// 							<FormControl>
// 								<Input
// 									className='border-none bg-[#f4f5fa]'
// 									placeholder='PeppeShop'
// 									{...field}
// 								/>
// 							</FormControl>
// 							<FormMessage />
// 						</FormItem>
// 					)}
// 				/>
// 				<FormField
// 					control={form.control}
// 					name='picture'
// 					render={({field}) => (
// 						<FormItem>
// 							<FormLabel className='font-semibold'>Изображение</FormLabel>
// 							<FormControl></FormControl>
// 							<FormMessage />
// 						</FormItem>
// 					)}
// 				/>

// 				<div className='flex justify-end items-center gap-6'>
// 					<Button
// 						onClick={cancelButton}
// 						className='bg-[#edeefb] font-semibold text-sky-500  p-6 rounded-lg'
// 						type='button'
// 					>
// 						{type === "Edit" ? "Очистить" : "Отменить"}
// 					</Button>
// 					<Button
// 						disabled={isLoading}
// 						variant='blue'
// 						type='submit'
// 					>
// 						{type === "Edit" ? "Сохранить изменения" : "Добавить"}
// 					</Button>
// 				</div>
// 			</form>
// 		</Form>
// 	);
// };
// export default CreateEditProductForm;
