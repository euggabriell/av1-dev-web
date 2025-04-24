import { darkLightModeController } from "./dark-light-mode.js";

const baseUrl = `${window.location.origin}/${window.location.pathname.split("/")[1]}/`

function insertFooter() {
    const footer = document.querySelector("footer")

    footer.innerHTML = `
        <div class="container">
            <p>&copy; 2025 Mercado Econômico - Todos os direitos reservados.</p>
        </div>

        <button id="dark-mode-button">
            <img src="${baseUrl}assets/svg/moon-dark.svg" alt="botão dark/light mode" />
        </button>
    `
    
    document.getElementById("dark-mode-button").addEventListener("click", () => darkLightModeController(true));
}

darkLightModeController()

window.addEventListener('load', insertFooter);