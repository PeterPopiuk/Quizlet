import { getUser } from "../login/login.controller";
import { showMainNavbar } from "../unauthorized-nav-bar/unauthorized-nav-bar.view";
import { initCreate } from "./create/create.controller";
import { initLogout } from "./logout/logout.controller";
import {drawUserName, initViewNavBar } from "./authorized-nav-bar.view"

export function initAuthorizedNavBar() {
  // showMainNavbar();
  initViewNavBar();  
  drawUserName(getUser());
  initLogout();
  initCreate();
}

