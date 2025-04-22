function insertFooter() {
    const footer = document.querySelector("footer")

    footer.innerHTML = `
        <div class="container">
            <p>&copy; 2025 Mercado Econômico - Todos os direitos reservados.</p>
        </div>
    `
}

window.addEventListener('load', insertFooter);