"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useClickOutside from "@/hooks/useClickOutside";
import { Search, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SearchResults from "./SearchResults";

const HeaderSearch = () => {
	const [searchValue, setSearchValue] = useState("");
	const router = useRouter();
	const [isFocused, setIsFocused] = useState(false);
	const [results, setResults] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isFinishedTyping, setIsFinishedTyping] = useState(false);
	const searchResultsRef = useRef(null);
	const pathname = usePathname();

	useClickOutside({
		ref: searchResultsRef,
		setOpen: setIsFinishedTyping,
		open: isFinishedTyping,
	});

	useEffect(() => {
		setIsFinishedTyping(false);
	}, [pathname]);

	// Обращение в дб и выдача результатов.
	// live - реузльатыт
	// useEffect(() => {
	// 	if (!searchValue) return;
	// 	const debounce = setTimeout(() => {
	// 		setIsFinishedTyping(true);
	// 		setIsLoading(true);
	// 		setResults("asdsadas");
	// 	}, 500);

	// 	// эмуляция работы
	// 	const asdasd = setTimeout(() => {
	// 		setIsLoading(false);
	// 	}, 1500);

	// 	return () => clearTimeout(debounce);
	// }, [searchValue]);

	// Нажатие на кнопку поиска.
	const handleSearch = () => {
		if (searchValue) {
			router.push(`/search?q=${searchValue.trim()}`);
		}
	};

	// Поиск на enter
	useEffect(() => {
		const handleEnter = (e: KeyboardEvent) => {
			if (e.key === "Enter" && isFocused && searchValue.trim()) {
				router.push(`/search?q=${searchValue.trim()}`);
				setIsFinishedTyping(false);
			}
		};

		document.addEventListener("keydown", handleEnter);

		return () => document.removeEventListener("keydown", handleEnter);
	}, [searchValue, isFocused]);

	// Поиск на enter работает только при фокусе на Div
	const handleFocus = () => {
		setIsFocused(true);
		if (results) setIsFinishedTyping(true);
	};

	const handleBlur = () => setIsFocused(false);

	return (
		<div
			ref={searchResultsRef}
			onFocus={handleFocus}
			onBlur={handleBlur}
			className={`flex-1 bg-[#f4f5fa] dark:bg-[#141518] relative rounded-xl flex items-center justify-between lg:mr-4 ${
				isFinishedTyping && "rounded-b-none"
			}`}
		>
			<Button
				variant="mainPage"
				className="ml-1 flex items-center gap-1.5 w-40 !px-0 border-transparent dark:bg-[#1d1f24]"
			>
				<Image
					alt="header icon"
					width={24}
					height={24}
					src="/logo.svg"
					className="object-cover rounded-full"
				/>
				<p className="text-sky-500 font-semibold max-md:hidden">Везде</p>
				<ChevronRight className="text-neutral-700 h-4 w-4 dark:text-sky-500" />
			</Button>
			<Input
				onChange={(e) => setSearchValue(e.target.value)}
				value={searchValue}
				placeholder="Глобальный поиск в Shiney..."
				className="bg-transparent border-none placeholder:text-zinc-900 font-medium max-sm:placeholder:text-[13px] dark:placeholder:text-[#626d7a] dark:text-white"
			/>
			<div className="flex items-center gap-1">
				{searchValue ? (
					<Button
						onClick={() => {
							setSearchValue("");
							setIsFinishedTyping(false);
							setResults("");
						}}
						variant="mainPage"
						className="mr-1 border-transparent dark:bg-[#1d1f24]"
					>
						<X className="text-sky-500 h-4 w-4" />
					</Button>
				) : (
					<div className="bg-transparent w-[54px]" />
				)}
				<Button
					onClick={handleSearch}
					variant="mainPage"
					className="mr-1 border-transparent dark:bg-[#1d1f24]"
				>
					<Search className="text-sky-500 h-4 w-4 " />
				</Button>
			</div>
			{isFinishedTyping && <SearchResults results={results} isLoading={isLoading} />}
		</div>
	);
};
export default HeaderSearch;
