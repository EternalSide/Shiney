import MainMenuLink from "@/components/shared/MainMenuLink";
import {ChevronRight} from "lucide-react";

interface Props {
	searchParams?: {
		q?: string;
	};
}

const SearchPage = ({searchParams}: Props) => {
	return (
		<div>
			<div className='flex items-end gap-2'>
				<MainMenuLink />
				<div className='flex items-center gap-2'>
					<ChevronRight className='h-4 w-4' />
					<p className='font-medium text-sm text-sky-500'>Поиск</p>
				</div>
			</div>
			<h1 className='base-title mt-12'>
				По запросу <span className='text-blue-500'>“{searchParams?.q}”</span>{" "}
				найдено 0 товаров
			</h1>
		</div>
	);
};
export default SearchPage;
