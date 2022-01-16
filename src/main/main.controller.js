import { loadQuizList, quizList } from "./main.model";
import { clearQuizList, renderQuizList } from "./main.view";

export async function initMain() {
    await loadQuizList();
    renderQuizList(quizList);
}

export function disposeMain() {
    clearQuizList();
}