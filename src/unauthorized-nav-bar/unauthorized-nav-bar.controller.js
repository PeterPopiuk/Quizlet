import { navBar } from "../nav-bar/nav-bar.view";
import { navigate } from "../navigation/navigation.controller";
import { getAnchor, initViewNavBar, markAsActiveNavbarLink, markLoginBtn, showLoginNavbar} from "./unauthorized-nav-bar.view";


export function initNavBar() {
  // showLoginNavbar();
  initViewNavBar();
  
  getAnchor("login").addEventListener("click", (event) => {
    event.preventDefault(event);
    navigate("login");   
    markAsActiveNavbarLink("login");    
  });

  getAnchor("signup").addEventListener("click", (event) => {
    event.preventDefault(event);
    navigate("signup");    
    markAsActiveNavbarLink("signup");    
  });
}

