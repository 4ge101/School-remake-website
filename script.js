// making nav active class
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

// making student and teacher counter
let valueDisplays = document.querySelectorAll(".counter-number");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});