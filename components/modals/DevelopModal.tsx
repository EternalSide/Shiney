import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {useModal} from "@/hooks/useModal";
import {DialogDescription} from "@radix-ui/react-dialog";

const DevelopModal = () => {
	const {isOpen, onClose, type, data} = useModal();
	const modalOpen = type === "development" && isOpen;

	return (
		<Dialog
			open={modalOpen}
			onOpenChange={() => onClose()}
		>
			<DialogContent className='bg-white'>
				<DialogHeader>
					<DialogTitle className='text-center mb-3'>
						Функция в разработке
					</DialogTitle>
				</DialogHeader>
				<DialogDescription className='text-center'>{data}</DialogDescription>
			</DialogContent>
		</Dialog>
	);
};
export default DevelopModal;
