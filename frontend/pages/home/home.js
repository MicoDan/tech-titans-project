// Retrieve the stored result from local storage
const storedResult = localStorage.getItem("userResult");
if (storedResult) {
    const result = JSON.parse(storedResult);
    // Now you can use the 'result' object as needed
    console.log(result);
    // You can also clear the stored result from local storage if needed
    // localStorage.removeItem("userResult");
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("hidden");
  }
  
  function selectOption(option) {
    // You can add additional logic here if needed.
    // For example, you can navigate to the booking page based on the selected option.
    // For this example, we will navigate to "./booking.html?type=[selected_option]".
    window.location.href = `./booking.html?type=${option}`;
  }
  
