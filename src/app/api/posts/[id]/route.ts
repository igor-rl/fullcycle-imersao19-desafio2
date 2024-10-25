import { TypicodePosts } from "@/shared/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (response.ok) {
      const post: TypicodePosts = await response.json();
      return NextResponse.json(post);
    }

    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
