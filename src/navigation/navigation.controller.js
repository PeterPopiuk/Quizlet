import { showPage } from "./navigation.view";
import { navigationConfig } from "./navigation.model";

export function navigate(page) {

  showPage(page);

  //    if (page == 'login')  { loginSubmit();}
  //    if (page == 'signup') { signinSubmit();}

  Object.entries(navigationConfig).forEach(([key, config]) => {
    if (page === key) {
      config.init();      
      config.navbar(); // my code
    } else {
      config.dispose();
    }
  });
}

export function initNavigation() {
    navigate ("login");
    // init login by login.controller
}