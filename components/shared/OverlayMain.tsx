"use client";

const OverlayMain = ({zIndex}: {zIndex: string}) => {
	// const {zIndex, isOpen, ref, onClose, onOpen, pathname, korzina} =
	// 	useOverlay();

	// useClickOutside({
	// 	ref,
	// 	setOpen: onClose,
	// 	pathname,
	// 	open: isOpen,
	// 	korzina,
	// });
	return (
		<div
			className={`min-h-screen bg-neutral-800/20 w-full fixed left-0 top-0 ${zIndex} transition`}
		/>
	);
};

export default OverlayMain;
