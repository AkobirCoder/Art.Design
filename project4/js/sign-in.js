const modal = document.getElementById("signInModal");
const openBtn = document.getElementById("openSignInModal");
const closeBtn = document.querySelector(".closeSignInModal");

function fadeInModal() {
    modal.style.display = "flex";
    modal.style.opacity = 0;
    modal.style.transform = "scale(1.1)";

    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        } else {
            opacity += 0.05;
            modal.style.opacity = opacity;
            modal.style.transform = `scale(${1.1 - opacity * 0.1})`;
        }
    }, 6);
}

function fadeOutModal() {
    let opacity = 1;
    const fadeOut = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(fadeOut);
            modal.style.display = "none";
        } else {
            opacity -= 0.05;
            modal.style.opacity = opacity;
            modal.style.transform = `scale(${1 + (1 - opacity) * 0.1})`;
        }
    }, 6);
}

openBtn.addEventListener("click", fadeInModal);
closeBtn.addEventListener("click", fadeOutModal);
window.addEventListener("click", (e) => {
    if (e.target === modal) fadeOutModal();
});
