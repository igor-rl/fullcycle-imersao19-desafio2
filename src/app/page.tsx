import { getPostsFilter } from "@/shared/service/getPostsFilter";
import ControleDePaginacao from "./components/ControleDePaginação";
import FiltroDePaginacao from "./components/FiltroDePaginacao";
import PostList from "./components/Postitems";
import { Suspense } from "react";
import Pulsing from "./components/Pulsing";

export default async function Home() {
	const { data } = await getPostsFilter();

	return (
		<div className="max-w-full pb-4">
			<h1 className="font-bold text-3xl text-center my-6">
				Listagem de Posts de endereços
			</h1>
			<FiltroDePaginacao />
			<Suspense
				fallback={new Array(15).fill(null).map((_, index) => (
					<Pulsing h={20} w={"full"} key={index} />
				))}
			>
				<PostList items={data} />
			</Suspense>
			{/* Controles de paginação */}
			<ControleDePaginacao />
		</div>
	);
}
