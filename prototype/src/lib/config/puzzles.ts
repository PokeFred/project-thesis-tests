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
    //     title: "Station freischalten",
    //     requirements: [],
    //     score: 1,
    //     data: {
    //         introduction: {
    //             text: "Begebe dich zum Alten Markt, um diese Station freizuschalten",
    //             informations: {
    //                 adress: "Hansastraße 3, 44137 Dortmund",
    //                 transit: ["400/453/460 (Dortmund Hbf S U)", "U41/U43/U44/U45/U47/U49 (Kampstraße)"],
    //                 coordinates: {
    //                     lan: 51.516807552719946,
    //                     lon: 7.46296542458445,
    //                     text: "N 51° 31.008' E 007° 27.774'"
    //                 }
    //             }
    //         },
    //         game: {
    //             coordinates: {
    //                 lan: 51.516807552719946,
    //                 lon: 7.46296542458445
    //             }
    //         },
    //         result: {
    //             text: "Neue Message ?"
    //         }
    //     }
    // },
    // {
    //     id: 11,
    //     type: "multiple-choice-puzzle",
    //     title: "Rätsel 1 (Multiple-Choice)",
    //     requirements: [], // TODO [10],
    //     score: 8,
    //     data: {
    //         introduction: {
    //             text: ["Was kennzeichnete den Markt in Dortmund im Mittelalter? Nur fünf von acht Antwortmöglichkeiten sind richtig - überlege genau!"]
    //         },
    //         game: {
    //             answers: [
    //                 { id: 0, text: "Es gab einen Brunnen am Markt.", isCorrect: true },
    //                 { id: 1, text: "Die Hauptpfarrkirche lag am Marktplatz.", isCorrect: true },
    //                 { id: 2, text: "Der Markt war das Zentrum der Stadt.", isCorrect: true },
    //                 { id: 3, text: "Hinrichtungen von Verurteilten fanden auf dem Markt statt.", isCorrect: false },
    //                 { id: 4, text: "Der Markt lag an einem wichtigen Handelsweg.", isCorrect: true },
    //                 { id: 5, text: "Zutritt hatten nur Angehörige des Adels.", isCorrect: false },
    //                 { id: 6, text: "Das Rathaus lag direkt am Marktplatz.", isCorrect: true },
    //                 { id: 7, text: "Eine zweite Stadtmauer umgab den Markt.", isCorrect: false }
    //             ]
    //         },
    //         result: {}
    //     }
    // },
    // {
    //     id: 12,
    //     type: "matching-game-puzzle",
    //     title: "Rätsel 2 (Matching-Game)",
    //     requirements: [], // TODO [10],
    //     score: 7,
    //     data: {
    //         introduction: {
    //             text: ["Ordne den Zünften das richtige Handwerk zu."]
    //         },
    //         game: {
    //             header: {
    //                 left: "Handwerk",
    //                 right: "Zünfte"
    //             },
    //             data: {
    //                 left: ["Metall-verarbeitung", "Getreide-verarbeitung", "Fleisch-verarbeitung", "Leder-verarbeitung", "Feinleder-verarbeitung", "Gemischt-warenhandel", "Handel mit Butter, Öl, Speck etc."],
    //                 right: ["Schmied", "Fleischer", "Bäcker", "Bader", "Tuchmacher", "Gerber", "Schuhmacher", "Krämer", "Fettkrämer", "Abdecker"],
    //                 pairs: [
    //                     { left: "Metall-verarbeitung", right: "Schmied" },
    //                     { left: "Getreide-verarbeitung", right: "Bäcker" },
    //                     { left: "Fleisch-verarbeitung", right: "Fleischer" },
    //                     { left: "Leder-verarbeitung", right: "Gerber" },
    //                     { left: "Feinleder-verarbeitung", right: "Schuhmacher" },
    //                     { left: "Gemischt-warenhandel", right: "Krämer" },
    //                     { left: "Handel mit Butter, Öl, Speck etc.", right: "Fettkrämer" }
    //                 ]
    //             }
    //         },
    //         result: {}
    //     }
    // },
    // {
    //     id: 13,
    //     type: "drag-drop-puzzle",
    //     title: "Rätsel 3 (Drag-Drop)",
    //     requirements: [], // TODO [10],
    //     score: 5,
    //     data: {
    //         introduction: {
    //             title: "Der heilige Reinoldus ist Stadtpatron Dortmunds und Namensgeber der Reinoldigilde",
    //             description: ["Statte ihn mit den richtigen Gegenständen aus. Aber Achtung: Nur fünf Gegenstände sind richtig! Tipp: Schau doch mal in die Reinoldi Kirche ob Du Reinoldus entdecken kannst. Bitte mache ein Foto von Reinoldus und löse das Rätsel außerhalb der Kirche, damit niemand gestört wird."]
    //         },
    //         game: {
    //             path: "/station_01/raetsel_02/game",
    //             caption: ""
    //         },
    //         result: {
    //             img: "/station_01/raetsel_02/game/Background.png",
    //             caption: ""
    //         }
    //     }
    // },
    // {
    //     id: 20,
    //     type: "gps-puzzle",
    //     title: "Station freischalten",
    //     requirements: [],
    //     score: 1,
    //     data: {
    //         introduction: {
    //             text: "Begebe dich zum ???, um diese Station freizuschalten",
    //             informations: {
    //                 adress: "Hansastraße 3, 44137 Dortmund",
    //                 transit: ["400/453/460 (Dortmund Hbf S U)", "U41/U43/U44/U45/U47/U49 (Kampstraße)"],
    //                 coordinates: {
    //                     lan: 51.516807552719946,
    //                     lon: 7.46296542458445,
    //                     text: "N 51° 31.008' E 007° 27.774'"
    //                 }
    //             }
    //         },
    //         game: {
    //             coordinates: {
    //                 lan: 51.516807552719946,
    //                 lon: 7.46296542458445
    //             }
    //         },
    //         result: {
    //             text: "Neue Message ?"
    //         }
    //     }
    // },
    // {
    //     id: 28,
    //     type: "drag-drop-puzzle",
    //     title: "Rätsel 8",
    //     requirements: [], // TODO [20],
    //     score: 2,
    //     data: {
    //         introduction: {
    //             title: "",
    //             description: []
    //         },
    //         game: {
    //             path: "/station_04/raetsel_01/game"
    //         },
    //         result: {}
    //     }
    // },
    // {
    //     id: 29,
    //     type: "text-select-puzzle",
    //     title: "Rätsel 9",
    //     requirements: [], // TODO [20],
    //     score: 2,
    //     data: {
    //         introduction: {
    //             text: ["Das Warenhaus Althoff war mit seinen 5000 m² Verkaufsfläche und etwa 500 Mitarbeitenden das größte Warenhaus außerhalb Berlins.", "Wenn Du mehr über die Innenausstattung und die im Kaufhaus angebotenen Waren erfahren möchtest, löse den folgenden Lückentext. Jeweils ein Begriff ist der richtige und muss in die freie Lücke eingesetzt werden."]
    //         },
    //         game: {},
    //         result: {}
    //     }
    // }
    // {
    //     id: 26,
    //     type: "multiple-choice-puzzle",
    //     title: "S03 R02 (Multiple-Choice)",
    //     requirements: [],
    //     score: 1,
    //     data: {
    //         introduction: {
    //             text: ["In welchem Jahr wurde die erste Rolltreppe im Kaufhaus Karstadt, ehemals Warenhaus Althoff, eröffnet?"]
    //         },
    //         game: {
    //             answers: [
    //                 { id: 0, text: "1952", isCorrect: true },
    //                 { id: 1, text: "1932", isCorrect: false },
    //                 { id: 2, text: "1972", isCorrect: false }
    //             ]
    //         },
    //         result: {}
    //     }
    // },
    {
        id: 10,
        type: "placeholder-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 11,
        type: "placeholder-puzzle",
        title: "Rätsel 01 (multiple-choice)",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 12,
        type: "placeholder-puzzle",
        title: "Rätsel 02 (matching-game)",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 13,
        type: "drag-drop-puzzle",
        title: "Rätsel 03 (drag-drop)",
        requirements: [],
        score: 0,
        data: {
            introduction: {
                title: "Der heilige Reinoldus ist Stadtpatron Dortmunds und Namensgeber der Reinoldigilde",
                description: ["Statte ihn mit den richtigen Gegenständen aus. Aber Achtung: Nur fünf Gegenstände sind richtig! Tipp: Schau doch mal in die Reinoldi Kirche ob Du Reinoldus entdecken kannst. Bitte mache ein Foto von Reinoldus und löse das Rätsel außerhalb der Kirche, damit niemand gestört wird."]
            },
            game: {
                path: "/station_01/raetsel_02/game",
                caption: ""
            },
            result: {
                img: "/station_01/raetsel_02/game/Background.png",
                caption: ""
            }
        }
    },
    {
        id: 20,
        type: "placeholder-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 21,
        type: "placeholder-puzzle",
        title: "Rätsel 01 (word-guessing-game)",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 30,
        type: "placeholder-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 31,
        type: "placeholder-puzzle",
        title: "Rätsel 01 (text-select)",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 32,
        type: "placeholder-puzzle",
        title: "Rätsel 02 (multiple-choice)",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 33,
        type: "error-spotting-puzzle",
        title: "Rätsel 03 (error-spotting)",
        requirements: [],
        score: 0,
        data: {
            introduction: {
                title: "",
                description: []
            },
            game: {
                path: "/station_03/raetsel_03/game",
                caption: ""
            },
            result: {
                img: "/station_03/raetsel_03/game/original.png",
                caption: ""
            }
        }
    },
    {
        id: 40,
        type: "placeholder-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 41,
        type: "drag-drop-puzzle",
        title: "Rätsel 01 (drag-drop)",
        requirements: [],
        score: 0,
        data: {
            introduction: {
                title: "",
                description: []
            },
            game: {
                path: "/station_04/raetsel_01/game",
                caption: ""
            },
            result: {
                img: "/station_04/raetsel_01/game/Background.png",
                caption: ""
            }
        }
    },
    {
        id: 42,
        type: "placeholder-puzzle",
        title: "Rätsel 02 (multiple-choice)",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 50,
        type: "placeholder-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 51,
        type: "drag-drop-puzzle",
        title: "Rätsel 01 (drag-drop)",
        requirements: [],
        score: 0,
        data: {
            introduction: {
                title: "",
                description: []
            },
            game: {
                path: "/station_05/raetsel_01/game",
                caption: ""
            },
            result: {
                img: "/station_05/raetsel_01/game/Background.png",
                caption: ""
            }
        }
    },
    {
        id: 52,
        type: "drag-drop-puzzle",
        title: "Rätsel 02 (drag-drop)",
        requirements: [],
        score: 0,
        data: {
            introduction: {
                title: "",
                description: []
            },
            game: {
                path: "/station_05/raetsel_02/game",
                caption: ""
            },
            result: {
                img: "/station_05/raetsel_02/game/Background.png",
                caption: ""
            }
        }
    },
    {
        id: 53,
        type: "placeholder-puzzle",
        title: "Rätsel 03 (word-guessing-game)",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 60,
        type: "placeholder-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 61,
        type: "placeholder-puzzle",
        title: "Rätsel 01 (word-guessing-game)",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 80,
        type: "placeholder-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 81,
        type: "placeholder-puzzle",
        title: "Rätsel 01 (multiple-choice)",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 90,
        type: "placeholder-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 91,
        type: "placeholder-puzzle",
        title: "Rätsel 01 (word-guessing-game)",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 92,
        type: "placeholder-puzzle",
        title: "Rätsel 02 (word-guessing-game)",
        requirements: [],
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    }
]

export default puzzles
export type { Puzzle }
