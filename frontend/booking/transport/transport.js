let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const locationInput = document.querySelector('input[name="location"]');
const pickUpDateInput = document.querySelector('input[name="pick-up-date"]');
const returnDateInput = document.querySelector('input[name="return-date"]');



const sr = ScrollReveal ({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})

sr.reveal('.text',{delay: 200, origin: 'top'});
sr.reveal('.form-container form',{delay: 600, origin: 'left'});
sr.reveal('.heading',{delay: 400, origin: 'top'});
sr.reveal('.ride-container .box',{delay: 400, origin: 'top'});
sr.reveal('.services-container .box',{delay: 400, origin: 'top'});
sr.reveal('.about-container .box',{delay: 400, origin: 'top'});
sr.reveal('.reviews-container',{delay: 400, origin: 'top'});
sr.reveal('.newsletter .box',{delay: 400, origin: 'bottom'});


function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("hidden");
}
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent the default form submission


  const location = locationInput.value;
  const pickUpDate = pickUpDateInput.value;
  const returnDate = returnDateInput.value;
  console.log(location)
  console.log(pickUpDate)
  console.log(returnDate)

  // Check if the required fields are filled
  if (location.trim() === '' || pickUpDate.trim() === '' || returnDate.trim() === '') {
    alert('Please fill in all the fields.');
    return;
  }

  // Show an alert with the booking details
  const message = `Congratulations you have booked the car!\n\nLocation: ${location}\nPick-Up Date: ${pickUpDate}\nReturn Date: ${returnDate}`;
  alert(message);
}
