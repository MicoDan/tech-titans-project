const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData);
    console.log(data)

    try {
        const response = await fetch("http://localhost:5000/user/customer/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (result) {
            localStorage.setItem("userResult", JSON.stringify(result));
            window.location.href = "../pages/home/home.html";
        }
    } catch (error) {
        console.error("Error:", error);
    }
});

const signupForm = document.getElementById("signupForm");

// Function to handle form submission for signup
signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData(signupForm);
    const data = Object.fromEntries(formData);
    
    try {
        const response = await fetch("http://localhost:5000/user/customer/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (result) {
            localStorage.setItem("userResult", JSON.stringify(result));
            window.location.href = "../pages/home/home.html";
        }
    } catch (error) {
        console.error("Error:", error);
    }
});

// Function to handle form submission for login

