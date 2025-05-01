const textBlogs = document.querySelectorAll(".blogContentInfo .infoText");
const images = document.querySelectorAll(".image");

textBlogs.forEach(block => {
    const id = block.dataset.id;

    block.addEventListener("mouseenter", () => {
        const targetImage = document.querySelector(`.image[data-id="${id}"]`);

        if (targetImage) {
            targetImage.classList.add("hovered");
        }
    });

    block.addEventListener("mouseleave", () => {
        const targetImage = document.querySelector(`.image[data-id="${id}"]`);

        if (targetImage) {
            targetImage.classList.remove("hovered");
        }
    });
});