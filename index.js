document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".cookie-consent").classList.add("hidden");
})

document.getElementById("cookie-button").addEventListener("click", (e) => {
    document.querySelector(".cookie-consent").classList.add("hidden");
})