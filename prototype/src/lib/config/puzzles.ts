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
        id: 12,
        type: "double-select-puzzle",
        title: "Rätsel 2",
        requirements: [], // ["station_01_puzzle_00"],
        score: 2,
        data: {
            introduction: {
                text: ["Ordne den Zünften das richtige Handwerk zu. Aber Achtung: es gibt nur sieben richtige Paare! Es wurden drei Zünfte dazu gemischt. Schaffst Du es, die richtigen Paare zu finden?", "Zünfte: Schmied, Fleischer, Bäcker, Bader, Tuchmacher, Gerber, Schuhmacher, Krämer, Fettkrämer, Abdecker", "Handwerk: Metallverarbeitung, Getreideverarbeitung, Fleischverarbeitung, Lederverarbeitung, Feinlederverarbeitung, Gemischtwarenhandel, Handel mit Butter, Öl, Speck etc."]
            },
            game: {
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
        id: 20,
        type: "gps-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 0,
        data: {}
    }
]

export default puzzles
export type { Puzzle }
