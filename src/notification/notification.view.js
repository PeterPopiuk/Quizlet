import { getLatestNotificationClass, NotificationSeverity, setLatestNotificationClass } from "./notification.controller";
import { notificationState } from "./notification.model";

export const notificationBox = document.querySelector("#notification-box");

export function showNotification(message, notificationSeverity) {
  const notificationClass =
    getNotificationClassBySeverity(notificationSeverity);
  notificationBox.removeAttribute("hidden", "");
  notificationBox.classList.add(notificationClass);
  notificationBox.innerHTML = message;  
  setLatestNotificationClass(notificationClass);
}

export function hideNotification() {
  notificationBox.setAttribute("hidden", "");  
  notificationBox.innerHTML = "";
  notificationBox.classList.remove(getLatestNotificationClass());
  setLatestNotificationClass("");
}

function getNotificationClassBySeverity(notificationSeverity) {
  switch (notificationSeverity) {
    case NotificationSeverity.SUCCESS:
      return "uk-alert-success";
    case NotificationSeverity.WARNING:
      return "uk-alert-warning";
    case NotificationSeverity.DANGER:
      return "uk-alert-danger";
  }
}
