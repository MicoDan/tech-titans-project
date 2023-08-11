function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("hidden");
  }
function logout(){
    window.location.href = "../home/home2.html";
    alert('you are logging out')
}
document.addEventListener("DOMContentLoaded", function () {
  const findNowButton = document.querySelector(".primary-btn");
  const arrivalInput = document.querySelector('input[placeholder="Date Arrival"]');
  const departureInput = document.querySelector('input[placeholder="Date Departure"]');

  findNowButton.addEventListener("click", function () {
    const arrivalDate = arrivalInput.value;
    const departureDate = departureInput.value;
    
    if (arrivalDate && departureDate) {
      const message = `You have booked your place in one of the hotel rooms  from ${arrivalDate} to ${departureDate}.`;
      alert(message);
    } else {
      alert("Please select both arrival and departure dates.");
    }
  });
});