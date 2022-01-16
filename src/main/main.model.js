import { API_URL } from "../constants";

export let quizList = [];

export async function loadQuizList() {
    const response = await fetch(`${API_URL}/recently-quizlets`);
    quizList = await response.json();
    console.log(quizList);
}

