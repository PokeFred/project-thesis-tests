import MatchingGame from "$components/Games/Cloze/MatchingGame.svelte";

export const quiz: MatchingGame = new MatchingGame(
    [
        [
            { answer: "London", correct: false },
            { answer: "Paris", correct: false },
            { answer: "Berlin", correct: true },
        ],
        [
            { answer: "10.000", correct: true },
            { answer: "100.000", correct: false },
            { answer: "1.000", correct: false },
        ],
        [
            { answer: "Autos", correct: false },
            { answer: "Edelsteinen", correct: false },
            { answer: "Schmuckstücken", correct: true },
        ],
        [
            { answer: "Aale", correct: true },
            { answer: "Schweine", correct: false },
            { answer: "Frösche", correct: false },
        ],
        [
            { answer: "Gold", correct: false },
            { answer: "Silber", correct: false },
            { answer: "Marmor", correct: true },
        ],
        [
            { answer: "Toiletten", correct: false },
            { answer: "Fahrstühle", correct: true },
            { answer: "Umkleiden", correct: false },
        ],
        [
            { answer: "Kardorf", correct: false },
            { answer: "Karstadt", correct: true },
            { answer: "Karwinkel", correct: false },
        ],
    ]
);