const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData);

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
            window.location.href = "../pages/home.html";
        }
    } catch (error) {
        console.error("Error:", error);
    }
});