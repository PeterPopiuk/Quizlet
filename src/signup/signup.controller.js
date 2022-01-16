import { processSignup } from "./signup.model";
import { disposeView, initView } from "./signup.view";

let isInited = false;
const domElements = new Map();


export function initSignup() {
  initView();
  defineDomElements();
  initSignupListeners();
  isInited = true;
}

export function disposeSignup() {
  if (isInited) {
    removeSignupListeners();
    domElements.clear();
    disposeView();
    isInited = false;
  }
}

function initSignupListeners() {
  domElements.get("signup-form").addEventListener("submit", processSignup);
}

function removeSignupListeners() {
  domElements.get("signup-form").removeEventListener("submit", processSignup);
}

function defineDomElements() {
  domElements.set("signup-form",document.getElementById("signup-form"))
} 