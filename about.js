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


// Set the active class when the page loads
document.addEventListener('DOMContentLoaded', setActiveClass);

// Add click event listener to toggle active class dynamically
trigger.forEach((menu) => menu.addEventListener('click', function() {
    trigger.forEach((item) => item != this ? item.classList.remove('active') : null);
    if (!this.classList.contains('active')) {
        this.classList.add('active');
    }
}));

// making student and teacher counter
let valueDisplays = document.querySelectorAll(".counter-number");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

// making 3d slider img
const d3_slider = document.querySelector('.d3-slider');
let rotation = 0;
document.getElementById('d3-next').addEventListener('click', () => {
    const quantity = getComputedStyle(d3_slider).getPropertyValue('--quantity');
    rotation -= 360 / quantity;
    d3_slider.style.setProperty('--rotation', `${rotation}deg`);
});

document.getElementById('d3-prev').addEventListener('click', () => {
    const quantity = getComputedStyle(d3_slider).getPropertyValue('--quantity');
    rotation += 360 / quantity;
    d3_slider.style.setProperty('--rotation', `${rotation}deg`);
});

let isDragging = false;
let startX;
const sensitivity = 0.2;

const handleMove = (dx) => {
    const quantity = getComputedStyle(d3_slider).getPropertyValue('--quantity');
    rotation += dx * sensitivity;
    d3_slider.style.setProperty('--rotation', `${rotation}deg`);
};

const snapToClosest = () => {
    const quantity = getComputedStyle(d3_slider).getPropertyValue('--quantity');
    rotation = Math.round(rotation / (360 / quantity)) * (360 / quantity);
    d3_slider.style.setProperty('--rotation', `${rotation}deg`);
    d3_slider.style.transition = 'transform 0.5s ease';
};

// Mouse and touch event listeners
['mousedown', 'touchstart'].forEach(evt => {
    d3_slider.addEventListener(evt, (e) => {
        isDragging = true;
        startX = e.pageX || e.touches[0].pageX;
        d3_slider.style.transition = 'none';
    });
});

['mousemove', 'touchmove'].forEach(evt => {
    d3_slider.addEventListener(evt, (e) => {
        if (!isDragging) return;
        const currentX = e.pageX || e.touches[0].pageX;
        handleMove(currentX - startX);
    });
});

['mouseup', 'mouseleave', 'touchend'].forEach(evt => {
    d3_slider.addEventListener(evt, () => {
        if (!isDragging) return;
        isDragging = false;
        snapToClosest(); // Snap to the nearest card after the drag ends
    });
});