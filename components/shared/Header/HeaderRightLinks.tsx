import {Button} from "@/components/ui/button";
import {headerLinks} from "@/constants";
import {HeaderLinkType} from "@/constants/types";
import Link from "next/link";

const HeaderRightLinks = () => {
	return (
		<div className='flex gap-3'>
			{headerLinks.map((item: HeaderLinkType) => (
				<Link
					key={item.href}
					href={item.href}
				>
					<Button
						variant='mainPage'
						className=' hover:border-blue-700'
					>
						<item.icon className='text-[#252525] h-5 w-5' />
					</Button>
				</Link>
			))}
		</div>
	);
};
export default HeaderRightLinks;
