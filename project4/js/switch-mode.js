const switchMode = document.querySelector(".switchMode span");
const sunIcon = document.querySelector(".sunIcon");
const moonIcon = document.querySelector(".moonIcon");
const themeBtn = document.getElementById("toggleTheme");
const toggleSidebar = document.getElementById("toggleSidebar");
const sideBar = document.querySelector(".sidebar");
const designSectionCardInfos = document.querySelectorAll(".designSectionCardInfo a");
const blogSection = document.querySelector(".blogSection");
const authorName = document.querySelector(".authorName");
const authorProf = document.querySelector(".authorProf");
const authorCEO = document.querySelector(".authorProf a");
const reviewImageTitles = document.querySelectorAll(".reviewImageTitle");
const reviewProfInfos = document.querySelectorAll(".reviewProfInfo p");
const reviewProfCEOs = document.querySelectorAll(".reviewProfInfo a");
const reviewProfLogos = document.querySelectorAll(".reviewProfLogo");

let isToggleTurnOn = false;

themeBtn.addEventListener("change", () => {
    isToggleTurnOn = !isToggleTurnOn;
    document.body.classList.toggle("darkMode");

    if (isToggleTurnOn) {
        switchMode.innerHTML = "dark mode";
        sunIcon.classList.remove("active");
        moonIcon.classList.add("active");
        toggleSidebar.style.background = "var(--dark)";
        sideBar.style.boxShadow = "2px 0px 5px rgba(130, 130, 130, 0.5)";
        blogSection.style.background = "var(--dark)";
    } else {
        switchMode.innerHTML = "light mode";
        sunIcon.classList.add("active");
        moonIcon.classList.remove("active");
        toggleSidebar.style.background = "var(--extraDark)";
        sideBar.style.boxShadow = "2px 0px 5px rgba(0, 0, 0, 0.5)";
        blogSection.style.background = "#f9f9f9";
    }

    designSectionCardInfos.forEach(designSectionCardInfo => {
        designSectionCardInfo.classList.toggle("darkMode");
    });

    const authorInfos = [authorName, authorProf, authorCEO];
    authorInfos.forEach(element => {
        element.style.color = "#fff";
    });

    reviewImageTitles.forEach(reviewImageTitle => {
        if (isToggleTurnOn) {
            reviewImageTitle.style.color = "#fff";
        }
    });

    reviewProfInfos.forEach(reviewProfInfo => {
        if (isToggleTurnOn) {
            reviewProfInfo.style.color = "#fff";
        }
    });

    reviewProfCEOs.forEach(reviewProfCEO => {
        if (isToggleTurnOn) {
            reviewProfCEO.style.color = "#fff";
        }
    });

    reviewProfLogos.forEach(reviewProfLogo => {
        if (isToggleTurnOn) {
            reviewProfLogo.style.background = "#767676";
            reviewProfLogo.style.borderRadius = "1rem";
        }
    });
});


const blogSectionCards = document.querySelectorAll(".blogSectionCard");

blogSectionCards.forEach(blogSectionCard => {
    blogSectionCard.addEventListener("mouseenter", () => {
        if (isToggleTurnOn) {
            blogSectionCard.style.boxShadow = "0px 0px 20px 5px var(--extraDark)";
        }
    });

    blogSectionCard.addEventListener("mouseleave", () => {
        blogSectionCard.style.boxShadow = "none";
    });
});


const blogSectionCardBtns = document.querySelectorAll(".blogCardBtn");

blogSectionCardBtns.forEach(blogSectionCardBtn => {
    blogSectionCardBtn.style.background = "var(--extraDark)"
    blogSectionCardBtn.addEventListener("mouseenter", () => {
        if (isToggleTurnOn) {
            blogSectionCardBtn.style.boxShadow = "none";
            blogSectionCardBtn.style.transform = "scale(1.1)";
        }
    });

    blogSectionCardBtn.addEventListener("mouseleave", () => {
        blogSectionCardBtn.style.transform = "scale(1)";
    });
});


const designPageSectionContentControls = document.querySelectorAll(".designPageSectionContentControls button");

designPageSectionContentControls.forEach(designPageSectionContentControl => {
    designPageSectionContentControl.style.background = "var(--dark)";
    designPageSectionContentControl.addEventListener("mouseenter", () => {
        if (isToggleTurnOn) {
            designPageSectionContentControl.style.boxShadow = "0px 0px 10px 5px #202020";
        }
    });

    designPageSectionContentControl.addEventListener("mouseleave", () => {
        designPageSectionContentControl.style.boxShadow = "none";
    });
});