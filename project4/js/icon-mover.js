// address Icon:
const address = document.getElementById("addressIcon");
 
address.addEventListener("click", () => {
    address.classList.add("animatedLocation");
    setTimeout(() => {
        address.classList.remove("animatedLocation");
    }, 3000);
});


// phone icon:
const phone = document.getElementById("phoneIcon");

phone.addEventListener("click", () => {
    phone.classList.add("animatedPhone");
    setTimeout(() => {
        phone.classList.remove("animatedPhone");
    }, 3000);
});


// email icon:
const email = document.getElementById("emailIcon");

email.addEventListener("click", () => {
    email.classList.add("animatedEmail");
});