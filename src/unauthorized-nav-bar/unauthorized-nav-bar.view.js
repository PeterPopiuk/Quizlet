const loginNavBar = document.querySelector("#login-navbar");
const mainNavBar = document.querySelector("#main-navbar");
const loginBtn = document.querySelector("#login-btn");
const navBar = document.querySelector("#navbar");

// const anchors = {
//   login: document.querySelector("#loginItem"),
//   signup: document.querySelector("#registrationItem"),
// };

const unauthorizedNavBarTemplate = `
<nav id="login-navbar" class="uk-navbar-container uk-navbar" >
  <div class="uk-navbar-center">  
    <ul class="uk-navbar-nav">
      <li class="uk-active" id="loginItem"><a href="#">Вхід</a></li>
      <li id="registrationItem"><a href="#">Реєстрація</a></li>
    </ul>  
  </div>
</nav>`;

export function initViewNavBar() {
  navBar.innerHTML = unauthorizedNavBarTemplate;
}

export function disposeViewNavBar() {
  navBar.innerHTML = "";
}

export function showLoginNavbar() {
  mainNavBar.setAttribute("hidden", "");
  loginNavBar.removeAttribute("hidden");
}

export function showMainNavbar() {
  loginNavBar.setAttribute("hidden", "");
  mainNavBar.removeAttribute("hidden");
}

export function getAnchor(anchorKey) {
  const anchors = {
    login: document.querySelector("#loginItem"),
    signup: document.querySelector("#registrationItem"),
  };
  return anchors[anchorKey];
}

export function markAsActiveNavbarLink(anchorKey) {
  const anchors = {
    login: document.querySelector("#loginItem"),
    signup: document.querySelector("#registrationItem"),
  };
  Object.entries(anchors).forEach(([key, anchor]) => {
    if (key === anchorKey) {
      anchor.classList.add("uk-active");
    } else {
      anchor.classList.remove("uk-active");
    }
  });
}
