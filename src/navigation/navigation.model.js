import { initAuthorizedNavBar } from "../authorized-nav-bar/authorized-nav-bar.controller";
import { initCreate } from "../authorized-nav-bar/create/create.controller";
import { disposeLogin, initLogin } from "../login/login.controller";
import { disposeMain, initMain } from "../main/main.controller";
import { disposeSignup, initSignup } from "../signup/signup.controller";
import { initNavBar } from "../unauthorized-nav-bar/unauthorized-nav-bar.controller";

export const navigationConfig = {
  login: {
    init: initLogin,
    dispose: disposeLogin,    
    navbar: initNavBar, // my code
  },
  signup: {
    init: initSignup,
    dispose: disposeSignup,    
    navbar: initNavBar, // my code
  },

  main: {
    init: initMain,
    dispose: disposeMain,    
    navbar: initAuthorizedNavBar,
  },

  // create: {
  //   init: initCreate,
  //   dispose: disposeCreate,
  //   navbar: initNavBar,
  // }
};
