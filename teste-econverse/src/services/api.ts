export async function getProducts() {
    const response = await fetch("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json");
    return response.json();
}