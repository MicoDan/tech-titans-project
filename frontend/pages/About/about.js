function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("hidden");
  }
  function logout(){
    window.location.href = "../home/home2.html";
    alert('you are logging out')
  }