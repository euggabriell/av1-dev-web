import { darkLightModeController } from "./dark-light-mode.js";

function insertFooter() {
    const footer = document.querySelector("footer")

    footer.innerHTML = `
        <div class="container">
            <p>&copy; 2025 Mercado Econômico - Todos os direitos reservados.</p>
        </div>

        <button id="dark-mode-button">
            <img src="${window.location.origin}/assets/svg/moon-dark.svg" alt="botão dark/light mode" />
        </button>
    `
    
    document.getElementById("dark-mode-button").addEventListener("click", darkLightModeController);
}

window.addEventListener('load', insertFooter);