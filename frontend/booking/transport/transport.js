async function displayBuses(adminLoggedIn) {
    const url = adminLoggedIn ? "/admin/get" : "/";
    const response = await fetch(url);
    const buses = await response.json();

    const busListDiv = adminLoggedIn ? document.querySelector(".admin-section .bus-list") : document.querySelector(".customer-section .bus-list");
    busListDiv.innerHTML = '';

    buses.forEach(bus => {
        const busCard = document.createElement("div");
        busCard.classList.add("bus-card");
        busCard.innerHTML = `
            <h3>${bus.licensePlate}</h3>
            <p>Starting Station: ${bus.startingStation}</p>
            <p>Destination Station: ${bus.destinationStation}</p>
            <p>Total Travel Time: ${bus.totalTravelTime}</p>
            <p>Total Number of Seats: ${bus.totalNumberOfSeats}</p>
            <p>Ticket Price: ${bus.ticketPrice}</p>
            <p>Facilities: ${bus.facilities.join(", ")}</p>
            <p>City Stops: ${bus.cityStops.join(", ")}</p>
            <p>Mobile Number: ${bus.mobileNo}</p>
            <p>Leaving Time: ${bus.leavingTime}</p>
        `;

        busListDiv.appendChild(busCard);
    });
}

const addBusForm = document.getElementById("addBusForm");
addBusForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(addBusForm);
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
            addBusForm.reset();
            displayBuses(true);
        }
    } catch (error) {
        console.error("Error:", error);
    }
});

// Replace the following line with the actual authentication logic for admin and customer
const isAdminLoggedIn = true; // Set to true if the admin is logged in

if (isAdminLoggedIn) {
    displayBuses(true);
} else {
    displayBuses(false);
}
