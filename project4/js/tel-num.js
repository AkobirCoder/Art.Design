const input = document.querySelector("#number");
const output = document.querySelector("#output");

const iti = window.intlTelInput(input, {
    separateDialCode: true,
    initialCountry: "uz",
    preferredCountries: ["uz", "ru", "us", "tr", "kz"],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.8/build/js/utils.js",
    formatOnDisplay: true,
    nationalMode: false
});

input.addEventListener("input", () => {
    const isValid = iti.isValidNumber();
    const fullNumber = iti.getNumber();
    output.textContent = isValid ? `✅ To‘liq raqam: ${fullNumber}` : "❌ Noto‘g‘ri raqam formati";
});