import { payLoad, processLogin, user } from "./login.model";
import { disposeView, initView } from "./login.view";

let isInited = false;
const domElements = new Map();

export function initLogin() {
  initView();
  defineDomElements();
  initLoginListeners();
  // userNameForm = userName;
  // console.log(userNameForm); //my code
  isInited = true;   
}

export function disposeLogin() {
  if (isInited) {
    removeLoginListeners();
    domElements.clear();
    disposeView();
    isInited = false;
  }
}

export function getUser() {
  return user;
} 

function initLoginListeners() {
  domElements.get("login-form").addEventListener("submit", processLogin);
}

function removeLoginListeners() {
  domElements.get("login-form").removeEventListener("submit", processLogin);
}

function defineDomElements() {
  domElements.set("login-form",document.getElementById("login-form"))
}

