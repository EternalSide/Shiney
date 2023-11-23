export interface ReactChildren {
	children: React.ReactNode;
}

export interface AdminParams {
	params: {name: string};
}

export interface ISliderItem {
	href: string;
	imgSrc: string;
}

export type AccumulatorItem = {
	label: string;
	href: string;
};

export type RecursiveData = {
	currentCategory: {
		label: string;
		href: string;
	} | null;
	accumulator: AccumulatorItem[];
};

export interface MainCategory {
	label: string;
	href: string;
	categories: {
		label: string;
		href: string;
	}[];
}
