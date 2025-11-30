import MultipleChoice, { type Description } from "$components/Games/MultipleChoiceGame/MultipleChoice";

// TODO: die ganzen Quiz, Quizstate, Gamestate etc klassen refractoren
const descriptions: Description[][] = [
    [
        {
            tag: "p",
            text: `Der Brunnen war zentral für die Wasserversorgung – und ein beliebter
                Treffpunkt zum Austausch aller Art. Eine Tafel erinnert heute an den früheren Brunnen.
                Findest Du sie?`
        },
        {
            tag: "img",
            src: `/station_01/raetsel_01/image_01.jpg`,
            alt: "Foto: Sophie Ullrich",
            // caption: "Foto: Sophie Ullrich"
        }
    ],
    [
        {
            tag: "p",
            text: `Der erste Dortmunder Marktplatz befand sich am Vorgängerbau der
                   Reinoldikirche, nahe dem damaligen, ersten Rathaus. Das ist der heutige Platz von Leeds.
                   Nach dem großen Stadtbrand von 1232 wurde der Markt an seinen heutigen Standort
                   verlegt.`
        }
    ],
    [
        {
            tag: "p",
            text: `Der Marktplatz war das Herz der Stadt: Hier wurde gehandelt, verhandelt
                   und Recht gesprochen.`
        }
    ],
    [
        {
            tag: "p",
            text: `Der Richtplatz lag außerhalb der Stadt, östlich in Körne. Dort fanden die
                   Hinrichtungen statt. Am Markt befand sich jedoch der „Trissel“, eine besondere Form
                   des Prangers in Gestalt eines Korbes, in dem Verurteilte öffentlich zur Schau gestellt
                   wurden. Im Trissel vollzog man soziale oder „entehrende“ Strafen. Der Verlust von Ehre
                   und Ansehen bedeutete im Mittelalter den Ausschluss aus der Gemeinschaft.`
        }
    ],
    [
        {
            tag: "p",
            text: `Dortmund lag am Hellweg, einer bedeutenden mittelalterlichen
                   Fernstraße. Diese Lage machte die Stadt zu einem wichtigen Handels- und
                   Hansestandort.`
        }
    ],
    [
        {
            tag: "p",
            text: `Der Markt stand allen Stadtbewohner:innen offen. Hier wurde die
                   Versorgung mit Lebensmitteln gesichert.`
        }
    ],
    [
        {
            tag: "p",
            text: `Das Dortmunder Rathaus war eng mit dem Marktgeschehen verbunden
                   und lag unmittelbar am Platz.`
        }
    ],
    [
        {
            tag: "p",
            text: `Es gab keine zweite Stadtmauer. Die Befestigung umschloss die gesamte Stadt.
                   An den heutigen Wallanlagen lässt sich erkennen, welchen Umfang die Stadtmauer bereits um
                   1200 hatte.`
        }
    ]
] 

export const quiz: MultipleChoice = new MultipleChoice(
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
    ],
    descriptions
);