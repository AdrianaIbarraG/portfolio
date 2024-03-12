let txtName = document.getElementById("txtName");
let txtPhone = document.getElementById("txtPhone");
let txtEmail = document.getElementById("txtEmail");
let txtMsg = document.getElementById("txtMsg");
const form = document.getElementById("formSend");

let alertValidation = document.getElementById("alertValidation");
let textAlert = document.getElementById("textAlert");

let isValid= true;
let idTimeout;

/** Buttons*/
let btnSubmit = document.getElementById("btnSubmit");
let btnClear = document.getElementById("btnClear");


/* Functions */

function NameValidation() {
    if (txtName.value.length < 2) {
      return false;
    }
    return true;
} //name Validation

/* function PhoneValidation() {
    if (txtPhone.value.length == 0) {
      return false;
    }
    if (isNaN(txtPhone.value)) {
      console.log("Is not a number");
      isValid = false;
      return false;
    }
  
    txtPhone.style.border = "";
    return true;
} //Phone Validation */

function emailValidation() {
    const email = document.getElementById("txtEmail");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // email validation and clear
    if (emailRegex.test(email.value)) {
      return true;
    } else {
      return false;
    }
}// emailValidation

function messageValidation() {
    // .replace to delete blanks
    if (txtMsg.value.replace(/\s+/g, "").length < 1) {
      return false;
    } else {
      return true;
    }
}// message Validation

btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    isValid = true;
    console.log("Sending");
    clearTimeout(idTimeout);
  
    /* Clear alert message*/
    textAlert.innerHTML = "";
    alertValidation.style.display = "none";
  
    /* Validation of white fileds */
    txtName.value = txtName.value.trim(); //* delete spaces
  
    let list = "The following fields must be filled correctly:<ul>";
  
    if (!NameValidation()) {
      txtName.style.border = "solid thin red";
      list += "<li>Write a valid name</li>";
      alertValidation.style.display = "block";
      isValid = false;
    } else {
      txtName.style.border = "";
    } // validates that "Name" is not empty"
  
    if (!emailValidation()) {
      txtEmail.style.border = "solid thin red";
      list +=
        "<li>Enter a valid Email Address with '@' and a domain; example: someone@domain.com </li>";
      alertValidation.style.display = "block";
      isValid = false;
    } else {
      txtEmail.style.border = "";
    } // email validation
  
    /* if (!PhoneValidation()) {
      txtPhone.style.border = "solid thin red";
      list += "<li>Enter a valid Mobile Number</li>";
      alertValidation.style.display = "block";
      isValid = false;
    } else {
      txtPhone.style.border = "";
    } // phone validation */
  
    if (!messageValidation()) {
      txtMsg.style.border = "solid thin red";
      list +=
        "<li>Message should not be empty</li>";
      alertValidation.style.display = "block";
      isValid = false;
    } else {
      txtMsg.style.border = "";
    } // message validation
  
    list += "</ul>";
    textAlert.insertAdjacentHTML("beforeend", list);
    idTimeout = setTimeout(function () {
      alertValidation.style.display = "none";
    }, 9000); //message time

    //Send form
    if(isValid){
        form.submit();
    }

    console.log(form);   
    
    //clear fields
    if (isValid) {
      txtName.value = "";
      txtPhone.value = "";
      txtEmail.value = "";
      txtMsg.value = "";
    }
}); //btnEnviar

/* btn clear */
btnClear.addEventListener("click", function (event) {
    event.preventDefault();
  
    /* Limpiar campos */
    txtName.value = "";
    txtPhone.value = "";
    txtEmail.value = "";
    txtMsg.value = "";
}); // click btnClear

/* Delete blank spaces at the beginng and end*/
txtPhone.addEventListener("blur", function (event) {
    event.preventDefault();
    txtPhone.value = txtPhone.value.trim();
}); /* txtTelefono.blur */

txtName.addEventListener("blur", function (event) {
    event.preventDefault();
    txtName.value = txtName.value.trim();
}); /* txtName.blur */

txtEmail.addEventListener("blur", function (event) {
    event.preventDefault();
    txtEmail.value = txtEmail.value.trim();
}); /* txtMail.blur */