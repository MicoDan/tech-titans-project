// responsiveness of the menu
const navBar= document.getElementsByClassName('navbar')


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result); // You can handle the response here, e.g., show a success message to the user
        if (result.success) {
            displayMessage("success", "Your message has been sent successfully!");
            contactForm.reset();
        } else {
            displayMessage("error", "An error occurred. Please try again later.");
        }
    } catch (error) {
        console.error("Error:", error);
        displayMessage("error", "An error occurred. Please try again later.");
    }
});

function displayMessage(type, message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(`${type}-message`);
    if (type === "success") {
        messageDiv.style.color = "green";
      } else if (type === "error") {
        messageDiv.style.color = "red";
      }
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);

    // Hide the message after 3 seconds
    setTimeout(() => {
        messageDiv.style.display = "none";
    }, 3000);
}
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("hidden");
  }