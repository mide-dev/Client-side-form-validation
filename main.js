"use strict";

// input ids
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("tel");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const contactFormSubmit = document.getElementById("contact-form-btn");

// Error message ids
const firstNameError = document.getElementById("err-msg-first-name");
const lastNameError = document.getElementById("err-msg-last-name");
const emailError = document.getElementById("err-msg-email");
const phoneNumberError = document.getElementById("err-msg-tel");
const passwordError = document.getElementById("err-msg-password");
const submitError = document.getElementById("err-msg-submit");

//  submit btn error check
const submitErrorMsg = (err) => {
  if (err.textContent !== "") {
    submitError.innerHTML = "please fix the error(s) above";
  } else {
    submitError.innerHTML = "";
  }
};

// // dectect no inputs or empty space only in input
const noInputsOrEmptySpacePresent = (input) => {
  if (input.value.length === 0 || input.value.match(/^(\s)+$/)) {
    return true;
  }
};

// dectect special characters in input
const SpecialCharactersPresent = (input) => {
  if (input.value.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
    return true;
  }
};

// detect numbers in input
const NumbersPresent = (input) => {
  if (input.value.match(/\d/)) {
    return true;
  }
};

// dectect if email is in correct format
const emailCorrect = (input) => {
  if (input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return true;
  }
};

// VALIDATE NAME WHEN USER TYPING
const nameValidate = (input, errMessage) => {
  // check for no input or empty space only
  if (noInputsOrEmptySpacePresent(input)) {
    input.setAttribute("data-input", "not-valid");
    return;

    // prevent special characters in name
  } else if (SpecialCharactersPresent(input)) {
    errMessage.innerHTML = "special charaters are not allowed in name";
    input.setAttribute("data-input", "not-valid");
    return;

    // Prevent numbers in name
  } else if (NumbersPresent(input)) {
    errMessage.innerHTML = "numbers are not allowed in name";
    input.setAttribute("data-input", "not-valid");
    return;
  } else {
    // delete error msg if input is valid
    errMessage.innerHTML = "";
    input.removeAttribute("data-input");
    submitErrorMsg(errMessage);
  }
};

// VALIDATE EMAIL WHEN USER TYPING
const emailValidate = (input, errMessage) => {
  if (!emailCorrect(input)) {
    errMessage.innerHTML = "email is not valid";
    input.setAttribute("data-input", "not-valid");
    return;
  } else {
    // delete error msg if input is valid
    errMessage.innerHTML = "";
    input.removeAttribute("data-input");
    submitErrorMsg(errMessage);
  }
};

// Additional validation when submit button is clicked
const submitValidate = (input, errMessage) => {
  // name validation
  if (noInputsOrEmptySpacePresent(input)) {
    errMessage.innerHTML = "Name is required";
    submitErrorMsg(errMessage);
  } else if (SpecialCharactersPresent(input) || NumbersPresent(input)) {
    submitErrorMsg(errMessage);
  } else {
    submitErrorMsg(errMessage);
  }
};

// bind event listner
firstNameInput.addEventListener("keyup", () => {
  nameValidate(firstNameInput, firstNameError);
});

lastNameInput.addEventListener("keyup", () => {
  nameValidate(lastNameInput, lastNameError);
});

emailInput.addEventListener("keyup", () => {
  emailValidate(emailInput, emailError);
});

// event listner for submit button
contactFormSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  submitValidate(firstNameInput, firstNameError);
  submitValidate(lastNameInput, lastNameError);
  emailValidate(emailInput, emailError);
});
