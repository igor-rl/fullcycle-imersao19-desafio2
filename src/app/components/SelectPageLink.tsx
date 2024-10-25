"use client";

type SelectPageLinkParams = {
	value: number | string;
	active: boolean;
};
const SelectPageLink = ({ value, active }: SelectPageLinkParams) => {
	const handleClick = () => {
		window.scrollTo(0, 0); // Volta para o topo
	};
	return (
		<button
			className={`bg-slate-900 hover:bg-slate-800 cursor-pointer px-2 py-1 rounded ${
				active ? "font-bold bg-yellow-400 hover:bg-yellow-400" : "text-black"
			}`}
			key={value}
			name="select_page"
			value={value}
			type="submit"
			onClick={handleClick}
		>
			{value}
		</button>
	);
};

export default SelectPageLink;
