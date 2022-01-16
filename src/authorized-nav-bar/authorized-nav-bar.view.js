// export const userNameElement = document.querySelector("#userName");

const navBar = document.querySelector("#navbar");

export function drawUserName(user) {
    const userNameElement = document.querySelector("#userName");
    userNameElement.innerText = `Користувач ${user.email}`;
}

const authorizedNavBarTemplate = `
<nav id="main-navbar" class="uk-navbar-container uk-navbar" >
<div class="uk-navbar-right">
  <ul class="uk-navbar-nav">
    <li ><a id="userName" href="#">User</a></li>
    <li class="uk-active" id="create"><a href="#">Create</a></li>            
    <li id="logout"><a href="#">Logout</a></li>
  </ul>
</div>
</nav>
</div>
`;

export function initViewNavBar() {
    navBar.innerHTML = authorizedNavBarTemplate;
}

export function disposeViewNavBar() {
    navBar.innerHTML = "";
}