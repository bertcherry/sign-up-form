//validate email and phone inputs
const validateInput = (inputId) => {
    const inputElement = document.getElementById(inputId);
    const errorSpan = document.querySelector(`#${inputId} + span.error`);
    if (inputElement.validity.valid) {
        errorSpan.textContent = '';
        errorSpan.className = 'error';
    } else if (!inputElement.validity.valid) {
        inputElement.className = 'error active';
        if (inputElement.validity.valueMissing) {
            errorSpan.textContent = 'Complete this field.';
        } else if (inputId = 'email' && inputElement.validity.typeMismatch) {
            errorSpan.textContent = 'Please enter a valid email address.';
        } else if (inputId = 'phone' && inputElement.validity.patternMismatch) {
            errorSpan.textContent = 'Please enter a phone number in the following format: (800) 555-1234';
        }
    }
}

//validate password input
const validatePassword = () => {
    const password = document.getElementById('password');
    const password2 = document.getElementById('password_confirm');
    const pwLengthValidity = document.getElementById('pw-length');
    const pwCaseValidity = document.getElementById('pw-case');
    const pwNumValidity = document.getElementById('pw-num');
    const pwMatchValidity = document.getElementById('pw-match');    

    if (password.validity.tooShort || password.validity.valueMissing) {
        pwLengthValidity.textContent = '\u274C';
    } else if (!password.validity.tooShort) {
        pwLengthValidity.textContent = '\u2705';
    }
    
    if (!password.value.match(new RegExp('[a-z]')) || !password.value.match(new RegExp('[A-Z]'))) {
        pwCaseValidity.textContent = '\u274C';
    } else if (password.value.match(new RegExp('[a-z]')) && password.value.match(new RegExp('[A-Z]'))) {
        pwCaseValidity.textContent = '\u2705';
    }
    
    if (!password.value.match(new RegExp('[0-9]'))) {
        pwNumValidity.textContent = '\u274C';
    } else if (password.value.match(new RegExp('[0-9]'))) {
        pwNumValidity.textContent = '\u2705';
    }
    
    if (password2.validity.valueMissing) {
        pwMatchValidity.textContent = '';
    } else if (password.value != password2.value) {
        password2.setAttribute('invalid', '');
        pwMatchValidity.textContent = '\u274C';
    } else if (password.value === password2.value) {
        password2.setCustomValidity('');
        pwMatchValidity.textContent = '\u2705';
    }
}


//Validate form on submit as well
const validateForm = (e) => {
    e.preventDefault();
    validateInput('email');
    validateInput('phone');
    validatePassword();
} 

//After first blur, validation runs when the input is changed
const handleBlur = (e) => {
    const inputId = e.currentTarget.id;
    const inputElement = document.getElementById(inputId);
    //need to split into their own if statements to create the unique listener status change
    if (inputId === 'email' || inputId === 'phone') {
        validateInput(inputId);
        inputElement.addEventListener('input', handleInput);
    } else if (inputId === 'password' || inputId === 'password_confirm') {
        validatePassword();
        inputElement.addEventListener('input', handleInput);
    }
}

const handleInput = (e) => {
    const inputId = e.currentTarget.id;
    if (inputId === 'email' || inputId === 'phone') {
        validateInput(inputId);
    } else if (inputId === 'password' || inputId === 'password_confirm') {
        validatePassword();
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
const form = document.getElementById('contact-form');
form.addEventListener('submit', validateForm);

//Event listeners for first blur
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', handleBlur);

const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('blur', handleBlur);

const passwordInput = document.getElementById('password');
passwordInput.addEventListener('blur', handleBlur);

const password2Input = document.getElementById('password_confirm');
password2Input.addEventListener('blur', handleBlur);