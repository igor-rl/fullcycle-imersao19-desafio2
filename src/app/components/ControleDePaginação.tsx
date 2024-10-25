import { getPostsFilter } from "@/shared/service/getPostsFilter";
import SelectPageLink from "./SelectPageLink";
import NextPreviosBotton from "./NextPreviosButton";
import { cookies } from "next/headers";

const LINKS_AFTER_BEFORE = 1;

const range = (start: number, end: number): number[] =>
	[...Array(end - start + 1)].map((_, i) => start + i);

const sortedUniqueArray = (array: number[]) =>
	[...new Set(array)].sort((a, b) => a - b);

export async function updateSelectPage(formData: FormData) {
	"use server";
	const page = formData.get("select_page") ?? "1";
	const cookieStore = await cookies();
	cookieStore.set("select_page", page.toString());
}

const ControleDePaginacao = async () => {
	const { total_pages, atual_page } = await getPostsFilter();
	let pageNumbers: number[] = [];

	// Include first and last pages
	pageNumbers.push(1);
	pageNumbers.push(total_pages);

	// Calculate range around current page
	const rangePages = range(
		Math.max(atual_page - LINKS_AFTER_BEFORE, 2),
		Math.min(atual_page + LINKS_AFTER_BEFORE, total_pages - 1)
	);

	// Add pages in the range and sort/filter
	pageNumbers.push(...rangePages);
	pageNumbers = sortedUniqueArray(pageNumbers);

	// se os botões apresentados forem menores que 5 verfique se a página atual é maior que 3
	// se for adicione os numeros ausentes no final
	if (pageNumbers.length < 5) {
		if (atual_page < 1 + LINKS_AFTER_BEFORE) {
			for (let value = 2; pageNumbers.length < 5; value++) {
				if (!pageNumbers.includes(value)) {
					pageNumbers.push(value);
				}
			}
		} else {
			for (let value = total_pages; pageNumbers.length < 5; value--) {
				if (!pageNumbers.includes(value)) {
					pageNumbers.push(value);
				}
			}
		}
	}
	pageNumbers = sortedUniqueArray(pageNumbers);

	return (
		<form action={updateSelectPage}>
			<div className="text-center mt-4 flex justify-between items-center border">
				{/* Previous Button */}
				<NextPreviosBotton
					value={atual_page - 1}
					disabled={atual_page <= 1}
					key={"previos"}
				/>

				{/* Render page numbers */}
				<div className="flex space-x-2">
					{pageNumbers.map((page, index) => (
						<div key={index}>
							<SelectPageLink
								active={page === atual_page}
								value={page}
								key={page}
							/>

							{/* Check for a gap in the pagination (e.g. show "..." when skipping pages) */}
							{pageNumbers[index + 1] && pageNumbers[index + 1] > page + 1 && (
								<span key={`gap-${page}`} className="px-2">
									...
								</span>
							)}
						</div>
					))}
				</div>

				{/* Next Button */}
				<NextPreviosBotton
					value={atual_page + 1}
					next={true}
					disabled={atual_page >= total_pages}
					key={"next"}
				/>
			</div>
		</form>
	);
};

export default ControleDePaginacao;
