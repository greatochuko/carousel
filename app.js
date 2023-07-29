let leftButton = document.querySelector(".left");
let rightButton = document.querySelector(".right");
let activeCarousel = document.querySelector(".active");
let carousel = document.querySelectorAll(".carousel");
let currentIndex = 0;
let hasReversed = false;
let hasReversedRight = false;


/* rightButton.addEventListener("click", () => {
    activeCarousel = document.querySelector(".active");
    activeCarousel.classList.remove("active");
    carousel[currentIndex + 1].classList.add("active");
    if (currentIndex < carousel.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0
    }
}); */

rightButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= carousel.length) {
        currentIndex = 0
        activeCarousel = document.querySelector(".active");
        activeCarousel.classList.remove("active");
        carousel[currentIndex].classList.add("active");
    } else {
        activeCarousel = document.querySelector(".active");
        activeCarousel.classList.remove("active");
        activeCarousel.nextElementSibling.classList.add("active");
    }

});

leftButton.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carousel.length - 1;
        activeCarousel = document.querySelector(".active");
        activeCarousel.classList.remove("active");
        carousel[currentIndex].classList.add("active");

    } else {
        activeCarousel = document.querySelector(".active");
        activeCarousel.classList.remove("active");
        activeCarousel.previousElementSibling.classList.add("active");
    }
});
/* 
rightButton.addEventListener("click", () => {
    console.log("Has Reversed right: ", hasReversedRight);
    console.log("Current index: ", currentIndex);

    if (currentIndex < carousel.length - 1) {
        activeCarousel = document.querySelector(".active");
        activeCarousel.classList.remove("active");
        if (hasReversedRight) {
            carousel[currentIndex].classList.add("active");
            hasReversedRight = false;
            return
        } else {
            carousel[currentIndex + 1].classList.add("active");
            currentIndex++;
        }

    } else {
        currentIndex = 0;
        activeCarousel = document.querySelector(".active");
        activeCarousel.classList.remove("active");
        carousel[currentIndex].classList.add("active");
        currentIndex++;
        hasReversedRight = true;
    }
});

leftButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        activeCarousel = document.querySelector(".active");
        activeCarousel.classList.remove("active");
        console.log(hasReversed);
        if (hasReversed) {
            carousel[currentIndex].classList.add("active");
            hasReversed = false;
            return
        } else {
            carousel[currentIndex - 1].classList.add("active");
            currentIndex--;
            console.log(currentIndex);
        }
    } else {
        currentIndex = carousel.length - 1;
        activeCarousel = document.querySelector(".active");
        activeCarousel.classList.remove("active");
        carousel[currentIndex].classList.add("active");
        console.log(currentIndex);
        currentIndex--;
        hasReversed = true;
    }
});

console.log(activeCarousel.previousElementSibling);
*/