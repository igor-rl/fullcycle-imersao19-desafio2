import { TypicodePosts } from "../types";
import { cookies } from "next/headers";

export type GetPostsFilterParams = {
  per_page?: number;
  page?: number;
};

export type GetPostsFilterOutput = {
  data: TypicodePosts[];
  total: number;
  total_pages: number;
  atual_page: number;
  per_page: number;
};

async function getPosts(): Promise<TypicodePosts[]> {
  const response = await fetch("http://localhost:3000/api/posts", {
    next: {
      tags: ["address"],
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export async function getPostsFilter(): Promise<GetPostsFilterOutput> {
  const posts: TypicodePosts[] = await getPosts();
  const total = posts.length;

  const cookieStore = await cookies();
  const per_page = parseInt(cookieStore.get('per_page')?.value || '10', 10);
  const atual_page = parseInt(cookieStore.get('select_page')?.value || '1', 10);

  const total_pages = Math.ceil(total / per_page);
  const offset = (atual_page - 1) * per_page;
  const data = posts.slice(offset, offset + per_page);

  return {
    data,
    total,
    total_pages,
    atual_page,
    per_page,
  };
}

export async function getPostById(id: string): Promise<TypicodePosts> {
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
    next: {
      tags: [`address-${id}`],
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch post with id: ${id}`);
  }

  return response.json();
}
