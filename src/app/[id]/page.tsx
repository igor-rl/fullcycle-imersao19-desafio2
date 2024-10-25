import { getPostById } from "@/shared/service/getPostsFilter";
import { TypicodePosts } from "@/shared/types";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { Suspense } from "react";

const DetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const post: TypicodePosts = await getPostById(id);
	return (
		<div className="">
			<h1 className="flex max-w-3xl py-2 text-3xl font-bold">
				<Link href="/">
					<ChevronLeftIcon className="w-8 h-8 mr-2" />
				</Link>
				Detalhes do post
			</h1>
			<Suspense fallback={<div>loading...</div>}>
				<div className="p-4 mt-6 bg-slate-700">
					<h1 className="text-2xl font-bold">{post.title}</h1>
					<div className="mt-4">{post.body}</div>
				</div>
			</Suspense>
		</div>
	);
};

export default DetailPage;
