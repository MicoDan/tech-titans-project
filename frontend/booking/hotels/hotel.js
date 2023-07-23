// Function to fetch data from the backend and display hotels
async function displayHotels(adminId) {
    const url = adminId ? `/get-hotels/${adminId}` : '/hotels';
    const response = await fetch(url);
    const hotels = await response.json();

    const hotelListDiv = adminId ? document.querySelector(".admin-section .hotel-list") : document.querySelector(".customer-section .customer-hotel-list");
    hotelListDiv.innerHTML = '';

    hotels.forEach(hotel => {
        const hotelCard = document.createElement("div");
        hotelCard.classList.add("hotel-card");
        hotelCard.innerHTML = `
            <h3>${hotel.hotelName}</h3>
            <p>Address: ${hotel.address}</p>
            <p>Location: ${hotel.location}</p>
            <p>Description: ${hotel.description}</p>
            <p>Facilities: ${hotel.facilities}</p>
            <p>Rules: ${hotel.rules}</p>
            <img src="${hotel.pic}" alt="${hotel.hotelName}">
        `;

        hotelListDiv.appendChild(hotelCard);
    });
}

// Function to handle form submission for adding a new hotel
const addHotelForm = document.getElementById("addHotelForm");
addHotelForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(addHotelForm);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch("/hotel/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result); // You can handle the response here, e.g., show a success message to the admin
        if (result._id) {
            addHotelForm.reset();
            displayHotels(result.admin);
        }
    } catch (error) {
        console.error("Error:", error);
    }
});

// Function to handle the admin dashboard view
async function showAdminDashboard(adminId) {
    const adminSection = document.querySelector(".admin-section");
    adminSection.style.display = "block";

    const customerSection = document.querySelector(".customer-section");
    customerSection.style.display = "none";

    displayHotels(adminId);
}

// Function to handle the customer dashboard view
async function showCustomerDashboard() {
    const adminSection = document.querySelector(".admin-section");
    adminSection.style.display = "none";

    const customerSection = document.querySelector(".customer-section");
    customerSection.style.display = "block";

    displayHotels();
}

// Replace the following line with the actual authentication logic for admin and customer
const isAdminLoggedIn = true; // Set to true if the admin is logged in
if (isAdminLoggedIn) {
    const adminId = "YOUR_ADMIN_ID"; // Replace with the admin's ID received from backend authentication
    showAdminDashboard(adminId);
} else {
    showCustomerDashboard();
}
