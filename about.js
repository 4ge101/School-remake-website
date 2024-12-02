// full screen nav
function toggleNav(){
    document.body.classList.toggle("activeNav");
}

// making nav active class
const trigger = document.querySelectorAll('nav li');

// Add active class based on the current page URL
function setActiveClass() {
    const currentPage = window.location.pathname.split("/").pop(); // Get the current page name
    trigger.forEach((item) => {
        const link = item.querySelector('a');
        const href = link.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Set the active class when the page loads
document.addEventListener('DOMContentLoaded', setActiveClass);

// Add click event listener to toggle active class dynamically
trigger.forEach((menu) => menu.addEventListener('click', function() {
    trigger.forEach((item) => item != this ? item.classList.remove('active') : null);
    if (!this.classList.contains('active')) {
        this.classList.add('active');
    }
}));


// making goup after clicking icon

let pageUpButton = document.getElementById("goUp");
pageUpButton === null || pageUpButton === void 0 ? void 0 : pageUpButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});