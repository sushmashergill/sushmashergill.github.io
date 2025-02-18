document.addEventListener("DOMContentLoaded", function () {
    const slideshowWrapper = document.querySelector(".slideshow-wrapper");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    let isPaused = false;
    let slideInterval;

    function startSlideshow() {
        slideInterval = setInterval(() => {
            if (!isPaused) {
                currentIndex = (currentIndex + 1) % slides.length;
                slideshowWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
        }, 3000); // Stay on each slide for 3 seconds
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    slideshowWrapper.addEventListener("mouseenter", () => {
        isPaused = true;
        stopSlideshow();
    });

    slideshowWrapper.addEventListener("mouseleave", () => {
        isPaused = false;
        startSlideshow();
    });

    // Initialize slideshow
    startSlideshow();
});
