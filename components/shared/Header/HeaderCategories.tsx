import {Button} from "@/components/ui/button";
import {Blinds} from "lucide-react";

const HeaderCategories = () => {
	return (
		<Button className='bg-[#f2f5fa] hover:bg-[#e2e4ee]'>
			<Blinds className='text-sky-500 h-5 w-5' />
		</Button>
	);
};
export default HeaderCategories;
