import { TypicodePosts } from "@/shared/types";

export async function GET(): Promise<Response> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response.ok) {
      const address: TypicodePosts[] = await response.json();
      return new Response(JSON.stringify(address), { status: 200 });
    }
    return new Response(JSON.stringify([]), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify([]), { status: 500 });
  }
}
