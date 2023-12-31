import Image from "next/image";

const CountryAction = () => {
	return (
		<button className="flex items-end gap-1.5 cursor-default">
			<Image alt="Россия" src="/icons/russia.svg" width={20} height={20} />
			<p className="text-blue-700 dark:text-blue-500 text-xs font-semibold">Россия</p>
		</button>
	);
};
export default CountryAction;
