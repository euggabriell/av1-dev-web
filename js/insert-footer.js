import { darkLightModeController } from "./dark-light-mode.js";

darkLightModeController()

function insertFooter() {
    const baseUrl = `${window.location.origin}/${window.location.pathname.split("/")[1]}/`

    const footer = document.querySelector("footer")
    const currentTheme = document.body.getAttribute("data-theme")

    footer.innerHTML = `
        <div class="container">
            <p>&copy; 2025 Mercado Econômico - Todos os direitos reservados.</p>
        </div>

        <button id="dark-button" class="theme-mode-button ${currentTheme === "dark" ? "invisible" : ""}">
            <img src="${baseUrl}assets/svg/moon-dark.svg" alt="botão dark/light mode" />
        </button> 

         <button id="light-button" class="theme-mode-button ${currentTheme === "light" ? "invisible" : ""}">
            <img src="${baseUrl}assets/svg/sun-light.svg" alt="botão dark/light mode" />
        </button> 
    `
    
    document.querySelectorAll(".theme-mode-button")
    .forEach((element) => element.addEventListener("click", () => {
        darkLightModeController(true)
        insertFooter()
    }));
}

window.addEventListener('load', insertFooter);