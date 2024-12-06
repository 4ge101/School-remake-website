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
trigger.forEach((menu) => menu.addEventListener('click', function () {
    trigger.forEach((item) => item != this ? item.classList.remove('active') : null);
    if (!this.classList.contains('active')) {
        this.classList.add('active');
    }
}));

// full screen nav
function toggleNav() {
    document.body.classList.toggle("activeNav");
}

// making slider which change background 
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function () {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function () {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')

    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function () {
        if (direction === 'next') {
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, { once: true })
}

// making goup after clicking icon

let pageUpButton = document.getElementById("goUp");
pageUpButton === null || pageUpButton === void 0 ? void 0 : pageUpButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});