const switchMode = document.querySelector(".switchMode span");
const sunIcon = document.querySelector(".sunIcon");
const moonIcon = document.querySelector(".moonIcon");
const themeBtn = document.getElementById("toggleTheme");
const toggleSidebar = document.getElementById("toggleSidebar");
const sideBar = document.querySelector(".sidebar");
const blogSection = document.querySelector(".blogSection");

const designSectionCardInfos = document.querySelectorAll(".designSectionCardInfo a");
const blogSectionCards = document.querySelectorAll(".blogSectionCard");
const blogSectionCardBtns = document.querySelectorAll(".blogCardBtn");
const designPageSectionContentControls = document.querySelectorAll(".designPageSectionContentControls button");

const authorElements = [
  document.querySelector(".authorName"),
  document.querySelector(".authorProf"),
  document.querySelector(".authorProf a")
];

const reviewImageTitles = document.querySelectorAll(".reviewImageTitle");
const reviewProfInfos = document.querySelectorAll(".reviewProfInfo p");
const reviewProfCEOs = document.querySelectorAll(".reviewProfInfo a");
const reviewProfLogos = document.querySelectorAll(".reviewProfLogo");

let isDarkMode = false;

// Helper function to apply color
function applyTextColor(elements, color) {
  elements.forEach(el => {
    if (el) el.style.color = color;
  });
}

// Theme toggle logic
themeBtn?.addEventListener("change", () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("darkMode", isDarkMode);

  switchMode.textContent = isDarkMode ? "dark mode" : "light mode";
  sunIcon?.classList.toggle("active", !isDarkMode);
  moonIcon?.classList.toggle("active", isDarkMode);

  // Sidebar and Blog Section styles
  toggleSidebar.style.background = isDarkMode ? "var(--dark)" : "var(--extraDark)";
  sideBar.style.boxShadow = isDarkMode
    ? "2px 0px 5px rgba(130, 130, 130, 0.5)"
    : "2px 0px 5px rgba(0, 0, 0, 0.5)";
  blogSection.style.background = isDarkMode ? "var(--dark)" : "#f9f9f9";

  // Card link color mode
  designSectionCardInfos.forEach(el => el.classList.toggle("darkMode", isDarkMode));

  // Text color updates
  applyTextColor(authorElements, isDarkMode ? "#fff" : "");
  applyTextColor(reviewImageTitles, isDarkMode ? "#fff" : "");
  applyTextColor(reviewProfInfos, isDarkMode ? "#fff" : "");
  applyTextColor(reviewProfCEOs, isDarkMode ? "#fff" : "");

  // Logo styling
  reviewProfLogos.forEach(el => {
    if (!el) return;
    el.style.background = isDarkMode ? "#767676" : "";
    el.style.borderRadius = isDarkMode ? "1rem" : "";
  });
});

// Blog Card hover effects
blogSectionCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    if (isDarkMode) card.style.boxShadow = "0px 0px 20px 5px var(--extraDark)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});

// Blog Button hover effects
blogSectionCardBtns.forEach(btn => {
  btn.style.background = "var(--extraDark)";

  btn.addEventListener("mouseenter", () => {
    if (isDarkMode) {
      btn.style.boxShadow = "none";
      btn.style.transform = "scale(1.1)";
    }
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

// Design page control button effects
designPageSectionContentControls.forEach(btn => {
  btn.style.background = "var(--dark)";

  btn.addEventListener("mouseenter", () => {
    if (isDarkMode) {
      btn.style.boxShadow = "0px 0px 10px 5px #202020";
    }
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "none";
  });
});
