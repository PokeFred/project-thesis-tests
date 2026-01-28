import Puzzles from "./puzzles"

function calculateScore(...id: number[]): number {
    return Puzzles
        .filter((element: any): boolean => id.includes(element.id))
        .map((element: any): number => element.score)
        .reduce((pre: number, cur: number): number => pre += cur, 0)
}

type Station = {
    id: number,
    tag: string,
    stitle: string,
    title: string,
    score: number,
    chapters: any[],
    puzzles: number[]
}

const stations: Station[] = [
    // {
    //     id: 0,
    //     tag: "",
    //     stitle: "",
    //     title: "",
    //     score: calculateScore(...),
    //     chapters: [],
    //     puzzles: []
    // },
    // TODO Cedcic: Es fehlen noch die bilder
    // {
    // chapters: [{ title: "", content: [{ type: ""}]}]
    // }
    {
        id: 1,
        tag: "Station 01",
        stitle: "Alter Markt",
        title: "Der mittelalterliche Markt, Handel und Handwerk in Dortmund",
        score: calculateScore(10, 11, 12, 13),
        chapters: [],
        puzzles: [10, 11, 12, 13]
    },
    {
        id: 2,
        tag: "Station 02",
        stitle: "Westenhellweg",
        title: "",
        score: calculateScore(20, 21),
        chapters: [],
        puzzles: [20, 21]
    },
    {
        id: 3,
        tag: "Station 03",
        stitle: "Hansaplatz",
        title: "",
        score: calculateScore(30, 31, 32, 33),
        chapters: [],
        puzzles: [30, 31, 32, 33]
    },
    {
        id: 4,
        tag: "Station 04",
        stitle: "Reinoldistraße",
        title: "",
        score: calculateScore(40, 41, 42),
        chapters: [],
        puzzles: [40, 41, 42]
    },
    {
        id: 5,
        tag: "Station 05",
        stitle: "Hafen",
        title: "",
        score: calculateScore(50, 51, 52, 53),
        chapters: [],
        puzzles: [50, 51, 52, 53]
    },
    {
        id: 6,
        tag: "Station 06",
        stitle: "Freiherr-vom-Stein-Platz",
        title: "",
        score: 0,
        chapters: [],
        puzzles: [60, 61]
    },
    {
        id: 7,
        tag: "Station 07",
        stitle: "Kampstraße",
        title: "",
        score: 0,
        chapters: [],
        puzzles: [70, 71]
    },
    {
        id: 8,
        tag: "Station 08",
        stitle: "Westenhellweg",
        title: "",
        score: 0,
        chapters: [],
        puzzles: [80, 81]
    },
    {
        id: 9,
        tag: "Station 09",
        stitle: "Thier-Galerie",
        title: "",
        score: 0,
        chapters: [],
        puzzles: [90, 91, 92]
    },
    {
        id: 10,
        tag: "Station 10",
        stitle: "Heute: Dein Einkauf",
        title: "",
        score: 0,
        chapters: [],
        puzzles: []
    }
    // {
    //     id: 2,
    //     tag: "Station 02",
    //     stitle: "Westen- und Ostenhellweg",
    //     title: "Der Westen- und Ostenhellweg",
    //     score: 5,
    //     chapters: [
    //             {
    //                 title: "Kapitel 1: Der Hellweg - vom Handelsweg zur Einkaufsmeile",
    //                 content: [
    //                     { type: "paragraph", content: "Wie Du jetzt weißt, war der Hellweg schon im Mittelalter eine der wichtigsten Straßen für Dortmund. Ab dem späten 19. Jahrhundert wurde der Hellweg Schritt für Schritt modernisiert." },
    //                     { type: "paragraph", content: "Viele Fachwerkhäuser dienten zunächst nur als Wohnraum; später entstanden in den unteren Etagen Ladenlokale mit Schaufenstern, während die oberen Etagen Wohnraum blieben. 1878 entstand der erste asphaltierte Bürgersteig Dortmunds. Immer mehr Fachgeschäfte und Warenhäuser siedelten sich an. Besonders im Westenhellweg entwickelte sich die Straße durch neue Passagen und Cafés zu einer modernen Geschäftsstraße mit lebendigem Flanierleben." },
    //                     { type: "paragraph", content: "Im 20. Jahrhundert wandelte sich der Hellweg endgültig zur Einkaufs- und Flanierstraße - nun als Westen- und Ostenhellweg bezeichnet. Der Einzelhandel wurde immer spezialisierter: Lebensmittel, Eisenwaren, Tabak, Lederwaren, Schmuck, Porzellan und vieles mehr erhielten eigene Häuser. Die Straße wurde zur beliebtesten Einkaufsmeile Dortmunds, blieb aber eng: Fußgänger:innen mussten sich den Weg mit Autos und Straßenbahnen teilen." },
    //                     { type: "paragraph", content: "Bereits um 1912 strömten an Sonntagen zehntausende Menschen auf den Westenhellweg. Sie flanierten dort mit eleganten Equipagen - das sind stilvolle Kutschen oder Fuhrwerke - und bevölkerten die Straße mit dicht gepackten Einkaufstaschen, was den Hellweg zur lebhaften Einkaufsstraße machte." },
    //                     { type: "paragraph", content: "Durch den zunehmenden Verkehr, insbesondere durch die Straßenbahnen, wurde die Situation für Fußgänger:innen zunehmend schwieriger. Erst mit der Umgestaltung zur Fußgängerzone nach 1945 bekam der Hellweg sein heutiges Gesicht. Die Straße konnte so ihre Rolle als moderne Einkaufsmeile mit Wohlfühl-Atmosphäre festigen. Die allgemeinen" },
    //                     { type: "paragraph", content: "Entwicklungen des Einzelhandels führten im Laufe der letzten Jahrzehnte zu einer stärkeren Dominanz von Filialketten und Warenhauskonzernen, die dem Hellweg ein einheitlicheres Erscheinungsbild gaben." },
    //                     { type: "paragraph", content: "Der Hellweg hat sich im Laufe der Zeit vom mittelalterlichen Handelsweg über die turbulente Zeit des frühen 20. Jahrhunderts mit seinem regen Flair und vielfältigen Einzelhandel zu einer modernen Einkaufsstraße entwickelt, die auch heute noch ein beliebter Treffpunkt und das Herz Dortmunds ist." },
    //                     { type: "image", src: "/t/S01C01P01.png", alt: "", caption: "Postkarte von 1905: Westenhellweg, Poststempel vom 19.03.1907 (Stadtarchiv Dortmund)." },
    //                     { type: "image", src: "/t/S01C01P02.png", alt: "", caption: "Postkarte von 1907: Westenhellweg (Stadtarchiv Dortmund)." },
    //                     { type: "image", src: "/t/S01C01P03.png", alt: "", caption: "Postkarte: Westenhellweg und Brückstraße (Sammlung Wolfang Kienast)." },
    //                     { type: "image", src: "/t/S01C01P04.png", alt: "", caption: "Postkarte: Westen- und Ostenhellweg und Brückstraße (Stadtarchiv Dortmund)." },
    //                     { type: "image", src: "/t/S01C01P05.png", alt: "", caption: "Fotografie, vermutlich um 1915: Westenhellweg (Stadtarchiv Dortmund)." },
    //                     { type: "image", src: "/t/S01C01P06.png", alt: "", caption: "Postkarte, vermutlich 1903: Ostenhellweg, (Stadtarchiv Dortmund)." }
    //                 ]
    //             },
    //             {
    //                 title: "Kapitel 2: Einzelhandel auf dem Westenhellweg - schon seit über 100 Jahren!",
    //                 content: [
    //                     { type: "subtitle", content: "Tewes: Tradition seit 1824" },
    //                     { type: "paragraph", content: "Es war das Jahr 1824, als Goldschmied Carl Wilhelm Tewes in Dortmund sein Geschäft eröffnete. Laut Handelskammer ist es heute das älteste Familienunternehmen der Stadt. Damals lebte sogar noch Johann Wolfgang von Goethe. Wer weiß, vielleicht hätte er sich hier eine Taschenuhr ausgesucht." },
    //                     { type: "paragraph", content: "Bei der Gründung von Tewes zählte Dortmund nur etwa 6.000 Einwohner:innen, es war also ein überschaubares Städtchen. Mit der Industrialisierung und dem Abbau der Kohle kam der Reichtum. Bald wurde Tewes zur ersten Adresse des Dortmunder Großbürgertums und schaffte es, viertgrößtes Geschäft im ganzen Deutschen Kaiserreich (1871-1918) zu werden." },
    //                     { type: "paragraph", content: "1899 besuchte Kaiser Wilhelm II. Dortmund. Zu Ehren des Gastes stifteten die Dortmunder ein neues Ratssilber, darunter Carl Tewes, der zweikunstvoll gearbeitete Silberpokale, sogenannte Buckelbecher, beitrug. Auch zum 150., zum 175. und 200. Stadtjubiläum stiftete die Familie für die Stadt, zuletzt einen Silberleuchter durch Rudolf Tewes, Goldschmied, Gemmologe und Ururur-Enkel des Gründers, der das Geschäft in sechster Generation führt. Im Zweiten Weltkrieg wurde das Geschäft durch Bomben zerstört. Carl Georg Tewes wagte den Neuanfang am heutigen Standort, Westenhellweg 6. Später modernisierte sein Enkel Rudolf Tewes das Geschäft, verband alte Handwerkskunst mit neuen Ideen und machte Tewes zu einem der Top 100 Juwelier-Geschäfte Deutschlands." }
    //                 ]
    //             }
    //         ],
    //     puzzles: [26, 27, 28, 29]
    // }
]

export default stations
export type { Station }
