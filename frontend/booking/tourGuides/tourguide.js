async function displayGuides(adminLoggedIn) {
    const url = adminLoggedIn ? "/admin/get" : "/customer/get";
    const response = await fetch(url);
    const guides = await response.json();

    const guideListDiv = adminLoggedIn ? document.querySelector(".admin-section .guide-list") : document.querySelector(".customer-section .guide-list");
    guideListDiv.innerHTML = '';

    guides.forEach(guide => {
        const guideCard = document.createElement("div");
        guideCard.classList.add("guide-card");
        guideCard.innerHTML = `
            <h3>${guide.name}</h3>
            <p>Gender: ${guide.gender}</p>
            <p>Language: ${guide.language}</p>
            <p>Location: ${guide.location}</p>
            <p>Description: ${guide.description}</p>
            <p>Fee: ${guide.fee}</p>
            <p>Phone Number: ${guide.phoneNumber}</p>
        `;

        guideListDiv.appendChild(guideCard);
    });
}

const addGuideForm = document.getElementById("addGuideForm");
addGuideForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(addGuideForm);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch("/admin/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result); // You can handle the response here, e.g., show a success message to the admin
        if (result._id) {
            addGuideForm.reset();
            displayGuides(true);
        }
    } catch (error) {
        console.error("Error:", error);
    }
});

// Replace the following line with the actual authentication logic for admin and customer
const isAdminLoggedIn = true; // Set to true if the admin is logged in

if (isAdminLoggedIn) {
    displayGuides(true);
} else {
    displayGuides(false);
}
