import { initNavigation } from "../../navigation/navigation.controller";

// const logoutBtn = document.querySelector("#logout");

export function initLogout() {
    const logoutBtn = document.querySelector("#logout");
    initLogoutListeners(logoutBtn);
}

function initLogoutListeners(logoutBtn) {
    // const logoutBtn = document.querySelector("#logout");
    
    logoutBtn.addEventListener("click",initNavigation);
} 