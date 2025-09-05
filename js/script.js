// This is the WhatsApp link we created.
const whatsappLink = "https://wa.me/2348163189688?text=Hi%20Tunde,%20I'd%20like%20the%20free%20WhatsApp%20scripts%20guide!";

// Find all the buttons with the class "cta-button" on the page.
const ctaButtons = document.querySelectorAll(".cta-button");

// Add a click event to each button.
ctaButtons.forEach(button => {
    button.addEventListener("click", () => {
        // When a button is clicked, open the WhatsApp link in a new tab.
        window.open(whatsappLink, "_blank");
    });
});