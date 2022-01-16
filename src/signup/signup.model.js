import { API_URL } from "../constants";
import { NotificationSeverity, showNotification } from "../notification/notification.controller";
import { notificationSignup, notificationSignupTrue } from "../notification/notification.model";
import { initNotification, removeNotification } from "../notification/notification.view";
import { formElementToPayload } from "../utils";

const successMessage = "Ви успішно зареєструвались!";
const warningMessage = "Користувач з таким e-mail вже існує!";


export async function processSignup (event) {
  event.preventDefault(event);
  const payLoad = formElementToPayload(event.target);
  console.log(payLoad);
  const signInStatus = await fetch(`${API_URL}/signup`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(payLoad),
  });
  console.log(signInStatus);
  // * my code  
  if (!signInStatus.ok) {    
    showNotification(warningMessage,NotificationSeverity.WARNING);
  } else if (signInStatus.ok) {    
    showNotification(successMessage,NotificationSeverity.SUCCESS);    
  }
  // my code*
}