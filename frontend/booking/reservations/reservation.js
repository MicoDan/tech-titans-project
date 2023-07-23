async function displayHotels(adminId) {
    const url = adminId ? `/get-hotels/${adminId}` : '/hotels';
    const response = await fetch(url);
    const hotels = await response.json();

    const hotelListDiv = adminId ? document.querySelector(".admin-section .hotel-list") : document.querySelector(".customer-section .hotel-list");
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

async function displayReservations(adminId) {
    const url = adminId ? `/get-reservations/${adminId}` : `/reservation/get/${customerId}`;
    const response = await fetch(url);
    const reservations = await response.json();

    const reservationListDiv = adminId ? document.querySelector(".admin-section") : document.querySelector(".customer-section .customer-reservation-list");
    reservationListDiv.innerHTML = '';

    reservations.forEach(reservation => {
        const reservationCard = document.createElement("div");
        reservationCard.classList.add("reservation-card");
        reservationCard.innerHTML = `
            <h3>${reservation.customerName}</h3>
            <p>Hotel: ${reservation.hotelName}</p>
            <p>Room: ${reservation.roomName}</p>
            <p>Check-in: ${reservation.checkInDate}</p>
            <p>Check-out: ${reservation.checkOutDate}</p>
            <p>No. of Rooms: ${reservation.noOfRooms}</p>
            <p>Price: ${reservation.price}</p>
        `;

        reservationListDiv.appendChild(reservationCard);
    });
}

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

const addReservationForm = document.getElementById("addReservationForm");
addReservationForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(addReservationForm);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch("/reservation/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result); // You can handle the response here, e.g., show a success message to the customer
        if (result._id) {
            addReservationForm.reset();
            displayReservations(result.customer);
        }
    } catch (error) {
        console.error("Error:", error);
    }
});

// Replace the following line with the actual authentication logic for admin and customer
const isAdminLoggedIn = true; // Set to true if the admin is logged in
const customerId = "YOUR_CUSTOMER_ID"; // Replace with the customer's ID received from backend authentication

if (isAdminLoggedIn) {
    const adminId = "YOUR_ADMIN_ID"; // Replace with the admin's ID received from backend authentication
    displayHotels(adminId);
} else {
    displayHotels();
    displayReservations(customerId);
}
