import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ReactChildren} from "@/types";
import {ClerkProvider} from "@clerk/nextjs";
import {ruRU} from "@clerk/localizations";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Товары оптом от поставщиков в оптовом маркетплейсе - Peppe",
	description:
		"Оптовый маркетплейс ChillZone - проверенные поставщики с гарантией. Электроника, одежда, косметика и многое другое. Выгодные условия дропшиппинга и совместных покупок.",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({children}: ReactChildren) {
	return (
		<ClerkProvider localization={ruRU}>
			<html lang='ru'>
				<body className={inter.className}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
