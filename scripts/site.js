// Main JS should go here!
// Include scripts using Browserify by doing:
// var $ = require("jquery");

let header = document.querySelector(".willow-page-header");
let open = document.querySelector(".willow-page-header__content-open");
let close = document.querySelector(".willow-page-header__content-close");

if(open) {
    open.addEventListener("click", () => header.setAttribute("data-content-open", "true"));
    close.addEventListener("click", () => header.setAttribute("data-content-open", "false"));
}