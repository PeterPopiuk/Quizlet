import "./main.scss";
// import { initNavBar } from "./unavtorized-nav-bar/unavtorized-nav-bar.controller";
import { initNavigation } from "./navigation/navigation.controller";
import { formElementToPayload } from "./utils";

import { loginSubmit } from "./login/login.controller";
import { processLogin } from "./login/login.model";

const loginBtn = document.querySelector("#login-btn"),
  loginDiv = document.querySelector("#login"),
  logoutBtn = document.querySelector("#logout"),
  mainDiv = document.querySelector("#main"),
  loginError = document.querySelector("#loginError"),
  formElem = document.querySelector("#formElem");
const API_URL = "http://207.154.240.231/api";

const loginItem = document.querySelector("#loginItem");
const registrationItem = document.querySelector("#registrationItem");

// *Controller

// initNavBar();
initNavigation();

// loginSubmit();

// loginItem.addEventListener("click", () => {
//   loginItem.classList.add("uk-active");
//   registrationItem.classList.remove("uk-active");
//   loginError.classList.add("display_off");
// });
// registrationItem.addEventListener("click", () => {
//   registrationItem.classList.add("uk-active");
//   loginItem.classList.remove("uk-active");
//   loginError.classList.add("display_off");
// });
// formElem.onsubmit = (e) => e.preventDefault();

// formElem.addEventListener("submit", processLoginSubmit);
// formElem.addEventListener("submit",loginSubmit);

// async function processLoginSubmit(event) {
//   event.preventDefault(event);
//   const payLoad = formElementToPayload(event.target);
//   console.log(payLoad);
//   if (registrationItem.classList.contains("uk-active")) {
//   const signInStatus = await fetch(`${API_URL}/signup`, {
//     headers: { "Content-Type": "application/json" },
//     method: "POST",
//     body: JSON.stringify(payLoad),
//   });
//   console.log(signInStatus);
//   if (!signInStatus.ok) {
//     loginError.classList.remove("display_off");
//     loginError.innerHTML = "Користувач з таким e-mail вже існує!";
//    } else{
//     loginError.classList.add("display_off");
//    }
//  } else {
//   const logInStatus = await fetch(`${API_URL}/login`, {
//     headers: { "Content-Type": "application/json" },
//     method: "POST",
//     body: JSON.stringify(payLoad),
//   });
//   console.log(logInStatus);
//   let result = await logInStatus.json();
//   console.log(result);
//   if (!logInStatus.ok) {
//     loginError.classList.remove("display_off");
//     loginError.innerHTML = "Невірний e-mail або пароль!";
//    } else{
//     loginError.classList.add("display_off");
//     loginDiv.classList.add("display_off");
//     mainDiv.classList.remove("display_off");
//    }
//  }


  // let eMailData = document.forms.login.elements.eMail.value,
  //   passwordData = document.forms.login.elements.password.value;
  // if (eMailData == "abc" && passwordData == "123") {
  //   loginDiv.classList.add("display_off");
  //   loginError.classList.add("display_off");
  //   mainDiv.classList.remove("display_off");
  // } else {
  //   loginError.classList.remove("display_off");
  // }
// }

// function logoutFunc() {
//   mainDiv.classList.add("display_off");
//   loginDiv.classList.remove("display_off");
//   formElem.reset();
// }

// loginBtn.addEventListener("click", loginFunc);

// logoutBtn.addEventListener("click", logoutFunc);
// Controller*
