describe('GET /enderecos', () => {
  it('deve retornar uma lista de endereços', async () => {
    const response = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });
    const posts = await response.json();
    expect(posts.length).toBeGreaterThan(0);
  });
});
