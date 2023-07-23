// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     var idToken = googleUser.getAuthResponse().id_token;
//     console.log('ID: ' + profile.getId());
//     console.log('Name: ' + profile.getName());
//     console.log('Email: ' + profile.getEmail());
//   }

const handleLogin = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (response.ok) {
        window.location.href = "/home";
      } else {
        console.error("login error: ", data.message);
      }

    } catch (err) {
      console.error("error: ", err);
    }
  }