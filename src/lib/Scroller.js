document.addEventListener("DOMContentLoaded", () => {
    const scrollerElements = document.querySelectorAll(".scroller");

    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollerElements.forEach(/* @type {Element} */elem => {
        elem.dataset.animated = true;
        })
    }
});