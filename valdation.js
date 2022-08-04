const form = document.querySelector(`form`);

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
