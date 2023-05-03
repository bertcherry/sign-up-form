//compare password:password_confirm, return invalid & help text on confirm if false
function checkPassword() {
    const password = form.password.value;
    const password_confirm = form.password_confirm.value;
    const confirm_input = document.querySelector("#password_confirm");

    if (password != password_confirm) {
        confirm_input.setAttribute("invalid", "");
        confirm_input.setCustomValidity("Passwords must match");
    } else {
        confirm_input.setCustomValidity("");
    }
}

const formElements = {
    form: document.getElementById('contact-form'),
    email: document.getElementById('email'),
    emailError: document.querySelector('#email + span.error'),
    phone: document.getElementById('phone'),
    phoneError: document.querySelector('#phone + span.error'),
    password: document.getElementById('password'),
    password2: document.getElementById('password_confirm'),
    pwLengthValidity: document.getElementById('pw-length'),
    pwCaseValidity: document.getElementById('pw-case'),
    pwNumValidity: document.getElementById('pw-num'),
    pwMatchValidity: document.getElementById('pw-match'),
}

//Event listener for button activation
const form = document.getElementById("contact-form");

form.addEventListener("input", checkPassword);