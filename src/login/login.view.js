const loginPage = document.querySelector("#login-page");
const loginTemplate = `
<form name="login" id="login-form">
<div class="uk-margin uk-flex uk-flex-center">
  <input class="uk-input uk-form-width-medium" name="email" type="email" placeholder="e-mail" value="abc@iu">
</div>

<div class="uk-margin uk-flex uk-flex-center">
  <input class="uk-input uk-form-width-medium" name="password" type="password" placeholder="password" pattern="[0-9A-Za-z]{6,}" title="Пароль повинен містити не менше 6-ти знаків" value="123456">
</div>

<div class="uk-margin uk-flex uk-flex-center">
  <button class="uk-button uk-button-primary uk-width-1-6" id="login-btn" type="submit">Login</button>
</div>
</form> `;

export function initView() {
    loginPage.innerHTML = loginTemplate;
}

export function disposeView() {
    loginPage.innerHTML = "";
}
