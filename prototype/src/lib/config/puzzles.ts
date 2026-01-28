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
    //     data: {
    //         introduction: {},
    //         game: {},
    //         result: {}
    //     }
    // },
    {
        id: 10,
        type: "gps-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 1,
        data: {
            introduction: {
                text: "Begebe dich zum alten Markt, erst wenn deine Position korrekt ist, werden die Rätsel freigeschaltet.",
                informations: {
                    adress: "Hansastraße 3, 44137 Dortmund",
                    transit: {
                        bus: {
                            station: "Dortmund HBF",
                            lines: ["400", "453", "460"]
                        },
                        subway: {
                            station: "Kampstraße",
                            lines: ["U41", "U43", "U44", "U45", "U47", "U49"]
                        }
                    },
                    coordinates: "N 51° 31.008' E 007° 27.774'"
                }
            },
            game: {
                coordinates: {
                    lan: 51.516807552719946,
                    lon: 7.46296542458445
                }
            },
            result: {}
        }
    },
    {   // TODO Cedric: informationen aus config laden. in das result geben ("aus config laden" ersetzen). https://docs.google.com/document/d/1hpNdUs_GQeKfB921Zp8SeXpOydpU91xv/edit
        id: 11,
        type: "multiple-choice-puzzle",
        title: "Quiz",
        requirements: [], // [10]
        score: 24,
        data: {
            introduction: {
                text: ["Was kennzeichnete den Markt in Dortmund im Mittelalter? Nur fünf von acht Antwortmöglichkeiten sind richtig - überlege genau!"]
            },
            game: {
                answers: [
                    { id: 0, text: "Es gab einen Brunnen am Markt.", isCorrect: true },
                    { id: 1, text: "Die Hauptpfarrkirche lag am Marktplatz.", isCorrect: true },
                    { id: 2, text: "Der Markt war das Zentrum der Stadt.", isCorrect: true },
                    { id: 3, text: "Hinrichtungen von Verurteilten fanden auf dem Markt statt.", isCorrect: false },
                    { id: 4, text: "Der Markt lag an einem wichtigen Handelsweg.", isCorrect: true },
                    { id: 5, text: "Zutritt hatten nur Angehörige des Adels.", isCorrect: false },
                    { id: 6, text: "Das Rathaus lag direkt am Marktplatz.", isCorrect: true },
                    { id: 7, text: "Eine zweite Stadtmauer umgab den Markt.", isCorrect: false }
                ]
            },
            result: {
                answers: [
                    { id: 0, text: "Es gab einen Brunnen am Markt.", description: [{ tag: "p", children: [{tag: "text", text: "Aus config laden." }] }], isCorrect: true },
                    { id: 1, text: "Die Hauptpfarrkirche lag am Marktplatz.", description: [{ tag: "p", children: [{tag: "text", text: "Aus config laden." }] }], isCorrect: true },
                    { id: 2, text: "Der Markt war das Zentrum der Stadt.", description: [{ tag: "p", children: [{tag: "text", text: "Aus config laden." }] }], isCorrect: true },
                    { id: 3, text: "Hinrichtungen von Verurteilten fanden auf dem Markt statt.", description: [{ tag: "p", children: [{tag: "text", text: "Aus config laden." }] }], isCorrect: false },
                    { id: 4, text: "Der Markt lag an einem wichtigen Handelsweg.", description: [{ tag: "p", children: [{tag: "text", text: "Aus config laden." }] }], isCorrect: true },
                    { id: 5, text: "Zutritt hatten nur Angehörige des Adels.", description: [{ tag: "p", children: [{tag: "text", text: "Aus config laden." }] }], isCorrect: false },
                    { id: 6, text: "Das Rathaus lag direkt am Marktplatz.", description: [{ tag: "p", children: [{tag: "text", text: "Aus config laden." }] }], isCorrect: true },
                    { id: 7, text: "Eine zweite Stadtmauer umgab den Markt.", description: [{ tag: "p", children: [{tag: "text", text: "Aus config laden." }] }], isCorrect: false }
                ]
            }
        }
    },
    {
        id: 12,
        type: "matching-game-puzzle",
        title: "Zuordnungsspiel",
        requirements: [], // [10]
        score: 21,
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
                    left: ["Metall-verarbeitung", "Getreide-verarbeitung", "Fleisch-verarbeitung", "Leder-verarbeitung", "Feinleder-verarbeitung", "Gemischt-warenhandel", "Handel mit Butter, Öl, Speck etc."],
                    right: ["Schmied", "Fleischer", "Bäcker", "Bader", "Tuchmacher", "Gerber", "Schuhmacher", "Krämer", "Fettkrämer", "Abdecker"],
                    pairs: [
                        { left: "Metall-verarbeitung", right: "Schmied" },
                        { left: "Getreide-verarbeitung", right: "Bäcker" },
                        { left: "Fleisch-verarbeitung", right: "Fleischer" },
                        { left: "Leder-verarbeitung", right: "Gerber" },
                        { left: "Feinleder-verarbeitung", right: "Schuhmacher" },
                        { left: "Gemischt-warenhandel", right: "Krämer" },
                        { left: "Handel mit Butter, Öl, Speck etc.", right: "Fettkrämer" }
                    ]
                }
            },
            result: {
                header: {
                    left: "Handwerk",
                    right: "Zünfte"
                },
                pairs: [
                    { left: "Metall-verarbeitung", right: "Schmied" },
                    { left: "Getreide-verarbeitung", right: "Bäcker" },
                    { left: "Fleisch-verarbeitung", right: "Fleischer" },
                    { left: "Leder-verarbeitung", right: "Gerber" },
                    { left: "Feinleder-verarbeitung", right: "Schuhmacher" },
                    { left: "Gemischt-warenhandel", right: "Krämer" },
                    { left: "Handel mit Butter, Öl, Speck etc.", right: "Fettkrämer" }
                ],
                informations: {
                    title: "Willst du wissen, was diese Berufe gemacht haben ?",
                    data: [
                        { type:"seperator" },
                        {
                            type: "question",
                            question: "Abdecker",
                            answer: [
                                { type: "paragraph", text: "Abdecker waren für die Beseitigung und Verwertung (abdecken=abhäuten) von Tierkadavern zuständig. Aus den verwertbaren Teilen entstanden Produkte wie Fette, Leim oder Seife. Das Gewerbe galt als „unehrlich“. Abdecker waren sozial ausgegrenzt und mussten meist außerhalb der Stadt leben." }
                            ]
                        },
                        { type:"seperator" },
                        {
                            type: "question",
                            question: "Bader",
                            answer: [
                                { type: "paragraph", text: "Bader waren - oft in Konkurrenz oder Zusammenarbeit mit den sogenannten Barbieren - bis ins 19. Jahrhundert für die Körperpflege der Bevölkerung zuständig. Sie betrieben Badestuben, die nicht nur Orte der Reinigung, sondern auch der Geselligkeit waren. Darüber hinaus behandelten Bader kleinere Wunden und alltägliche Beschwerden, zogen Zähne oder legten Schröpfköpfe an." }
                            ]
                        },
                        { type:"seperator" },
                        {
                            type: "question",
                            question: "Gerber",
                            answer: [
                                { type: "paragraph", text: "Gerber verarbeiteten Tierhäute zu Leder, das von anderen Handwerkern weiterverarbeitet wurde. Wegen der starken Gerüche und der benötigten Gerbmittel lagen Gerbereien meist am Stadtrand oder an Gewässern. Häufig entstanden sogenannte Gerbergassen, in denen sich mehrere Werkstätten konzentrierten." },
                                // TODO (Simon) richtiges Foto einfügen
                                { type: "image", src: "https://placehold.co/600x400", alt: "", caption: "(Bei Ausgrabungen 2005 wurden zwei Gerbergruben und zwei Brunnen entdeckt, in denen Tierhäute gereinigt wurden. Die Gerbergasse lag außerhalb der Stadtmauer (heute Wall). Foto: Sophie Ullrich“)" }
                            ]
                        },
                        { type:"seperator" }
                    ]
                }
            }
        }
    },
    {
        id: 13,
        type: "drag-drop-puzzle",
        title: "Puzzle",
        requirements: [], // [10]
        score: 15,
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
    // {
    //     id: 20,
    //     type: "gps-puzzle",
    //     title: "Station freischalten",
    //     requirements: [],
    //     score: 1,
    //     data: {
    //         introduction: {
    //             text: "Begebe dich zum ???, erst wenn deine Position korrekt ist, werden die Rätsel freigeschaltet.",
    //             informations: {
    //                 adress: "???",
    //                 transit: {
    //                     bus: {
    //                         station: "",
    //                         lines: []
    //                     },
    //                     subway: {
    //                         station: "",
    //                         lines: []
    //                     }
    //                 },
    //                 coordinates: ""
    //             }
    //         },
    //         game: {
    //             coordinates: {
    //                 lan: 0,
    //                 lon: 0
    //             }
    //         },
    //         result: {}
    //     }
    // },
    {
        id: 21,
        type: "word-guessing-puzzle",
        title: "Bilderrätsel 1",
        requirements: [], // [20]
        score: 3,
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
        type: "text-select-puzzle",
        title: "Lückentext",
        requirements: [], // [30]
        score: 21,
        data: {
            introduction: {
                text: ["Wenn Du mehr über die Innenausstattung und die im Kaufhaus angebotenen Waren erfahren möchtest, löse den folgenden Lückentext. Jeweils ein Begriff ist der richtige und muss in die freie Lücke eingesetzt werden."]
            },
            game: {
                data: []
            },
            result: {}
        }
    },
    {
        id: 32,
        type: "single-choice-puzzle",
        title: "Quiz",
        requirements: [], // [30]
        score: 3,
        data: {
            introduction: {
                text: ["In welchem Jahr wurde die erste Rolltreppe im Kaufhaus Karstadt, ehemals Warenhaus Althoff, eröffnet? "]
            },
            game: {
                answers: [
                    { id: 0, text: "1952", isCorrect: true },
                    { id: 1, text: "1932", isCorrect: false },
                    { id: 2, text: "1972", isCorrect: false }
                ]
            },
            result: {
                answers: [
                    { id: 0, text: "1952", isCorrect: true },
                    { id: 1, text: "1932", isCorrect: false },
                    { id: 2, text: "1972", isCorrect: false }
                ],
                text: ["Doch warum erst 1952? Nach dem Krieg fehlte es an Geld und Technik. Erst mit dem Wirtschaftsaufschwung ab den 1950 er Jahren konnte man sich modernen Komfort wie Rolltreppen leisten. Sie standen für Fortschritt und modernes Einkaufen."]
            }
        }
    },
    {
        id: 33,
        type: "error-spotting-puzzle",
        title: "Suchbild",
        requirements: [], // [30]
        score: 15,
        data: {
            introduction: {
                title: "",
                description: []
            },
            game: {
                path: "/station_03/raetsel_03/game"
            },
            result: {
                path: "/station_03/raetsel_03/game"
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
        title: "Wörter erraten",
        requirements: [], // [40]
        score: 9,
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
                caption: "",
                scoreDescription: "Wörtern"
            }
        }
    },
    {
        id: 42,
        type: "single-choice-puzzle",
        title: "Quiz",
        requirements: [], // [40]
        score: 3,
        data: {
            introduction: {
                text: ["Welche Lebensmittel gehörten zu den sogenannten Kolonialwaren? Finde das eine Produkt, was hier nicht stimmt!"]
            },
            game: {
                answers: [
                    { id: 0, text: "Tee", isCorrect: false },
                    { id: 1, text: "Kaffee", isCorrect: false },
                    { id: 2, text: "Tabak", isCorrect: false },
                    { id: 2, text: "Kartoffeln", isCorrect: true },
                    { id: 2, text: "Zucker", isCorrect: false }
                ]
            },
            result: {
                answers: [
                    { id: 0, text: "Tee", isCorrect: false },
                    { id: 1, text: "Kaffee", isCorrect: false },
                    { id: 2, text: "Tabak", isCorrect: false },
                    { id: 2, text: "Kartoffeln", isCorrect: true },
                    { id: 2, text: "Zucker", isCorrect: false }
                ]
            }
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
        title: "Zuordnungsspiel",
        requirements: [], // [50]
        score: 15,
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
                img: "/station_05/raetsel_01/result/Result.png",
                caption: ""
            }
        }
    },
    {
        id: 52,
        type: "drag-drop-puzzle",
        title: "Puzzle",
        requirements: [], // [50]
        score: 12,
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
        title: "Suchaufgabe",
        requirements: [], // [50]
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
        title: "Zuordnungsspiel",
        requirements: [], // [60]
        score: 0,
        data: {
            introduction: {},
            game: {},
            result: {}
        }
    },
    {
        id: 70,
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
        id: 71,
        type: "placeholder-puzzle",
        title: "Rätsel 01",
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
        title: "Quizfragen",
        requirements: [], // [80]
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
        title: "Suchaufgabe",
        requirements: [], // [90]
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
        title: "Suchaufgabe",
        requirements: [], // [90]
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
