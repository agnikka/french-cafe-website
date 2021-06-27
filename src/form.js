// Validation according to: https://www.youtube.com/watch?v=rsd4FNGTRBw and https://www.youtube.com/watch?v=In0nB0ABaUk
// Modal according to: https://www.youtube.com/watch?v=MBaw_6cPmAw
// TODO: Try other way to encode the modal: https://www.w3schools.com/howto/howto_css_modals.asp
// and: https://www.youtube.com/watch?v=QUYjY9ApDgE
// TODO 2: Add checkmarks like here: https://www.youtube.com/watch?v=rsd4FNGTRBw&t=221s

const form = document.querySelector('#form');
const inputName = document.querySelector('#fname');
const inputLastName = document.querySelector('#lname');
const inputTelephone = document.querySelector('#telephone');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');
// const errorMessElem = document.querySelector('#error');

// Modal
function processModal() {
  const openModalButton = document.querySelector('[data-modal-target');
  const closeModalButtons = document.querySelectorAll('[data-close-button');
  const overlay = document.getElementById('overlay');

  function openModal(modal) {
    modal.classList.add('active');
    overlay.classList.add('active');
  }

  function closeModal(modal) {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }

  openModalButton.addEventListener('click', () => {
    const modal = document.querySelector(openModalButton.dataset.modalTarget);
    openModal(modal);
  });

  overlay.addEventListener('click', () => {
    const modal = document.querySelector('.modal.active');
    closeModal(modal);
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });
}

// Form validation

function setErrorFor(input, errorMessage) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = errorMessage;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isValidEmail(inputEmail) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail);
}

// TODO: check more about phone regex, add more validation options or hints for users
function isValidTelephone(inputTelephone) {
  return /^\d{9}$/.test(inputTelephone);
}

function checkInputs() {
  const nameValue = inputName.value.trim();
  const lastNameValue = inputLastName.value.trim();
  const telephoneValue = inputTelephone.value.trim();
  const emailValue = inputEmail.value.trim();
  const messageValue = inputMessage.value.trim();
  const errorMessages = [];

  if (nameValue === '') {
    setErrorFor(inputName, 'Name cannot be blank');
    errorMessages.push('error');
  } else {
    setSuccessFor(inputName);
  }

  if (lastNameValue === '') {
    setErrorFor(inputLastName, 'Message cannot be blank');
    errorMessages.push('error');
  } else {
    setSuccessFor(inputLastName);
  }

  if (telephoneValue !== '' && !isValidTelephone(telephoneValue)) {
    setErrorFor(inputTelephone, 'Phone number is not valid');
    errorMessages.push('error');
  } else {
    setSuccessFor(inputTelephone);
  }

  if (emailValue === '') {
    setErrorFor(inputEmail, 'Email cannot be blank');
    errorMessages.push('error');
  } else if (!isValidEmail(emailValue)) {
    setErrorFor(inputEmail, 'Email is not valid');
    errorMessages.push('error');
  } else {
    setSuccessFor(inputEmail);
  }

  if (messageValue === '') {
    setErrorFor(inputMessage, 'Message cannot be blank');
    errorMessages.push('error');
  } else {
    setSuccessFor(inputMessage);
  }

  if (errorMessages.length === 0) {
    processModal();
    console.log(nameValue, lastNameValue, telephoneValue, emailValue, messageValue);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

// old code snippets for memory and perhaps later use

// form.addEventListener('submit', (e) => {
//   const errorMessages = [];

//   if (inputName.value === '' || (inputName.value == null)) {
//     errorMessages.push('Name is required');
//   }

//   if (inputLastName === '' || inputLastName == null) {
//     errorMessages.push('Last name is required');
//   }

//   if (inputEmail.value === '' || inputEmail == null) {
//     errorMessages.push('Email is required');
//   }

//   if (inputMessage === '' || inputMessage == null) {
//     errorMessages.push('Message is required');
//   }

//   if (errorMessages.length > 0) {
//     e.preventDefault();
//     errorMessElem.innerText = errorMessages.join(', ');
//   }
// });

// function processForm() {
// const regexTelephone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
// const regexEmail =
// /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

// if (userName === '') {
//   window.alert('Please enter your name.');
//   userName.focus();
//   return false;
// }

// if (userLastName === '') {
//   window.alert('Please enter your last name.');
//   userLastName.focus();
//   return false;
// }

// if ((userTelephone !== '') && (!regexTelephone.test(userTelephone))) {
//   window.alert("Please enter a valid telephone number.");
//   userTelephone.focus();
// }

// if ((userEmail === '') || (!regexEmail.test(userEmail))) {
//   window.alert("Please enter a valid e-mail address.");
//   userEmail.focus();
//   return false;
// }

// if (userMessage === '') {
//   window.alert("Please enter a message.");
//   userMessage.focus();
//   return false;
// }
// console.log(userName, userLastName, userEmail, userMessage);
// openModal();
// return true;
// }

// if (userName && userLastName && userEmail && userMessage) {
// }

// form.onsubmit = processForm();

// userTelephone !== regexTelephone
// typeof (Number(userTelephone)) !== 'number'

// var regexPhone = /^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/;
// var regexEmail =
// /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

// if((!regexPhone.test(phoneValue)) ||(!regexEmail.test(emailValue))) {
//   nameErr = document.getElementById("name_errormsg");
//   nameErr.innerHTML = "Please enter your phone number or a valid email address.";
//   nameErr.style.color = "red";
//   return false;
// }

// }
// });
