import { gameState } from "$lib/State.svelte";
import MatchingGame from "$components/Games/MatchingGame/MatchingGame.svelte";

export const quiz: MatchingGame = new MatchingGame(
    gameState.stationStates[3].quizStates[2],
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
    ],

    [
        "Es geht hier um einen Vergleich in Deutschland…",
        `Zum Vergleich: 
        Das Michigan Stadium in den USA ist das größte Stadion der USA und hat 107.601 Plätze, dort würde die Menschenmenge also hineinpassen.

        Eng stehend braucht eine Person etwa 0,5 m² Platz, 1.000 Menschen brauchen daher rund 500 m². Zur Erinnerung: Das Warenhaus Althoff bot 5000 m² Platz!`,
        "Es geht um einen zusammenfassenden Begriff.",
        "Die Tiere, um die es hier geht, wurden in der Fischhalle angeboten.",
        "Zwei der drei Materialien sind selten, bis sehr selten in der Erdkruste zu finden. Eines ist ein metamorphes Gestein, das aus Kalkstein entsteht und in klassischem Sinn nicht selten ist.",
        "Lies den zweiten Satz aufmerksam und überlege noch einmal, worauf sich der erste Satz am ehesten beziehen könnte.",
        "Welcher Name einer großen Kaufhauskette könnte Dir schon einmal in der Stadt begegnet sein?"
    ]
);