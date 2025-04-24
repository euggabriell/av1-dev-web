
export function darkLightModeController(isToogle = false) {

    let currentTheme = localStorage.getItem('currentTheme');

    if(!currentTheme) {
        localStorage.setItem("currentTheme", "light")

        currentTheme = localStorage.getItem('currentTheme') 
    }

    if(isToogle) {
        const newTheme = currentTheme === "dark" ? "light" : "dark"
    
        document.querySelector("body").setAttribute("data-theme", newTheme);
    
        localStorage.setItem('currentTheme', newTheme)
    } else {
        document.querySelector("body").setAttribute("data-theme", currentTheme);
    }

}