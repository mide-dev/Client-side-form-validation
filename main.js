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

// validate form parameters
const validateForm = (e) => {
  e.preventDefault();

  //  global submit error
  const submitErrorMsg = (err) => {
    if (err.textContent !== "") {
      submitError.innerHTML = "please fix the error(s) above";
    } else {
      submitError.innerHTML = "";
    }
  };

  // FUNCTION TO VALIDATE NAME
  const NameValidate = (input, errMessage) => {
    // check for no input or when user inputs space only
    //   prettier-ignore
    if (input.value.length === 0 || input.value.match(/^(\s)+$/)) {
        errMessage.innerHTML = "Name is required";
        submitErrorMsg(errMessage);
        return;
      } else {
        // delete error msg if input is valid
        errMessage.innerHTML = "";
        submitErrorMsg(errMessage);
      }

    // Prevent special characters and numbers in name
    //   prettier-ignore
    if (input.value.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]/)) {
        errMessage.innerHTML = "numbers and special charaters are not allowed";
        submitErrorMsg(errMessage);
        return;
        } else {
        // delete error msg if input is valid
        errMessage.innerHTML = submitError.innerHTML = "";
        submitErrorMsg(errMessage);
    }
  };

  //   call the function with first and last name
  NameValidate(firstNameInput, firstNameError);
  NameValidate(lastNameInput, lastNameError);
};

// bind event listner
contactFormSubmit.addEventListener("click", validateForm);
