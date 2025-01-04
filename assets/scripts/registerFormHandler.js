const register_form = document.querySelector(".registerForm");
const nameInput = document.querySelector("#nameRegister");
const emailInput = document.querySelector("#emailRegister");
const passwordInput = document.querySelector("#passwordRegister");

register_form.addEventListener("submit", (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    try {
        // Retrieving the email and password values from the input fields
        const nameValue = nameInput.value;
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;
        const credentials = {
            username: nameValue,
            email: emailValue,
            password: passwordValue
        }

        console.log(credentials);
        
        axios.post("http://localhost:5000/api/register/", credentials)
            .then(res => {
                console.log(res)
                window.location.href = "./pages/profile.html"
            })
    }
    catch (error) {
        console.log(error); // Handling any errors that may occur during the request
    }
})

