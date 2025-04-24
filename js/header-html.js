const baseUrl = `${window.location.origin}/${window.location.pathname.split("/")[1]}/`


const headerHTML = `
    <div id="logo-title">
        <div class="logo">
            <img src="${window.location.origin}/${window.location.pathname.split('/')[1]}/assets/svg/cart-icon.svg" alt="logo">
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
            <img src="${window.location.origin}/assets/svg/lupa.svg" alt="Lupa">
        </button>
    </div>
`

const headerResponsiveHTML =`
    <div id="logo-title">
        <div class="logo">
            <img src="${window.location.origin}/assets/svg/cart-icon.svg" alt="logo">
        </div>
        <h1>Mercado <br>Econômico</h1>
    </div>
    
    <button class="side-bar-button " id="open-side-bar">
        <img src="${window.location.origin}/assets/svg/side-bar-icon.svg" alt="menu lateral">
    </button>
`

const sideBarHTML = document.createElement("div")
sideBarHTML.id = "side-bar"
sideBarHTML.classList = ["close"]

sideBarHTML.innerHTML = `
    <button class="side-bar-button" id="close-side-bar">
        <img src="${window.location.origin}/assets/svg/close-icon.svg" alt="logo">
    </button>

    <nav>
        <ul>
            <li><a href=${baseUrl}index.html>Início</a></li>                        
            <li><a href=${baseUrl}pages/produto.html>Produtos</a></li>
            <li><a href=${baseUrl}pages/sobre.html>Sobre</a></li>
            <li><a href=${baseUrl}pages/contato.html>Contato</a></li>
        </ul>
    </nav>
`

export {headerResponsiveHTML, headerHTML, sideBarHTML}