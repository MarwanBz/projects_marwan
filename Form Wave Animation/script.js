//select all form labels
const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText

    .split("")
    //split function turned Email letters into an array
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 40}ms">${letter}</span>`
    )

    .join("");
});

// !form validation
const form = document.querySelector("form");
const email = document.getElementById("email");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// !functions
// check the requirement
function showError(input, msg) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = msg;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function match(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "password does not match!");
  }
}

// email check
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// !event listeners here
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([userName, email, password, password2]);

  checkLength(userName, 3, 14);
  checkLength(password, 6, 24);
  checkLength(password2, 6, 24);
  checkLength(email, 9, 20);
  match(password, password2);
  checkEmail(email);
});
