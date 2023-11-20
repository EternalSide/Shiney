import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Форматирование даты на странице магазина.
export function formatDateString(inputDate: Date): string {
	// Преобразование строки в объект Date
	const dateObj = new Date(inputDate);

	// Проверка на корректность даты
	if (isNaN(dateObj.getTime())) {
		return "Неверный формат даты";
	}

	// Определение месяца
	const months = [
		"января",
		"февраля",
		"марта",
		"апреля",
		"мая",
		"июня",
		"июля",
		"августа",
		"сентября",
		"октября",
		"ноября",
		"декабря",
	];
	const month = months[dateObj.getMonth()];

	// Определение года
	const year = dateObj.getFullYear();

	// Формирование результирующей строки
	const resultString = `с ${month} ${year}`;

	return resultString;
}
