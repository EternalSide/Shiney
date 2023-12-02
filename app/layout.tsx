import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactChildren } from "@/types";
import { ClerkProvider } from "@clerk/nextjs";
import { ruRU } from "@clerk/localizations";
import { EdgeStoreProvider } from "../lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
      title: "Shiney. Самый быстрый и элегантный маркетплейс.",
      description:
            "Маркетплейс Shiney - платформа для продажи и покупки товаров, неограниченное количество ваших личных магазинов и товаров. ",
      icons: {
            icon: "/logo.png",
      },
};

export default function RootLayout({ children }: ReactChildren) {
      return (
            <ClerkProvider localization={ruRU}>
                  <html lang="ru">
                        <body className={inter.className}>
                              <EdgeStoreProvider>{children}</EdgeStoreProvider>
                        </body>
                  </html>
            </ClerkProvider>
      );
}
