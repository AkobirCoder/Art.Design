const toggleButton = document.getElementById("toggleSidebar");
const sidebarToggle = document.querySelectorAll(".sidebarNavbarItem");
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("backdrop");
const sidebarOpenBtn = document.getElementById("sidebarOpenBtn");
const sidebarCloseBtn = document.getElementById("sidebarCloseBtn");

let isSlidebarOpen = false;

function syncButtonPosition() {
    const sidebarRect = sidebar.getBoundingClientRect();
    toggleButton.style.left = `${sidebarRect.left + sidebarRect.width - 10}px`;
    requestAnimationFrame(syncButtonPosition);
}

toggleButton.addEventListener("click", () => {
    isSlidebarOpen = !isSlidebarOpen;
    sidebar.classList.toggle("active");

    if (isSlidebarOpen) {
        backdrop.classList.add("active");
    } else {
        backdrop.classList.remove("active");
    }

    updateButtonIcon();
});

sidebarToggle.forEach((item) => {
    item.addEventListener("click", () => {
        isSlidebarOpen = false;
        sidebar.classList.remove("active");
        backdrop.classList.remove("active");
        updateButtonIcon();
    });
});

backdrop.addEventListener("click", () => {
    isSlidebarOpen = false;
    sidebar.classList.remove("active");
    backdrop.classList.remove("active");
    updateButtonIcon();
});

function updateButtonIcon() {
    if (isSlidebarOpen) {
        toggleButton.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
    } else {
        toggleButton.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
    }
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 720) {
        toggleButton.classList.add("visible");
    } else {
        toggleButton.classList.remove("visible");
    }
});

if (sidebarOpenBtn) {
    sidebarOpenBtn.addEventListener("click", () => {
        backdrop.classList.add("active");
    });
}

if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener("click", () => {
        backdrop.classList.remove("active");
    });
}

syncButtonPosition();

