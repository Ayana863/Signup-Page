const fullName = document.getElementById("fullName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const terms = document.getElementById("terms")


// Errors
const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const confirmPasswordError = document.getElementById("confirmPasswordError")
const termsError = document.getElementById("termsError")

// validation
fullName.addEventListener("input", () => {
    if (fullName.value.trim() !== "") nameError.innerText = ""
});

email.addEventListener("input", () => {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.match(emailPattern)) emailError.innerText = ""
});

password.addEventListener("input", () => {
    if (password.value.length >= 6) passwordError.innerText = ""
});

confirmPassword.addEventListener("input", () => {
    if (password.value === confirmPassword.value) confirmPasswordError.innerText = ""
});

terms.addEventListener("change", () => {
    if (terms.checked) termsError.innerText = ""
});

// Submit validation
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault()
    let valid = true

    // Clear previous errors
    nameError.innerText = ""
    emailError.innerText = ""
    passwordError.innerText = ""
    confirmPasswordError.innerText = ""
    termsError.innerText = ""

    // Full Name
    if (fullName.value.trim() === "") {
        nameError.innerText = "Full name is required"
        valid = false
    }

    // Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (!email.value.match(emailPattern)) {
        emailError.innerText = "Please enter a valid email [examplegmail.com]"
        valid = false
    }

    // Password Validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    if (!password.value.match(passwordPattern)) {
        passwordError.innerText = "Password must be at least 6 characters, include uppercase, lowercase, number & special character"
        valid = false
    }

    if (confirmPassword.value.trim() === "") {
        confirmPasswordError.innerText = "Please confirm your password"
        valid = false
    }

    // Confirm Password
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.innerText = "Passwords do not match"
        valid = false
    }

    // Terms checkbox
    if (!terms.checked) {
        termsError.innerText = "You must agree before submitting"
        valid = false
    }



    if (valid) {

        // store values
        sessionStorage.setItem("fullname", fullName.value)
        sessionStorage.setItem("email", email.value)
        sessionStorage.setItem("password", password.value)
        sessionStorage.setItem("confirmPassword", confirmPassword.value)
        sessionStorage.setItem("terms", terms.checked)
        alert("Sign Up Successful!");

        //  reset inputs
        document.getElementById("signupForm").reset()
        // navigate
        window.location.href = "signin.html"
    }

})
// signin button
document.getElementById("signinBtn").addEventListener("click", () => {
    // navigate
    window.location.href = "signin.html"


})
