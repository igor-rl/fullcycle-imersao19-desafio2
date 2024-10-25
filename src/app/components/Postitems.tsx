"use client";
import { TypicodePosts } from "@/shared/types";
import Link from "next/link";

type PostListProps = {
	items: TypicodePosts[];
};

const PostList = ({ items }: PostListProps) => {
	const handleClick = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div>
			{items.map((item) => (
				<div
					key={item.id}
					className="p-4 border border-gray-200 my-2 hover:bg-slate-900 cursor-pointer"
					onClick={handleClick}
				>
					<Link href={`/${item.id}`} rel="icon">
						<h2 className="font-bold text-xl text-white">{item.title}</h2>
					</Link>
				</div>
			))}
		</div>
	);
};

export default PostList;
