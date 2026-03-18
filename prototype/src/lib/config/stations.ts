import Puzzles from "./puzzles"
import Station01 from "./station_01.json"
import Station02 from "./station_02.json"
import Station03 from "./station_03.json"
import Station04 from "./station_04.json"
import Station05 from "./station_05.json"
import Station06 from "./station_06.json"
import Station07 from "./station_07.json"
import Station08 from "./station_08.json"
import Station09 from "./station_09.json"
import Station10 from "./station_10.json"

type _Station = {
    id: number,
    tag: string,
    stitle: string,
    title: string,
    chapters: string,
    puzzles: number[]
}

type StationChapter = {
    title: string,
    data: StationChapterContent[]
}

type StationChapterContent = any
/*
[
    {
        "title": "",
        "data": [],
        "audio": null
    },
    {
        "title": "",
        "data": [],
        "audio": null
    }
]

{ "type": "subtitle", "text": "" }
{ "type": "paragraph", "text": "" }
{ "type": "image", "src": "", "alt": "", "caption": "" }
*/

const StationMap: Record<string, any> = {
    "01": Station01,
    "02": Station02,
    "03": Station03,
    "04": Station04,
    "05": Station05,
    "06": Station06,
    "07": Station07,
    "08": Station08,
    "09": Station09,
    "10": Station10
}

function getChapters(id: string): StationChapter[] {
    return StationMap[id] as StationChapter[]
}

function calculateScore(...id: number[]): number {
    return Puzzles
        .filter((element: any): boolean => id.includes(element.id))
        .map((element: any): number => element.score)
        .reduce((pre: number, cur: number): number => pre += cur, 0)
}

const _stations: _Station[] = [
    {
        id: 1,
        tag: "Station 01",
        stitle: "Alter Markt",
        title: "Der mittelalterliche Markt, der Handel und das Handwerk in Dortmund",
        chapters: "01",
        puzzles: [10, 11, 12, 13]
    },
    {
        id: 2,
        tag: "Station 02",
        stitle: "Westenhellweg 1",
        title: "Vom Handelsweg zur Einkaufsstraße – der Hellweg und seine Geschäfte",
        chapters: "02",
        puzzles: [20, 21, 22, 23, 24]
    },
    {
        id: 3,
        tag: "Station 03",
        stitle: "Hansaplatz",
        title: "Einkaufen als Erlebnis: Die ersten Warenhäuser",
        chapters: "03",
        puzzles: [30, 31, 32, 33]
    },
    {
        id: 4,
        tag: "Station 04",
        stitle: "Reinoldistraße",
        title: "Einkaufen im Kolonialwarenladen",
        chapters: "04",
        puzzles: [40, 41, 42]
    },
    {
        id: 5,
        tag: "Station 05",
        stitle: "Hafen",
        title: "Waren auf dem Weg in die Stadt: Der Dortmunder Hafen",
        chapters: "05",
        puzzles: [50, 51, 52, 53]
    },
    {
        id: 6,
        tag: "Station 06",
        stitle: "Freiherr-vom-Stein-Platz",
        title: "Konsumgenossenschaften und Filialbetriebe",
        chapters: "06",
        puzzles: [60, 61]
    },
    {
        id: 7,
        tag: "Station 07",
        stitle: "Kampstraße",
        title: "Selbstbedienung und Supermärkte – eine neue Form des Einkaufens",
        chapters: "07",
        puzzles: [70, 71, 72]
    },
    {
        id: 8,
        tag: "Station 08",
        stitle: "Westenhellweg 2",
        title: "Zwischen Ausschluss und Wandel – Einkaufen in Dortmund im 20. Jahrhundert",
        chapters: "08",
        puzzles: [80, 81, 82, 83]
    },
    {
        id: 9,
        tag: "Station 09",
        stitle: "Thier-Galerie",
        title: "Von Einkaufszentren bis zum Online-Shopping - modernes Einkaufen im Wandel",
        chapters: "09",
        puzzles: [90, 91, 92, 93]
    },
    {
        id: 10,
        tag: "Station 10",
        stitle: "Heute: Dein Einkauf",
        title: "Nachdenken über den eigenen Einkauf",
        chapters: "10",
        puzzles: []
    }
]

type Station = {
    id: number,
    tag: string,
    stitle: string,
    title: string,
    score: number,
    chapters: StationChapter[],
    puzzles: number[]
}

const stations: Station[] = _stations.map((element: _Station): Station => {
    // https://placehold.co/600x400
    const chapters: StationChapter[] = getChapters(element.chapters)
    chapters.map((element: StationChapter): StationChapter => {
        // element.data.map((element: StationChapterContent): StationChapterContent => {
        //     if (element.type === "image") {
        //         element.src = (element.src.length > 0) ? element.src : "https://placehold.co/600x400"
        //     }

        //     return element
        // })

        return element
    })

    return {
        id: element.id,
        tag: element.tag,
        stitle: element.stitle,
        title: element.title,
        score: calculateScore(...element.puzzles),
        chapters: chapters,
        puzzles: element.puzzles
    }
})

export default stations
export type { Station }
