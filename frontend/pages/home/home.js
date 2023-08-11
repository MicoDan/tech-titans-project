// Retrieve the stored result from local storage
const storedResult = localStorage.getItem("userResult");
if (storedResult) {
    const result = JSON.parse(storedResult);
    console.log(result);

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("hidden");
  }
  
  function selectOption(option) {
    window.location.href = `./booking.html?type=${option}`;
  }
}

function logout(){
  window.location.href = "../home/home2.html";
  alert('you are logging out')
}