import { recentlyQuizletsLoad } from "./create.model";

// const createBtn = document.querySelector("#create");

export function initCreate() {
    initCreateListeners();
}

function initCreateListeners()  {
    const createBtn = document.querySelector("#create");
    createBtn.addEventListener("click",recentlyQuizletsLoad);
}