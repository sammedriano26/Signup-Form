"use strict";

const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Listen to submit event on the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputValidator();
});

function inputValidator() {
  // Retrieve input values | Use trim() to remove any extra spaces.
  const firstNameVal = firstName.value.trim();
  const lastNameVal = lastName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  // Check First Name
  if (!firstNameVal) {
    deletePlaceholder(firstName);

    setErrorFor(firstName, "First Name cannot be empty.");
  } else {
    // Add Success Class
    setSuccessFor(firstName);
  }

  // Check Last Name
  if (!lastNameVal) {
    deletePlaceholder(lastName);
    setErrorFor(lastName, "Last Name cannot be empty.");
  } else {
    setSuccessFor(lastName);
  }

  // Check Email
  if (!emailVal) {
    deletePlaceholder(email);
    setErrorFor(email, "Email cannot be empty");
  } else if (!validateEmail(emailVal)) {
    email.style.color = "#fe7678";

    setErrorFor(email, "Looks like this is not an email.");
  } else {
    setSuccessFor(email);
  }

  // Check Password
  if (!passwordVal) {
    deletePlaceholder(password);
    setErrorFor(password, "Password cannot be empty.");
  } else {
    setSuccessFor(password);
  }
}

// Error function
function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const errorMsg = formControl.querySelector(".error-msg");

  // Add error message inside errorMsg
  errorMsg.innerText = message;

  // Add error class
  formControl.className = "form-control error";
}

// Success function
function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Add success class
  formControl.className = "form-control success";
}

// Validate email
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

// Delete placeholder
function deletePlaceholder(input) {
  input.placeholder = "";
}
