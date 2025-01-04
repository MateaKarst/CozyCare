const burgerMenu = document.querySelector(".burgerMenu");
const loginPopUp = document.querySelector(".loginPopUp");
const profileBtn = document.querySelector("#profileBtn");
const closeLoginPopUp = document.querySelector(".loginCloseBtn");
const registerBtn = document.querySelector(".registerFormElement");
const registerPopUp = document.querySelector(".registerPopUp");
const closeRegisterPopUp = document.querySelector(".registerCloseBtn");
const signInBtn = document.querySelector(".signInFormElement");
const signingLock = document.querySelector(".dropDownContainer");
const bodyLoggingScroll = document.querySelector("body");

// login
profileBtn.addEventListener("click", () => {
    loginPopUp.classList.add("loginPopUpView");
    burgerMenu.classList.remove("burgerMenu");
    bodyLoggingScroll.classList.add("lockedLoggingScroll");
});

closeLoginPopUp.addEventListener("click", () => {
    loginPopUp.classList.remove("loginPopUpView");
    burgerMenu.classList.add("burgerMenu");
    bodyLoggingScroll.classList.remove("lockedLoggingScroll");
});

// login to register
registerBtn.addEventListener("click", () => {
    loginPopUp.classList.remove("loginPopUpView");
    registerPopUp.classList.add("registerPopUpView");
    bodyLoggingScroll.classList.add("lockedLoggingScroll");
})

// register
closeRegisterPopUp.addEventListener("click", () => {
    registerPopUp.classList.remove("registerPopUpView");
    burgerMenu.classList.add("burgerMenu");
    bodyLoggingScroll.classList.remove("lockedLoggingScroll");
})

// register to login
signInBtn.addEventListener("click", () => {
    registerPopUp.classList.remove("registerPopUpView");
    loginPopUp.classList.add("loginPopUpView");
    bodyLoggingScroll.classList.add("lockedLoggingScroll");
})