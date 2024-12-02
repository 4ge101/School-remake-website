// making goup after clicking icon

let pageUpButton = document.getElementById("goUp");
pageUpButton === null || pageUpButton === void 0 ? void 0 : pageUpButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});