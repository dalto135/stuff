let parent = document.querySelector("html");

function setTheme() {
    let date = new Date();
    let time = date.getHours();

    if (time >= 8 && time < 21) {
        lightMode();
    }
    else {
        darkMode();
    }
}

// setTheme();

function grayMode() {
    parent.setAttribute("id", "gray");
}

function lightMode() {
    parent.setAttribute("id", "light");
}

function darkMode() {
    parent.setAttribute("id", "dark");
}

let grayButton = document.querySelector("#grayButton");
let lightButton = document.querySelector("#lightButton");
let darkButton = document.querySelector("#darkButton");

grayButton.addEventListener("click", grayMode);
lightButton.addEventListener("click", lightMode);
darkButton.addEventListener("click", darkMode);