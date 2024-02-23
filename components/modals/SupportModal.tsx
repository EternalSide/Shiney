import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, Navigation } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import Link from "next/link";
import { HeaderSupportLink } from "@/constants/types";

const SupportModal = () => {
	const { isOpen, onClose, type } = useModal();
	const modalOpen = type === "help" && isOpen;

	const supportLinks: HeaderSupportLink[] = [
		{
			label: "Telegram",
			href: "https://t.me/AAT_L",
			icon: Navigation,
		},
		{
			label: "Github",
			href: "https://github.com/EternalSide",
			icon: Github,
		},
	];

	return (
		<Dialog open={modalOpen} onOpenChange={onClose}>
			<DialogContent className="bg-white dark:bg-neutral-800 dark:border-none">
				<DialogHeader>
					<DialogTitle className="text-center dark:text-white">
						Контактная информация
					</DialogTitle>
				</DialogHeader>
				<div className="flex flex-col gap-4">
					{supportLinks.map((item: HeaderSupportLink) => (
						<Link
							key={item.href}
							target="_blank"
							className="bg-sky-500 text-white text-base font-semibold gap-2 flex justify-center items-center rounded-lg p-3"
							href={item.href}
						>
							<item.icon className="h-5 w-5" />
							{item.label}
						</Link>
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
};
export default SupportModal;
