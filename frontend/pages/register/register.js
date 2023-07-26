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
          window.location.href ==='/home'
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
  