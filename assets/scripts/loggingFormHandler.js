// Getting references to the login and register forms and email/password input fields
const login_form = document.querySelector(".loginForm");
const emailLoggedIn = document.querySelector("#emailLoggedIn");
const passwordLoggedIn = document.querySelector("#passwordLoggedIn");

// Adding an event listener to the login form submit button
login_form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    try {
        // Retrieving the email and password values from the input fields
        const emailValue = emailLoggedIn.value;
        const passwordValue = passwordLoggedIn.value;
        const credentials = {
            email: emailValue,
            password: passwordValue
        }

        // Sending a POST request to the server to authenticate user credentials
        axios.post("http://localhost:5000/api/login/", credentials)
            .then((res) => {
                console.log(res.status)
                if (res.status === 200) {
                    window.location.href = "./pages/profile.html"
                }
            });
    } catch (error) {
        console.log(error); // Handling any errors that may occur during the request
    }
});
