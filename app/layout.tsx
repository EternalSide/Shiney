import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ReactChildren} from "@/types";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Товары оптом от поставщиков в оптовом маркетплейсе - ChillZone.com",
	description:
		"Оптовый маркетплейс ChillZone - проверенные поставщики с гарантией. Электроника, одежда, косметика и многое другое. Выгодные условия дропшиппинга и совместных покупок.",
};

export default function RootLayout({children}: ReactChildren) {
	return (
		<html lang='ru'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
