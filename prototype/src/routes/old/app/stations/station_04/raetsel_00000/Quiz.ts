import { gameState } from "$lib/State.svelte";
import MultipleChoice from "$components/MultipleChoiceGame/MultipleChoice";

// TODO: die ganzen Quiz, Quizstate, Gamestate etc klassen refractoren
export const quiz: MultipleChoice = new MultipleChoice(
    gameState.stationStates[3].quizStates[4],
    [
        { 
            answer: "Es gab einen Brunnen am Markt.",
            correct: true
        },
        {
            answer: "Die Hauptpfarrkirche lag am Marktplatz.",
            correct: true
        },
        {
            answer: "Der Markt war das Zentrum der Stadt.",
            correct: true
        },
        {
            answer: "Hinrichtungen von Verurteilten fanden auf dem Markt statt.",
            correct: false
        },
        {
            answer: "Der Markt lag an einem wichtigen Handelsweg.",
            correct: true
        },
        {
            answer: "Zutritt hatten nur Angehörige des Adels.",
            correct: false
        },
        {
            answer: "Das Rathaus lag direkt am Marktplatz.",
            correct: true
        },
        {
            answer: "Eine zweite Stadtmauer umgab den Markt.",
            correct: false
        }
    ]
);