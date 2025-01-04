const body = document.querySelector("body");
const burger = document.querySelector("#burgerMenu");
const menu = document.querySelector("#navListWrapper");
const burgerLines = burger.childNodes;

burger.addEventListener("click", () => {
    body.classList.toggle("lockedScroll");
    menu.classList.toggle("navEffect");
    burgerLines.forEach((span) => {
        if (span.tagName === "SPAN") {
            span.classList.toggle("burgerClickEffect")
        }
    })
})