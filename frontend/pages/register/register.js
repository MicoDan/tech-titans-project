// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     var idToken = googleUser.getAuthResponse().id_token;
//     console.log('ID: ' + profile.getId());
//     console.log('Name: ' + profile.getName());
//     console.log('Email: ' + profile.getEmail());
//   }

// const { response } = require("express");

// const handleLogin = async (event) => {
//     event.preventDefault();

//     const form = event.target;
//     const formData = new FormData(form);

//     try {
//       const response = await fetch(form.action, {
//         method: 'POST',
//         body: formData
//       });

//       const data = await response.json();
//       if (response.ok) {
//         window.location.href = "/home";
//       } else {
//         console.error("login error: ", data.message);
//       }

//     } catch (err) {
//       console.error("error: ", err);
//     }
//   }

// async function login(event) {
//   event.preventDefault();

//   const form = document.querySelector('.login-form'); // Get the form element using querySelector
//   const formData = new FormData(form);

//   try {
//     const response = await fetch(form.action, {
//       method: 'POST',
//       body: formData
//     });

//     const data = await response.json();
//     if (response.ok) {
//       window.location.href = "/home";
//     } else {
//       console.error("login error: ", data.message);
//     }

//   } catch (err) {
//     console.error("error: ", err);
//   }
// }

// window.addEventListener("DOMContentLoaded", (event) => {
//   const el = document.getElementById('overlayBtn');
//   if (el) {
//     el.addEventListener('submit', login, false);
//   }
// });

// var icon = document.getElementsByClassName("icon")
// var pages = document.getElementsByClassName("pages");

// icon.onclick = function () {
    
//     "use strict";
    
//     pages.classList.toggle("show_list");
//     icon.classList.toggle("active");
    
// };
// icon.onclick = function () {
//     "use strict";
//     pages.classList.toggle("show_list");
//     icon.classList.toggle("active");
// };



document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const submitButton = document.querySelector('.btn-1');
  
    const handleLogin = async (event) => {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const fname = document.getElementById('fname').value;
      const lname = document.getElementById('lname').value;
      const tel = document.getElementById('phone').value;
      const address = document.getElementById('address').value;
      const gender = document.getElementById('gender').value;
      const country = document.getElementById('country');
  
      const formData = {
        email: email,
        fname: fname,
        lname: lname,
        tel: tel,
        address: address,
        password: password,
        gender: gender,
        country: country
      };
  
      try {
        const response = await fetch('http://localhost:5000/user/customer/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          alert('Login successful');
          window.location.href === '../contact/contact.html'
        } else {
          alert('Invalid email and password');
        }
      } catch (err) {
        alert('An error occurred! Please wait or try again.');
        console.error('Error: ', err);
      }
    };
  
    submitButton.addEventListener('click', handleLogin);
  });
  