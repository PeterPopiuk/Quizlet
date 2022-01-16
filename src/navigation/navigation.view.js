const loginPage = document.querySelector("#login-page");
const signupPage = document.querySelector("#signup-page")
const mainPage = document.querySelector("#main-page");

const navigation = {
    "login" : {
        page : loginPage,
        reason : "login"
    },
    "signup" : {
        page : signupPage,
        reason : "signup"
    },
    "main" : {
        page : mainPage
    },
    // "create" : {
    //     page : createPage
    // }
};

export function showPage(page) {
    hideOtherPages ();
    navigation[page].page.removeAttribute("hidden");    
}

function hideOtherPages () {
    Object.values(navigation).forEach((config)=>{
        config.page.setAttribute("hidden","")
    })
}
