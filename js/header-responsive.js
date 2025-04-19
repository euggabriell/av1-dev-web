import {headerHTML, headerResponsiveHTML, sideBarHTML} from './header-html.js'

const header = document.querySelector('header')

function responsiveHeader() {
    if(window.innerWidth < 877) {

        document.querySelector("body").appendChild(sideBarHTML)

        header.classList.add("responsive")

        header.innerHTML = headerResponsiveHTML
        
        const openSideBarButton = document.querySelector("header.responsive button#open-side-bar")

        openSideBarButton.addEventListener("click", () => {
            sideBarHTML.style.animation = "";
            sideBarHTML.offsetHeight; // força reflow, obriga o navegador a acessar a propriedade do elemento forçando-o a recalcular o layout de estilização

            sideBarHTML.classList.remove("close")

            document.querySelector("button#close-side-bar").addEventListener("click", () => {

                sideBarHTML.style.animation = "sideBarAnimation 1s ease-in-out forwards reverse"

                sideBarHTML.addEventListener("animationend", () => {
                    sideBarHTML.classList.add("close");
                }, { once: true }); 
            })
        })

    } else {
        header.classList.remove("responsive")

        header.innerHTML = headerHTML
    }
}

responsiveHeader()

window.addEventListener("resize", responsiveHeader)