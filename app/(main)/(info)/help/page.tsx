import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";
import Link from "next/link";

const HelpPage = () => {
	return (
		<>
			<div className='mt-2 flex items-center gap-2'>
				<Link href='/'>
					<p className='text-[#626d7a] font-medium text-sm hover:text-blue-600 transition'>
						Главная
					</p>
				</Link>
				<ChevronRight className='h-4 w-4' />

				<p className='text-blue-600 font-medium text-sm'>Помощь</p>
			</div>
			<div className='mt-4 flex gap-8 items-start'>
				<div className='w-[320px] bg-white rounded-lg py-6 h-64'>
					<h3 className='px-4 font-semibold'>1. Мой заказ</h3>
					<ul className='flex flex-col gap-3 mt-3'>
						<Button className='bg-sky-500 font-semibold text-white py-6 text-left justify-start'>
							1.1 Как оформить розничный заказ
						</Button>
					</ul>
				</div>
				<div className='flex-1 bg-white rounded-lg py-6 px-4'>
					<h3 className='font-semibold mb-1'>Как оформить розничный заказ</h3>
					<p className='text-red-500 mb-6'>
						*Данная страница сделана для ознакомления и не несет в себе ничего
						полезного. Информация вымышленная.
					</p>

					<ul className='flex flex-col gap-3'>
						<li> Шаги для оформления оптового заказа:</li>
						<li>
							1. Выберите нужные товары и добавьте их в корзину.{" "}
							<span className='font-semibold'>Обратите внимание</span>, что
							каждый оптовый продавец имеет минимальную сумму заказа, которую
							необходимо превысить, чтобы сделать заказ.
						</li>

						<li>
							2. Перейдите в раздел Корзина и нажмите кнопку Перейти к
							оформлению.
						</li>
						<li>
							3. Укажите свои данные. Если вы не авторизованы, авторизуйтесь с
							помощью аккаунта в Telegram или адреса электронной почты.
						</li>
						<li>4. Выберите способ доставки и укажите адрес доставки.</li>
						<li>
							5. Добавьте все ваши пожелания к заказу в поле Комментарий к
							заказу.
						</li>
						<li>
							6. Оформите заказ и ожидайте ответа от продавца. После
							согласования заказа магазин выставит вам счет к оплате.
						</li>
						<li>
							7. Ваш заказ будет отправлен после оплаты. Если у продавца
							доступен самовывоз, оплату можно произвести на месте.
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
export default HelpPage;
