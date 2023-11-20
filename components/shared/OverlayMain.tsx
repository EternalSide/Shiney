const OverlayMain = ({zIndex}: {zIndex: string}) => {
	return (
		<div
			className={`min-h-screen bg-neutral-800/20 w-full fixed left-0 top-0 ${zIndex}`}
		/>
	);
};
export default OverlayMain;
