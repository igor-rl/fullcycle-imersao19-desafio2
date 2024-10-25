import { NextRequest } from "next/server";
import { GET } from "./route";

describe('GET /posts', () => {
  it('deve retornar uma lista de endereços', async () => {
    const request = {
      url: 'http://localhost:3000/posts?id=1'
    } as NextRequest;
    const response = await GET(request);
    expect(response).toEqual(
      expect.objectContaining({
        id: 1,
        userId: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      })
    );
  });
});
