const form = document.querySelector(`form`);
const nameInput = form.querySelector(`#name`);
const email = form.querySelector(`#email`);
const password = form.querySelector(`#password`);
const confirmPassword = form.querySelector(`#confirm-password`);

nameInput.addEventListener(`keyup`, (e) => {
  const inputElement = e.target;
  const currentValue = inputElement.value;
  const nameRegex = /\w/; //name can only contain number or alphabet characters
  const nameDiv = form.querySelector(`.name-div`);

  if (
    currentValue.match(nameRegex) &&
    !currentValue[0].match(/[0-9]/) &&
    currentValue.length >= 3 &&
    currentValue.length <= 50
  ) {
    nameDiv.classList.remove(`reject-Border`);
    nameDiv.classList.add(`success-Border`);
  } else if (currentValue === "") {
    nameDiv.classList.remove(`success-Border`);
    nameDiv.classList.remove(`reject-Border`);
  } else {
    nameDiv.classList.remove(`success-Border`);
    nameDiv.classList.add(`reject-Border`);
  }
});

email.addEventListener(`keyup`, (e) => {
  const inputElement = e.target;
  const currentValue = inputElement.value;
  const nameRegex = /[a-z]/; //name can only contain number or alphabet characters
  const nameDiv = form.querySelector(`.email-div`);
  const numberRegex = /[0-9]/;

  if (
    currentValue.match(nameRegex) &&
    currentValue.includes(`.com`) &&
    !currentValue[0].match(numberRegex) &&
    currentValue.length >= 10 &&
    currentValue.length <= 50
  ) {
    nameDiv.classList.remove(`reject-Border`);
    nameDiv.classList.add(`success-Border`);
  } else if (currentValue === "") {
    nameDiv.classList.remove(`success-Border`);
    nameDiv.classList.remove(`reject-Border`);
  } else {
    nameDiv.classList.remove(`success-Border`);
    nameDiv.classList.add(`reject-Border`);
  }
});
password.addEventListener(`keyup`, (e) => {
  const inputElement = e.target;
  const currentValue = inputElement.value;
  const nameRegex = /[a-z]/; //name can only contain number or alphabet characters
  const nameDiv = form.querySelector(`.password-div`);
  const numberRegex = /[0-9]/;
  const capRegex = /[A-Z]/;
  const specialRegex = /[!@#$%^&*()_+=-{},.?`~\\s]/;

  if (
    currentValue.match(nameRegex) &&
    currentValue.match(capRegex) &&
    currentValue.match(specialRegex) &&
    currentValue.match(numberRegex) &&
    currentValue.length >= 8 &&
    currentValue.length <= 30
  ) {
    nameDiv.classList.remove(`reject-Border`);
    nameDiv.classList.add(`success-Border`);
  } else if (currentValue === "") {
    nameDiv.classList.remove(`success-Border`);
    nameDiv.classList.remove(`reject-Border`);
  } else {
    nameDiv.classList.remove(`success-Border`);
    nameDiv.classList.add(`reject-Border`);
  }
});

form.addEventListener(`submit`, (e) => {
  e.preventDefault();

  const name = document.querySelector(`#name`).value.trim();
  if (name && name.length <= 50 && !name.match(/[0-9]/)) {
    const email = document.querySelector(`#email`).value.trim();
    if (email && !email.match(/[A-Z]/) && !email.match(/\s/)) {
      const password = document.querySelector(`#password`).value.trim();
      if (
        password &&
        password.length >= 8 &&
        !password.match(/\s/) &&
        password.match(/[A-Za-z0-9]/) &&
        password.length <= 25
      ) {
        const confirmPassword = document
          .querySelector(`#confirm-password`)
          .value.trim();
        if (confirmPassword === password) {
          alert("CONGRATULATIONS YOUR VALIDATION WAS A GREAT SUCCESS");
        } else {
          alert(`passwords do not match!`);
        }
      } else {
        alert(`wrong password format!`);
      }
    } else {
      alert(`wrong email!`);
    }
  } else {
    alert("wrong name!");
  }
});
