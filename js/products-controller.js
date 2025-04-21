import { produtos } from "./data/products-data.js";

const lista = document.getElementById("lista-produtos");
const filtroCategoria = document.getElementById("filtro-categoria");
const filtroPreco = document.getElementById("filtro-preco");

function filtrarProdutos() {
    const categoria = filtroCategoria.value;
    const preco = filtroPreco.value;
    lista.innerHTML = "";
    produtos.forEach(produto => {
        const dentroCategoria = categoria === "todos" || produto.categoria === categoria;
        let dentroPreco = true;
        if (preco === "0-2") dentroPreco = produto.preco <= 2;
        else if (preco === "2-5") dentroPreco = produto.preco > 2 && produto.preco <= 5;
        else if (preco === "5+") dentroPreco = produto.preco > 5;
        if (dentroCategoria && dentroPreco) {
            const div = document.createElement("div");
            div.className = "produto";
            div.innerHTML = `
                <div>
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </div>
                <h3>${produto.nome}</h3>
                <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                <button onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco}, '${produto.imagem}')">Adicionar ao Carrinho</button>
            `;
            lista.appendChild(div);
        }
    });
}

filtroCategoria.addEventListener("change", filtrarProdutos);
filtroPreco.addEventListener("change", filtrarProdutos);
window.onload = filtrarProdutos;

// Função para adicionar produto ao carrinho
const carrinho = [];

function adicionarAoCarrinho(nome, preco, imagem) {
    carrinho.push({ nome, preco, imagem });
    alert(`${nome} foi adicionado ao carrinho!`);
    console.log(carrinho); // Aqui podemos verificar o conteúdo do carrinho no console
}