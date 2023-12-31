import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Средний рейтинг магазина
function calculateShopRating(ratings: number[]): number {
	if (ratings.length === 0) {
		return 0;
	}

	const sum = ratings.reduce((acc, rating) => acc + rating, 0);

	const shopRating = sum / ratings.length;

	return shopRating;
}

// Форматирование даты на странице магазина.
export function formatDateString(inputDate: Date): string {
	const dateObj = new Date(inputDate);

	if (isNaN(dateObj.getTime())) {
		return "Неверный формат даты";
	}

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

	const year = dateObj.getFullYear();

	const resultString = `с ${month} ${year}`;

	return resultString;
}

export const formUrlQuery = ({ params, key, value }: any) => {
	const currentUrl = qs.parse(params);

	currentUrl[key] = value;

	return qs.stringifyUrl(
		{ url: window.location.pathname, query: currentUrl },
		{ skipNull: true }
	);
};
