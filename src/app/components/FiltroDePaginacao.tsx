import { getPostsFilter } from "@/shared/service/getPostsFilter";
import { cookies } from "next/headers";
import { Suspense } from "react";
import Pulsing from "./Pulsing";

export async function updatePerpage(formData: FormData) {
	"use server";
	const perPage = formData.get("per_page") ?? "10";
	const cookieStore = await cookies();
	cookieStore.set("select_page", "1");
	cookieStore.set("per_page", perPage.toString());
}

const FiltroDePaginacao = async () => {
	const { total_pages, atual_page, per_page } = await getPostsFilter();

	return (
		<form action={updatePerpage}>
			<div className="text-center mt-4 flex justify-between items-center border p-2 bg-slate-800">
				<Suspense fallback={<Pulsing h={5} w={8} />}>
					<div className="flex space-x-2">
						<span>{`Página: ${atual_page}`}</span>
						<span>/</span>
						<span>{total_pages}</span>
					</div>
				</Suspense>

				<div className="flex items-center space-x-2">
					<label
						htmlFor="per_page"
						className="mr-2"
					>{`Itens por página:`}</label>

					{/* Botões para selecionar o número de itens por página */}
					<button
						type="submit"
						name="per_page"
						value="5"
						className={`p-2 border rounded ${
							per_page === 5 ? "bg-slate-900 text-white" : "bg-gray-200"
						}`}
					>
						5
					</button>
					<button
						type="submit"
						name="per_page"
						value="10"
						className={`p-2 border rounded ${
							per_page === 10 ? "bg-slate-900 text-white" : "bg-gray-200"
						}`}
					>
						10
					</button>
					<button
						type="submit"
						name="per_page"
						value="15"
						className={`p-2 border rounded ${
							per_page === 15 ? "bg-slate-900 text-white" : "bg-gray-200"
						}`}
					>
						15
					</button>
					<button
						type="submit"
						name="per_page"
						value="20"
						className={`p-2 border rounded ${
							per_page === 20 ? "bg-slate-900 text-white" : "bg-gray-200"
						}`}
					>
						20
					</button>
				</div>
			</div>
		</form>
	);
};

export default FiltroDePaginacao;
