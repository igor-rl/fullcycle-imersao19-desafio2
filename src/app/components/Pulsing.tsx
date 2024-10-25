type PulsingParams = {
	w: number | string;
	h: number | string;
};

const Pulsing = ({ w, h }: PulsingParams) => {
	return (
		<div
			className={`w-[${w}px] h-[${h}px] rounded bg-slate-500 animate-pulse`}
		/>
	);
};

export default Pulsing;
