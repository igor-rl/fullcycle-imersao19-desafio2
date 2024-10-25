"use client";

type NextPreviosBottonParams = {
	next?: boolean;
	disabled?: boolean;
	value: number;
};

const NextPreviosBotton = ({
	next,
	disabled,
	value,
}: NextPreviosBottonParams) => {
	const handleClick = () => {
		window.scrollTo(0, 0);
	};

	return (
		<button
			type="submit"
			name={`select_page`}
			value={value}
			className={`p-3 ${!disabled && "bg-slate-900 hover:bg-slate-800"}`}
			disabled={disabled}
			onClick={handleClick}
		>
			{next ? "Próximo" : "Anterior"}
		</button>
	);
};

export default NextPreviosBotton;
