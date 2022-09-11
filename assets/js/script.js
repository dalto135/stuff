let parent = document.querySelector("html");

function setTheme() {
    let date = new Date();
    let time = date.getHours();

    if (time >= 8 && time < 21) {
        parent.setAttribute("id", "light");
    }
}

// setTheme();

function greyMode() {
    parent.setAttribute("id", "grey");
}

function lightMode() {
    parent.setAttribute("id", "light");
}

function darkMode() {
    parent.setAttribute("id", "dark");
}

let greyButton = document.querySelector("#greyButton");
let lightButton = document.querySelector("#lightButton");
let darkButton = document.querySelector("#darkButton");

greyButton.addEventListener("click", greyMode);
lightButton.addEventListener("click", lightMode);
darkButton.addEventListener("click", darkMode);
