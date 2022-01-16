const mainPage = document.querySelector("#main-page");

export function renderQuizList(anyList) {
    let renderResult = '';
    anyList.forEach((anyItem) => {
        renderResult += `<div class="uk-card uk-card-default uk-card-hover uk-card-body">${anyItem.title}</div>`;
    }); 
    mainPage.innerHTML = renderResult;   
}
export function clearQuizList() {
    renderResult = '';
    mainPage.innerHTML = renderResult; 
}