import { notificationState } from "./notification.model";
import {
  hideNotification,
  showNotification as showNotificationView,
} from "./notification.view";
export const NotificationSeverity = {
  SUCCESS: "success",
  WARNING: "warning",
  DANGER: "danger",
};

export function showNotification(
  message,
  notificationSeverity = NotificationSeverity.SUCCESS
) {
  showNotificationView(message, notificationSeverity);
  setTimeout(() => {
    hideNotification();
  }, 4000);
}

export function getLatestNotificationClass() {
  return notificationState.latestClass;
}

export function setLatestNotificationClass(notificationClass) {
  notificationState.latestClass = notificationClass;
}
