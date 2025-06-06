const baseUrl = `${window.location.origin}/${window.location.pathname.split("/")[1]}/`

export const produtos = [
    // Hortifruti 
{ nome: "Cebola", categoria: "hortifruti", preco: 3.50, imagem: `${baseUrl}assets/fotos/produtos/cebola.png`}, 
{ nome: "Tomate", categoria: "hortifruti", preco: 4.20, imagem: `${baseUrl}assets/fotos/produtos/tomate.png`}, 
{ nome: "Limão", categoria: "hortifruti", preco: 2.00, imagem: `${baseUrl}assets/fotos/produtos/limao.png`}, 
{ nome: "Batata", categoria: "hortifruti", preco: 3.00, imagem: `${baseUrl}assets/fotos/produtos/Batata.png`}, 
{ nome: "Cenoura", categoria: "hortifruti", preco: 2.50, imagem: `${baseUrl}assets/fotos/produtos/Cenoura.png` }, 
{ nome: "Banana", categoria: "hortifruti", preco: 3.80, imagem: `${baseUrl}assets/fotos/produtos/Banana.png` }, 
{ nome: "Repolho", categoria: "hortifruti", preco: 2.70, imagem: `${baseUrl}assets/fotos/produtos/Repolho.png` }, 
// Temperos 
{ nome: "Alho", categoria: "temperos", preco: 6.50, imagem: `${baseUrl}assets/fotos/produtos/alho.png` }, 
{ nome: "Hortelã", categoria: "temperos", preco: 1.50, imagem: `${baseUrl}assets/fotos/produtos/hortela.png` }, 
{ nome: "Pimenta", categoria: "temperos", preco: 2.30, imagem: `${baseUrl}assets/fotos/produtos/Pimenta.png` }, 
{ nome: "Orégano", categoria: "temperos", preco: 2.00, imagem: `${baseUrl}assets/fotos/produtos/Orégano.png` }, 
{ nome: "Manjericão", categoria: "temperos", preco: 2.50, imagem: `${baseUrl}assets/fotos/produtos/Manjericão.png` }, 
{ nome: "Alecrim", categoria: "temperos", preco: 1.80, imagem: `${baseUrl}assets/fotos/produtos/Alecrim.png` }, 
{ nome: "Curry", categoria: "temperos", preco: 2.90, imagem: `${baseUrl}assets/fotos/produtos/Curry.png` }, 
// Bebidas 
{ nome: "Refrigerante", categoria: "bebidas", preco: 5.99, imagem: `${baseUrl}assets/fotos/produtos/Refri.png` }, 
{ nome: "Suco", categoria: "bebidas", preco: 4.99, imagem: `${baseUrl}assets/fotos/produtos/suco.png` }, 
{ nome: "Água Mineral", categoria: "bebidas", preco: 2.50, imagem: `${baseUrl}assets/fotos/produtos/água.png` }, 
{ nome: "Cerveja", categoria: "bebidas", preco: 3.90, imagem: `${baseUrl}assets/fotos/produtos/Cerveja.png` }, 
{ nome: "Energético", categoria: "bebidas", preco: 6.50, imagem: `${baseUrl}assets/fotos/produtos/Energetico.png` }, 
{ nome: "Chá Gelado", categoria: "bebidas", preco: 3.50, imagem: `${baseUrl}assets/fotos/produtos/chá.png` }, 
{ nome: "Leite Integral", categoria: "bebidas", preco: 4.20, imagem: `${baseUrl}assets/fotos/produtos/leite.png` }, 
{ nome: "Iogurte", categoria: "bebidas", preco: 3.60, imagem: `${baseUrl}assets/fotos/produtos/iogurte.png` }, 
// Limpeza 
{ nome: "Detergente", categoria: "limpeza", preco: 1.99, imagem: `${baseUrl}assets/fotos/produtos/detergente.png` }, 
{ nome: "Desinfetante", categoria: "limpeza", preco: 3.75, imagem: `${baseUrl}assets/fotos/produtos/desinfetante.png` }, 
{ nome: "Sabão em pó", categoria: "limpeza", preco: 7.50, imagem: `${baseUrl}assets/fotos/produtos/sabão.png` }, 
{ nome: "Água sanitária", categoria: "limpeza", preco: 2.90, imagem: `${baseUrl}assets/fotos/produtos/aguasanitaria.png` },  
// Padaria 
{ nome: "Pão Francês", categoria: "padaria", preco: 0.50, imagem: `${baseUrl}assets/fotos/produtos/pao.png` }, 
{ nome: "Bolo", categoria: "padaria", preco: 9.90, imagem: `${baseUrl}assets/fotos/produtos/bolo.png` }, 
{ nome: "Croissant", categoria: "padaria", preco: 3.00, imagem: `${baseUrl}assets/fotos/produtos/croissant.png` }, 
{ nome: "Pão Integral", categoria: "padaria", preco: 6.20, imagem: `${baseUrl}assets/fotos/produtos/paointegral.png` }, 
{ nome: "Rosquinha", categoria: "padaria", preco: 3.50, imagem: `${baseUrl}assets/fotos/produtos/rosquinha.png` }, 
// Congelados 
{ nome: "Pizza Congelada", categoria: "congelados", preco: 12.90, imagem: `${baseUrl}assets/fotos/produtos/pizza.png` }, 
{ nome: "Lasanha Congelada", categoria: "congelados", preco: 10.50, imagem: `${baseUrl}assets/fotos/produtos/lasanha.png` }, 
{ nome: "Hambúrguer", categoria: "congelados", preco: 11.00, imagem: `${baseUrl}assets/fotos/produtos/hamburguer.png` }, 
{ nome: "Frango", categoria: "congelados", preco: 15.00, imagem: `${baseUrl}assets/fotos/produtos/frango.png` }, 
{ nome: "Sorvete", categoria: "congelados", preco: 18.50, imagem: `${baseUrl}assets/fotos/produtos/sorvete.png` }, 
{ nome: "Polpa de Fruta", categoria: "congelados", preco: 5.00, imagem: `${baseUrl}assets/fotos/produtos/polpa.png` } 
];