
export function darkLightModeController() {
    const currentTheme = document.querySelector("body").getAttribute("data-theme");

    console.log(currentTheme)

    if (currentTheme === "dark") {
        document.querySelector("body").setAttribute("data-theme", "light");
    } else {
        document.querySelector("body").setAttribute("data-theme", "dark");
    }
}