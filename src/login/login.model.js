export async function login(userModel) {
    // userModel -> {email: "asd@asd.cxz", password: "sdfsdf"}
    // await fetch('...)

    //resp -> localstorasge.setItem('token', token)
}  

import { API_URL } from "../constants";
import { formElementToPayload } from "../utils";
import { initNotification, removeNotification } from "../notification/notification.view";
import { showPage } from "../navigation/navigation.view";
import { navigate } from "../navigation/navigation.controller";
import { NotificationSeverity, showNotification } from "../notification/notification.controller";
import { User } from "../models/user.model";

const successMessage = "Користувач успішно авторизований!";
const warningMessage = "Невірний e-mail або пароль!";
export let user; // my code

export async function processLogin(event) {
  event.preventDefault(event);
  const payLoad = formElementToPayload(event.target);
  console.log(payLoad);
  const logInStatus = await fetch(`${API_URL}/login`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(payLoad),
  });
  console.log(logInStatus);
  let result = await logInStatus.json();
  console.log(result);
  // * my code
  if (!logInStatus.ok) {
    showNotification(warningMessage,NotificationSeverity.WARNING)
  } else if (logInStatus.ok) {
    showNotification(successMessage,NotificationSeverity.SUCCESS)
    storeUserFromPayload(payLoad);
    navigate("main");
  }
}

function storeUserFromPayload(payLoad) {
  user = new User(payLoad.email);
}

