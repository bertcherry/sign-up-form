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

//Event listener for button activation
const form = document.getElementById("contact-form");

form.addEventListener("input", checkPassword);