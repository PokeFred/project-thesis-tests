type Puzzle = {
    id: number,
    type: string,
    title: string,
    requirements: number[],
    score: number,
    data: any
}

const puzzles: Puzzle[] = [
    // {
    //     id: 0,
    //     type: "",
    //     title: "",
    //     requirements: [],
    //     score: 0,
    //     data: {}
    // },
    // {
    //     id: 10,
    //     type: "gps-puzzle",
    //     title: "",
    //     requirements: [],
    //     score: 0,
    //     data: {}
    // },
    {
        id: 10,
        type: "gps-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 1,
        data: {
            introduction: {
                text: "Begebe dich zum Alten Markt, um diese Station freizuschalten",
                informations: {
                    adress: "Hansastraße 3, 44137 Dortmund",
                    transit: ["400/453/460 (Dortmund Hbf S U)", "U41/U43/U44/U45/U47/U49 (Kampstraße)"],
                    coordinates: {
                        lan: 51.516807552719946,
                        lon: 7.46296542458445,
                        text: "N 51° 31.008' E 007° 27.774'"
                    }
                }
            },
            game: {
                coordinates: {
                    lan: 51.516807552719946,
                    lon: 7.46296542458445
                }
            },
            result: {
                text: "Neue Message ?"
            }
        }
    },
    {
        id: 11,
        type: "multiple-choice-puzzle",
        title: "Rätsel 1",
        requirements: [10],
        score: 8,
        data: {
            introduction: {
                text: ["Was kennzeichnete den Markt in Dortmund im Mittelalter? Nur fünf von acht Antwortmöglichkeiten sind richtig - überlege genau!"]
            },
            game: {
                answers: [
                    { text: "Es gab einen Brunnen am Markt.", isCorrect: true },
                    { text: "Die Hauptpfarrkirche lag am Marktplatz.", isCorrect: true },
                    { text: "Der Markt war das Zentrum der Stadt.", isCorrect: true },
                    { text: "Hinrichtungen von Verurteilten fanden auf dem Markt statt.", isCorrect: false },
                    { text: "Der Markt lag an einem wichtigen Handelsweg.", isCorrect: true },
                    { text: "Zutritt hatten nur Angehörige des Adels.", isCorrect: false },
                    { text: "Das Rathaus lag direkt am Marktplatz.", isCorrect: true },
                    { text: "Eine zweite Stadtmauer umgab den Markt.", isCorrect: false }
                ]
            },
            result: {}
        }
    },
    {
        id: 12,
        type: "matching-game-puzzle",
        title: "Rätsel 2",
        requirements: [10],
        score: 7,
        data: {
            introduction: {
                text: ["Ordne den Zünften das richtige Handwerk zu."]
            },
            game: {
                header: {
                    left: "Handwerk",
                    right: "Zünfte"
                },
                data: {
                    left: ["Metallverarbeitung", "Getreideverarbeitung", "Fleischverarbeitung", "Lederverarbeitung", "Feinlederverarbeitung", "Gemischtwarenhandel", "Handel mit Butter, Öl, Speck etc."],
                    right: ["Schmied", "Fleischer", "Bäcker", "Bader", "Tuchmacher", "Gerber", "Schuhmacher", "Krämer", "Fettkrämer", "Abdecker"],
                    pairs: [
                        { left: "Metallverarbeitung", right: "Schmied" },
                        { left: "Getreideverarbeitung", right: "Bäcker" },
                        { left: "Fleischverarbeitung", right: "Fleischer" },
                        { left: "Lederverarbeitung", right: "Gerber" },
                        { left: "Feinlederverarbeitung", right: "Schuhmacher" },
                        { left: "Gemischtwarenhandel", right: "Krämer" },
                        { left: "Handel mit Butter, Öl, Speck etc.", right: "Fettkrämer" }
                    ]
                }
            },
            result: {}
        }
    },
    {
        id: 13,
        type: "drag-drop-puzzle",
        title: "Rätsel 3",
        requirements: [10],
        score: 5,
        data: {
            introduction: {
                title: "Der heilige Reinholds ist Stadtpatron Dortmunds und Namensgeber der Reinoldigilde",
                description: ["Statte ihn mit den richtigen Gegenständen aus. Aber Achtung: Nur fünf Gegenstände sind richtig! Tipp: Schau doch mal in die Reinoldi Kirche ob Du Reinholds entdecken kannst. Wichtig: Bitte mache ein Foto von Reiholds und löse das Rätsel außerhalb der Kirche, damit niemand gestört wird."]
            },
            game: {
                path: "/station_01/raetsel_02/game"
            },
            result: {}
        }
    },
    {
        id: 18,
        type: "drag-drop-puzzle",
        title: "Rätsel 8",
        requirements: [10],
        score: 2,
        data: {
            introduction: {
                title: "",
                description: []
            },
            game: {
                path: "/station_04/raetsel_00/game"
            },
            result: {}
        }
    },
    {
        id: 19,
        type: "text-select-puzzle",
        title: "Rätsel 9",
        requirements: [10],
        score: 2,
        data: {
            introduction: {
                text: ["Das Warenhaus Althoff war mit seinen 5000 m² Verkaufsfläche und etwa 500 Mitarbeitenden das größte Warenhaus außerhalb Berlins.", "Wenn Du mehr über die Innenausstattung und die im Kaufhaus angebotenen Waren erfahren möchtest, löse den folgenden Lückentext. Jeweils ein Begriff ist der richtige und muss in die freie Lücke eingesetzt werden."]
            },
            game: {},
            result: {}
        }
    },
    {
        id: 20,
        type: "gps-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 1,
        data: {
            introduction: {
                text: "Begebe dich zum ???, um diese Station freizuschalten",
                informations: {
                    adress: "Hansastraße 3, 44137 Dortmund",
                    transit: ["400/453/460 (Dortmund Hbf S U)", "U41/U43/U44/U45/U47/U49 (Kampstraße)"],
                    coordinates: {
                        lan: 51.516807552719946,
                        lon: 7.46296542458445,
                        text: "N 51° 31.008' E 007° 27.774'"
                    }
                }
            },
            game: {
                coordinates: {
                    lan: 51.516807552719946,
                    lon: 7.46296542458445
                }
            },
            result: {
                text: "Neue Message ?"
            }
        }
    }
]

export default puzzles
export type { Puzzle }
