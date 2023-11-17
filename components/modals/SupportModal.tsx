import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {Button} from "../ui/button";
import {Navigation} from "lucide-react";

const SupportModal = () => {
	return (
		<Dialog open={false}>
			<DialogContent className='bg-white'>
				<DialogHeader>
					<DialogTitle className='text-center mb-3'>
						Поддержка Peppe
					</DialogTitle>
				</DialogHeader>
				<div className='flex flex-col gap-4'>
					<Button className='bg-blue-700 text-white text-base font-semibold gap-2'>
						<Navigation className='h-5 w-5' />
						Помощь с заказами
					</Button>
					<Button className='bg-blue-700 text-white text-base font-semibold gap-2'>
						<Navigation className='h-5 w-5' />
						Техническая поддержка
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};
export default SupportModal;
