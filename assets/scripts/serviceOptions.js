const moreInfos = document.querySelector(".serviceInfoWindow");
const readMore = document.querySelector(".blogButton");

readMore.addEventListener("click", () => {
    moreInfos.classList.add(".optionShow");
});

