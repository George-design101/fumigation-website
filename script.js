
/* ========================================
   1. WHATSAPP QUOTE FORM
======================================== */

// Your business WhatsApp number in international format.
// Remove the "+" and spaces for the WhatsApp URL.
const WHATSAPP_NUMBER = "2348038664094";

const quoteForm = document.getElementById("quote-form");

if (quoteForm) {
    quoteForm.addEventListener("submit", function (event) {
        // Prevent the form from submitting to a server.
        event.preventDefault();

        // Get the form values.
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service");
        const serviceText =
            service.options[service.selectedIndex].text;
        const location = document.getElementById("location").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation.
        if (!name || !phone || !service.value || !location || !message) {
            alert("Please complete all required fields.");
            return;
        }

        // Build the enquiry message.
        const whatsappMessage = `
Hello GreenShield Fumigation!

I would like to request a fumigation/pest control quote.

CUSTOMER DETAILS
Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

SERVICE DETAILS
Service Required: ${serviceText}
Property Location: ${location}

DESCRIPTION OF THE PROBLEM
${message}

Please contact me with more information about your service and pricing.

Thank you.
        `.trim();

        // Encode the message for a WhatsApp URL.
        const encodedMessage = encodeURIComponent(whatsappMessage);

        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Open WhatsApp in a new tab or app.
        const whatsappWindow = window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

        // Fallback if the browser blocks the new tab.
        if (!whatsappWindow) {
            window.location.href = whatsappURL;
        }
    });
}


/* ========================================
   2. AUTOMATIC COPYRIGHT YEAR
======================================== */

const copyrightYear = document.getElementById("copyright-year");

if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}
