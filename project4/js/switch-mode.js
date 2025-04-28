const themeBtn = document.getElementById("toggleTheme");
const designSectionCardInfos = document.querySelectorAll(".designSectionCardInfo a");
const blogSection = document.querySelector(".blogSection");
const blogSectionCards = document.querySelectorAll(".blogSectionCard");
const blogSectionCardBtns = document.querySelectorAll(".blogCardBtn");
const authorName = document.querySelector(".authorName");
const authorProf = document.querySelector(".authorProf");
const authorCEO = document.querySelector(".authorProf a");
const reviewProfInfos = document.querySelectorAll(".reviewProfInfo");
const reviewImageTitle = document.querySelectorAll(".reviewImageTitle");
const reviewProf = document.querySelectorAll(".reviewProfInfo p");
const reviewProfCEO = document.querySelectorAll(".reviewProfInfo a");

let isToggleTurnOn = false;

themeBtn.addEventListener("change", () => {
    isToggleTurnOn = !isToggleTurnOn;
    document.body.classList.toggle("darkMode");

    if (isToggleTurnOn) {
        blogSection.style.background = "var(--dark)";
    } else {
        blogSection.style.background = "#f9f9f9";
    }

    designSectionCardInfos.forEach(designSectionCardInfo => {
        designSectionCardInfo.classList.toggle("darkMode");
    });

    const authorInfos = [authorName, authorProf, authorCEO];
    authorInfos.forEach(element => {
        element.style.color = "#fff";
    });
});

blogSectionCards.forEach(blogSectionCard => {
    blogSectionCard.addEventListener("mouseenter", () => {
        if (isToggleTurnOn) {
            blogSectionCard.style.boxShadow = "0px 0px 20px 5px #999999";
        }
    });

    blogSectionCard.addEventListener("mouseleave", () => {
        blogSectionCard.style.boxShadow = "none";
    });
});

blogSectionCardBtns.forEach(blogSectionCardBtn => {
    blogSectionCardBtn.style.background = "var(--extraDark)"
    blogSectionCardBtn.addEventListener("mouseenter", () => {
        if (isToggleTurnOn) {
            blogSectionCardBtn.style.boxShadow = "none";
        }
    });
});

