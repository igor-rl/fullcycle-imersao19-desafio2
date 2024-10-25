"use client";

import { useState } from "react";

type ItemsPerPageSelectProps = {
	per_page: number;
};

const ItemsPerPageSelect = ({ per_page }: ItemsPerPageSelectProps) => {
	const [selectedValue, setSelectedValue] = useState(per_page);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(Number(event.target.value));
		event.target.form?.submit();
	};

	return (
		<div className="flex items-center">
			<label htmlFor="per_page" className="mr-2">
				{`Itens por página:`}
			</label>

			{/* Select para escolher o número de itens por página */}
			<select
				name="per_page"
				value={selectedValue}
				onChange={handleChange}
				className="border px-2 py-1 rounded"
			>
				<option value="5">5</option>
				<option value="10">10</option>
				<option value="15">15</option>
				<option value="20">20</option>
			</select>
		</div>
	);
};

export default ItemsPerPageSelect;
