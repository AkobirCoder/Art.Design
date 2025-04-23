const designCarousel = document.getElementById("designPageSectionCarousel");
const designContent = 1400;

let isTransitioning = false;

function moveNext() {
    if (isTransitioning) return;
    isTransitioning = true;

    designCarousel.style.transition = 'transform 0.5s ease';
    designCarousel.style.transform = `translate(-${designContent}px)`;

    designCarousel.addEventListener("transitionend", function nextHandler() {
        const first = designCarousel.firstElementChild;
        designCarousel.appendChild(first);
        designCarousel.style.transition = "none";
        designCarousel.style.transform = "translateX(0)";
        designCarousel.removeEventListener("transitionend", nextHandler);
        isTransitioning = false;
    });
}

function movePrev() {
    if (isTransitioning) return;
    isTransitioning = true;

    const last = designCarousel.lastElementChild;
    designCarousel.insertBefore(last, designCarousel.firstElementChild);
    designCarousel.style.transition = "none";
    designCarousel.style.transform = `translateX(-${designContent}px)`;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            designCarousel.style.transition = "transform 0.5s ease";
            designCarousel.style.transform = "translateX(0)";
        });
    });

    designCarousel.addEventListener("transitionend", function prevHandler() {
        designCarousel.removeEventListener("transitionend", prevHandler);
        isTransitioning = false;
    });
}

document.getElementById("nextBtn").addEventListener("click", moveNext);
document.getElementById("prevBtn").addEventListener("click", movePrev);


