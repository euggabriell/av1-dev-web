const header = document.querySelector('header')

function responsiveHeader() {
    const baseUrl = `${window.location.origin}/${window.location.pathname.split("/")[1]}/`

    if(window.innerWidth < 835) {
        header.classList.add("responsive")

        header.innerHTML = `
            <div id="logo-title">
                <div class="logo">
                    <img src="${window.location.origin}/assets/svg/cart-icon.svg" alt="logo">
                </div>
                <h1>Mercado <br>Econômico</h1>
            </div>
            
            <button id="side-bar-button">
                <img src="${window.location.origin}/assets/svg/side-bar-icon.svg" alt="menu lateral">
            </button>
        `

        const headerButton = document.querySelector("header.responsive button")

        headerButton.addEventListener("click", () => {
            console.log("ola mundo")
        })
    } else {
        header.classList.remove("responsive")

        header.innerHTML = `
            <div id="logo-title">
                <div class="logo">
                    <img src="${window.location.origin}/assets/svg/cart-icon.svg" alt="logo">
                </div>
                <h1>Mercado <br>Econômico</h1>
            </div>
            <nav>
                <ul>
                    <li><a href=${baseUrl}index.html>Início</a></li>                        
                    <li><a href=${baseUrl}pages/produto.html>Produtos</a></li>
                    <li><a href=${baseUrl}pages/sobre.html>Sobre</a></li>
                    <li><a href=${baseUrl}pages/contato.html>Contato</a></li>
                </ul>
            </nav>
        
        <div class="search-container">
            <input class="search-input" type="text" id="search" placeholder="Pesquise aqui por produto e/ou marca..." autocomplete="off">
            <button class="search-button">
                <img src="./assets/svg/lupa.svg" alt="Lupa">
            </button>
        </div>
        `
    }
}

responsiveHeader()

console.log(window.location.pathname)

window.addEventListener("resize", responsiveHeader)