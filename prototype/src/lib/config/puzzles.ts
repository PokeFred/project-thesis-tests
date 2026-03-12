type Puzzle = {
    id: number,
    type: string,
    title: string,
    requirements: number[],
    score: number,
    data: any
}

const puzzles: Puzzle[] = [
    // 10: S01 E00
    // TODO (Cedric) Ort ???
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
                    adress: "Am Trissel 18-20, 44137 Dortmund",
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
                    coordinates: "51.51392304391651, 7.465440457499872"
                }
            },
            game: {
                coordinates: {
                    lat: 51.51392304391651,
                    lon: 7.465440457499872
                }
            },
            result: {}
        }
    },
    // 11: S01 E01
    {
        id: 11,
        type: "multiple-choice-puzzle",
        title: "Quiz",
        requirements: [10],
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
                    { id: 0, text: "Es gab einen Brunnen am Markt.", description: [{ tag: "p", children: [{tag: "text", text: "Der Brunnen war zentral für die Wasserversorgung – und ein beliebter Treffpunkt zum Austausch aller Art. Eine Tafel erinnert heute an den früheren Brunnen. Findest Du sie?" }]}, { tag: "img", src: "/station_01/raetsel_01/image_01.webp", alt: "Foto: Sophie Ullrich", caption: { src: "Sophie Ullrich"}}], isCorrect: true },
                    { id: 1, text: "Die Hauptpfarrkirche lag am Marktplatz.", description: [{ tag: "p", children: [{tag: "text", text: "Der erste Dortmunder Marktplatz befand sich am Vorgängerbau der Reinoldikirche, nahe dem damaligen, ersten Rathaus. Das ist der heutige Platz von Leeds. Nach dem großen Stadtbrand von 1232 wurde der Markt an seinen heutigen Standort verlegt." }] }], isCorrect: true },
                    { id: 2, text: "Der Markt war das Zentrum der Stadt.", description: [{ tag: "p", children: [{tag: "text", text: "Der Marktplatz war das Herz der Stadt: Hier wurde gehandelt, verhandelt und Recht gesprochen." }] }], isCorrect: true },
                    { id: 3, text: "Hinrichtungen von Verurteilten fanden auf dem Markt statt.", description: [{ tag: "p", children: [{tag: "text", text: " Der Richtplatz lag außerhalb der Stadt, östlich in Körne. Dort fanden die Hinrichtungen statt. Am Markt befand sich jedoch der „Trissel“, eine besondere Form des Prangers in Gestalt eines Korbes, in dem Verurteilte öffentlich zur Schau gestellt wurden. Im Trissel vollzog man soziale oder „entehrende“ Strafen." }] }], isCorrect: false },
                    { id: 4, text: "Der Markt lag an einem wichtigen Handelsweg.", description: [{ tag: "p", children: [{tag: "text", text: "Dortmund lag am Hellweg, einer bedeutenden mittelalterlichen Fernstraße. Diese Lage machte die Stadt zu einem wichtigen Handels- und Hansestandort." }] }], isCorrect: true },
                    { id: 5, text: "Zutritt hatten nur Angehörige des Adels.", description: [{ tag: "p", children: [{tag: "text", text: "Der Markt stand allen Stadtbewohner:innen offen. Hier wurde die Versorgung mit Lebensmitteln gesichert. " }] }], isCorrect: false },
                    { id: 6, text: "Das Rathaus lag direkt am Marktplatz.", description: [{ tag: "p", children: [{tag: "text", text: "Das Dortmunder Rathaus war eng mit dem Marktgeschehen verbunden und lag unmittelbar am Platz." }] }], isCorrect: true },
                    { id: 7, text: "Eine zweite Stadtmauer umgab den Markt.", description: [{ tag: "p", children: [{tag: "text", text: "Es gab keine zweite Stadtmauer. Die Befestigung umschloss die gesamte Stadt. An den heutigen Wallanlagen lässt sich erkennen, welchen Umfang die Stadtmauer bereits um 1200 hatte." }] }], isCorrect: false }
                ]
            }
        }
    },
    // 12: S01 E02
    // TODO !!!
    {
        id: 12,
        type: "matching-game-puzzle",
        title: "Zuordnungsspiel",
        requirements: [10],
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
                                { type: "image", src: "/station_01/raetsel_02/image_01.webp", alt: "Bei Ausgrabungen 2005 wurden zwei Gerbergruben und zwei Brunnen entdeckt, in denen Tierhäute gereinigt wurden. Die Gerbergasse lag außerhalb der Stadtmauer (heute Wall). Foto: Sophie Ullrich“)", caption: { caption: "Bei Ausgrabungen 2005 wurden zwei Gerbergruben und zwei Brunnen entdeckt, in denen Tierhäute gereinigt wurden. Die Gerbergasse lag außerhalb der Stadtmauer (heute Wall).", src: "Foto: Sophie Ullrich" }}
                            ]
                        },
                        { type:"seperator" }
                    ]
                }
            }
        }
    },
    // 13: S01 E03
    {
        id: 13,
        type: "drag-drop-puzzle",
        title: "Puzzle",
        requirements: [10],
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
                img: "/station_01/raetsel_02/game/Background.webp",
                caption: ""
            }
        }
    },
    // 20: S02 E00
    // TODO (Cedric) Ort ???
    {
        id: 20,
        type: "gps-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 1,
        data: {
            introduction: {
                text: "Begebe dich zum Westenhellweg, erst wenn deine Position korrekt ist, werden die Rätsel freigeschaltet.",
                informations: {
                    adress: "Ecke Brückstraße",
                    transit: {
                        bus: {
                            station: "",
                            lines: []
                        },
                        subway: {
                            station: "",
                            lines: []
                        }
                    },
                    coordinates: "51.51442205062871, 7.4665695269931405"
                }
            },
            game: {
                coordinates: {
                    lat: 51.51442205062871,
                    lon: 7.4665695269931405
                }
            },
            result: {}
        }
    },
    // 21: S02 E01 (word-guessing)
    {
        id: 21,
        type: "word-guessing-puzzle",
        title: "Bilderrätsel 1",
        requirements: [20],
        score: 3,
        data: {
            introduction: {
                data: [
                    { tag: "title", text: "Finde vier alteingesessene Geschäfte auf dem Westenhellweg, die seit über 100 Jahren bestehen und in Familientradition geführt werden. Löse dafür das Bilderrätsel. " },
                    { tag: "title", text: "Wenn du nicht weiterkommst, orientiere dich an den Geschäften auf der Straße." }
                ]
            },
            game: {
                questions: [
                    {
                        hints: [
                            { tag: "img", src: "/station_02/raetsel_01/game/image_00.webp", alt: "Tee" },
                            {
                                tag: "text",
                                text: {
                                    crossed: "e",
                                }
                            },
                            { tag: "text", text: { normal: "+" } },  
                            { tag: "img", src: "/station_02/raetsel_01/game/image_01.webp", alt: "Western" },
                            { tag: "text", text: { crossed: "tern" } },
                        ],
                        solutions: ["Tewes"]
                    }
                ]
            },
            result: {
                questions: [
                    {
                        hints: [
                            {
                                tag: "img",
                                src: "/station_02/raetsel_01/game/image_00.webp",
                                alt: "Tee",
                            },
                            {
                                tag: "text",
                                text: {
                                    crossed: "e",
                                }
                            },
                            {
                                tag: "text",
                                text: {
                                    normal: "+"
                                }
                            },  
                            {
                                tag: "img",
                                src: "/station_02/raetsel_01/game/image_01.webp",
                                alt: "Western",
                            },
                            {
                                tag: "text",
                                text: {
                                    crossed: "tern"
                                }
                            },  
                        ],
                        solution: "Tewes",
                        solutionText: "Lösung: Tee (-e) + Western (-tern) = Tewes"
                    }
                ],
                top: [],
                bottom: [
                    {
                        tag: "h2",
                        children: [{tag: "text", text: "Tewes: Tradition seit 1824"}]
                    },
                    {
                        tag: "p",
                        children: [
                            {tag: "text", text: "Es war das Jahr 1824, als Goldschmied Carl Wilhelm Tewes in Dortmund sein Geschäft eröffnete. Laut Handelskammer ist es heute das älteste Familienunternehmen der Stadt. Damals lebte sogar noch Johann Wolfgang von Goethe. Wer weiß, vielleicht hätte er sich hier eine Taschenuhr ausgesucht."},
                        ]
                    },
                    {
                        tag: "p",
                        children: [
                            {tag: "text", text: "Bei der Gründung von Tewes zählte Dortmund nur etwa 6.000 Einwohner*innen und war  damit ein überschaubares Städtchen. Mit der Industrialisierung und dem Aufschwung durch den Kohleabbau wuchs Dortmund rasch. Auch das Geschäft Tewes profitierte davon und entwickelte sich zu einer der ersten Adressen des Dortmunder Großbürgertums. Im Kaiserreich (1871–1918) war Tewes eines der vier größten Juweliergeschäfte Deutschlands."},
                        ]
                    },
                    {
                        tag: "p",
                        children: [
                            {tag: "text", text: "1899 besuchte Kaiser Wilhelm II. die Stadt. Zu diesem Anlass stifteten Dortmunder Bürger*innen ein neues Ratssilber – darunter auch die Familie Tewes, die zwei kunstvoll gearbeitete Silberpokale beisteuerte. Auch zum 150., zum 175. und 200. Stadtjubiläum stiftete die Familie für die Stadt, zuletzt einen Silberleuchter durch Rudolf Tewes, Goldschmied, Gemmologe und UrururEnkel des Gründers."},
                        ]
                    },
                    {
                        tag: "p",
                        children: [
                            {tag: "text", text: "Im Zweiten Weltkrieg wurde das Geschäft zerstört. Der Wiederaufbau gelang am heutigen Standort Westenhellweg 6. Bis heute verbindet Tewes traditionelle Goldschmiedekunst mit zeitgemäßem Design und wird in sechster Generation, mittlerweile von Rudolf Tewes, geführt."},
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_01/content/image_00.webp",
                        alt: "Der erste Standort des Juweliers Tewes lag am Westenhellweg 12, zwischen Reinoldikirche und dem damaligen Gasthaus „Zum alten Ritter“, im Gebäude mit dem Türmchen rechts neben der Kirche (Stadtarchiv Dortmund)",
                        caption: {
                            caption: "Der erste Standort des Juweliers Tewes lag am Westenhellweg 12, zwischen Reinoldikirche und dem damaligen Gasthaus „Zum alten Ritter“, im Gebäude mit dem Türmchen rechts neben der Kirche",
                            src: "Stadtarchiv Dortmund"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_01/content/image_01.webp",
                        alt: "Postkarte: Zweiter Standort des Juweliers Tewes am Ostenhellweg 16, Provenienz: Rudolf Tewes.",
                        caption: {
                            caption: "Postkarte: Zweiter Standort des Juweliers Tewes am Ostenhellweg 16, Provenienz: Rudolf Tewes.",
                            src: "Rudolf Tewes"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_01/content/image_02.webp",
                        alt: "Der erste Standort des Juweliers Tewes lag am Westenhellweg 12, zwischen Reinoldikirche und dem damaligen Gasthaus „Zum alten Ritter“, im Gebäude mit dem Türmchen rechts neben der Kirche",
                        caption: {
                            caption: "Postkarte von ca. 1911: Links im Vordergrund das Gebäude des Juweliers Tewes am zweiten Standort, Ostenhellweg 16.",
                            src: "Stadtarchiv Dortmund"
                        }
                    },
                    {
                        tag: "p",
                        children: [
                            {tag: "text", text: ""},
                        ]
                    },
                ]
            }
        }
    },
    {
        id: 22,
        type: "word-guessing-puzzle",
        title: "Bilderrätsel 2",
        requirements: [20],
        score: 3,
        data: {
            introduction: {
                data: [
                    { tag: "title", text: "Finde vier alteingesessene Geschäfte auf dem Westenhellweg, die seit über 100 Jahren bestehen und in Familientradition geführt werden. Löse dafür das Bilderrätsel. " },
                    { tag: "title", text: "Wenn du nicht weiterkommst, orientiere dich an den Geschäften auf der Straße." }
                ]
            },
            game: {
                questions: [
                    {
                        hints: [
                            { tag: "img", src: "/station_02/raetsel_02/game/image_00.webp", alt: "Freundschaft" },
                            { tag: "text", text: { crossed: "schaft" } },
                            { tag: "text", text: { normal: "+" } },  
                            { tag: "text", text: { normal: "&" } },
                            { tag: "text", text: { normal: "+" } },
                            { tag: "img", src: "/station_02/raetsel_02/game/image_01.webp", alt: "Bauer" }
                        ],
                        solutions: ["Freund & Bauer", "Freund und Bauer"]
                    }
                ]
            },
            result: {
                 questions: [
                    {
                        hints: [
                            {
                                tag: "img",
                                src: "/station_02/raetsel_02/game/image_00.webp",
                                alt: "Freundschaft",
                            },
                            {
                                tag: "text",
                                text: {
                                    crossed: "schaft"
                                }
                            },
                            {
                                tag: "text",
                                text: {
                                    normal: "+"
                                }
                            },  
                            {
                                tag: "text",
                                text: {
                                    normal: "&"
                                }
                            },
                            {
                                tag: "text",
                                text: {
                                    normal: "+"
                                }
                            },
                            {
                                tag: "img",
                                src: "/station_02/raetsel_02/game/image_01.webp",
                                alt: "Bauer",
                            }
                        ],
                        solution: "Freund & Bauer",
                        solutionText: "Lösung: Freundschaft (-schaft) + & + Bauer = Freund & Bauer"
                    }
                ],
                top: [],
                bottom: [
                    {
                        tag: "h2",
                        children: [{tag: "text", text: "Freund & Bauer – vom Blumenladen zum Juwelier:"}]
                    },
                    {
                        tag: "p",
                        children: [{tag: "text", text: "Was 1904 als kleiner Blumenladen begann, entwickelte sich über vier Generationen hinweg zu einem Juweliergeschäft. Am Westenhellweg 8 eröffneten August Bauer und Hugo Freund das Geschäft. Nach vier Jahren trennten sich ihre Wege: Hugo Freund zog nach Mannheim, der Name jedoch blieb in Dortmund."}]
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_02/content/image_00.webp",
                        alt: "Anzeige in der Zeitung, Geschäftseröffnung von Freund & Bauer, Provenienz: Freund & Bauer.",
                        caption: {
                            caption: "Anzeige in der Zeitung, Geschäftseröffnung von Freund & Bauer",
                            src: "Freund & Bauer."
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_02/content/image_01.webp",
                        alt: "Der Westenhellweg mit dem Blumengeschäft Freund & Bauer, Aufnahme von 1909, Provenienz: Freund & Bauer.",
                        caption: {
                            caption: "Der Westenhellweg mit dem Blumengeschäft Freund & Bauer, Aufnahme von 1909.",
                            src: "Freund & Bauer."
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_02/content/image_02.webp",
                        alt: "Zur Eröffnung des Geschäfts im Westenhellweg 8 wurden duftende Postkarten versandt, Postkarte vermutlich von 1908, Provenienz: Freund & Bauer.",
                        caption: {
                            caption: "Zur Eröffnung des Geschäfts im Westenhellweg 8 wurden duftende Postkarten versandt, Postkarte vermutlich von 1908.",
                            src: "Freund & Bauer"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_02/content/image_03.webp",
                        alt: "Werbebüchlein für die Kundschaft von Freund & Bauer, 1926, Provenienz: Freund & Bauer.",
                        caption: {
                            caption: "Werbebüchlein für die Kundschaft von Freund & Bauer, 1926.",
                            src: "Freund & Bauer"
                        }
                    },
                    {
                        tag: "p",
                        children: [{tag: "text", text: "1931 wurde das Geschäft abgerissen und nach einem Entwurf des Architekten Arthur Groos neu gebaut. Bauherr war August Bauer. 1943 musste das Geschäft kriegsbedingt schließen und an seiner Stelle eröffnete das Schuhhaus Sondermann. Nach dem Krieg baute Jula Bauer das Unternehmen wieder auf."}]
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_02/content/image_04.webp",
                        alt: "Neubau des Geschäfts auf dem Westenhellweg 8, 1931, Provenienz: Freund & Bauer.",
                        caption: {
                            caption: "Neubau des Geschäfts auf dem Westenhellweg 8, 1931.",
                            src: "Freund & Bauer"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_02/content/image_05.webp",
                        alt: "Aus der Erinnerung gezeichnete Ladeneinrichtung des Geschäfts von 1931, gezeichnet von Jula Bauer, Provenienz: Freund & Bauer",
                        caption: {
                            caption: "Aus der Erinnerung gezeichnete Ladeneinrichtung des Geschäfts von 1931, gezeichnet von Jula Bauer.",
                            src: "Freund & Bauer"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_02/content/image_06.webp",
                        alt: "Packecke des Geschäfts, aus der Erinnerung gezeichnet von Jula Bauer, Provenienz: Freund & Bauer.",
                        caption: {
                            caption: "Packecke des Geschäfts, aus der Erinnerung gezeichnet von Jula Bauer.",
                            src: "Freund & Bauer"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_02/content/image_07.webp",
                        alt: "Aufnahme aus dem Jahr 1952: Vom Reinoldikirchturm aufgenommen: das neue Haus Falcke, dann Tewes und der Anbau Freund & Bauer, die Kriegsschäden sind noch nicht alle beseitigt, Provenienz: Freund & Bauer.",
                        caption: {
                            caption: "Aufnahme aus dem Jahr 1952: Vom Reinoldikirchturm aufgenommen: das neue Haus Falcke, dann Tewes und der Anbau Freund & Bauer, die Kriegsschäden sind noch nicht alle beseitigt.",
                            src: "Freund & Bauer"
                        }
                    },
                    {
                        tag: "p",
                        children: [{tag: "text", text: "Zwischen 1950 und 1980 wuchs das Geschäft Schritt für Schritt: Die Verkaufsfläche wurde vergrößert und Walter Bauer stieg in die Firma ein. Das Sortiment erweiterte sich um Töpfe, Vasen, Schalen und Kunstgewerbe und ab 1966 sogar um eine eigene Brautetage mit Brautmode. Mit der Umwandlung des Westenhellwegs in eine Fußgängerzone verloren die Blumen an Bedeutung und ab 1980 konzentrierte man sich auf Kunstgewerbe und Schmuck. Seit 1988 ist Freund & Bauer ausschließlich Juwelier."}]
                    },
                    {
                        tag: "p",
                        children: [{tag: "text", text: "Kirsten Mitsalis-Bauer, Tochter von Walter Bauer, leitet das Geschäft heute in vierter Generation und stand sogar einmal als Verlobungsring-Verkäuferin für einen Spielfilm vor der Kamera."}]
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_02/content/image_08.webp",
                        alt: "Geschäftsansicht von Freund & Bauer mit der Braut Etage ab 1966, Provenienz: Freund & Bauer.",
                        caption: {
                            caption: "Geschäftsansicht von Freund & Bauer mit der Braut Etage ab 1966.",
                            src: "Freund & Bauer"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_02/content/image_09.webp",
                        alt: "Präsentation von Brautmode bei Freund & Bauer, 1997, Provenienz: Freund & Bauer",
                        caption: {
                            caption: "Präsentation von Brautmode bei Freund & Bauer, 1997.",
                            src: "Freund & Bauer"
                        }
                    },
                ]
            },
        }
    },
    {
        id: 23,
        type: "word-guessing-puzzle",
        title: "Bilderrätsel 3",
        requirements: [20],
        score: 3,
        data: {
            introduction: {
                data: [
                    { tag: "title", text: "Finde vier alteingesessene Geschäfte auf dem Westenhellweg, die seit über 100 Jahren bestehen und in Familientradition geführt werden. Löse dafür das Bilderrätsel. " },
                    { tag: "title", text: "Wenn du nicht weiterkommst, orientiere dich an den Geschäften auf der Straße." }
                ]
            },
            game: {
                questions: [
                    {
                        hints: [
                            { tag: "img", src: "/station_02/raetsel_03/game/image_00.webp", alt: "Betten" },
                            { tag: "text", text: { normal: "+" } },  
                            { tag: "text", text: { normal: "en" } },  
                            { tag: "text", text: { normal: "+" } },  
                            { tag: "img", src: "/station_02/raetsel_03/game/image_01.webp", alt: "Hut" },
                            { tag: "text", text: { normal: "+" } },  
                            { tag: "text", text: { normal: "t" } },  
                        ],
                        solutions: ["Betten Hutt"]
                    }
                ]
            },
            result: {
                questions: [
                    {
                        hints: [
                            {
                                tag: "img",
                                src: "/station_02/raetsel_03/game/image_00.webp",
                                alt: "Betten",
                            },
                            {
                                tag: "text",
                                text: {
                                    normal: "+"
                                }
                            },  
                            { 
                                tag: "text", 
                                text: { 
                                    normal: "en" 
                                } 
                            },  
                            {
                                tag: "text",
                                text: {
                                    normal: "+"
                                }
                            },  
                            {
                                tag: "img",
                                src: "/station_02/raetsel_03/game/image_01.webp",
                                alt: "Hut",
                            },
                            {
                                tag: "text",
                                text: {
                                    normal: "+"
                                }
                            },
                            {
                                tag: "text",
                                text: {
                                    normal: "t"
                                }
                            },  
                        ],
                        solution: "Betten Hutt",
                        solutionText: "Betten + Hut (t) = Betten Hutt"
                    }
                ],
                top: [],
                bottom: [
                        {
                        tag: "h2",
                        children: [{tag: "text", text: "Betten Hutt – ein Geschäft mit einer bewegenden Geschichte"}]
                    },
                    {
                        tag: "p",
                        children: [{tag: "text", text: "Betten Hutt wurde 1869 vom jüdischen Kaufmann Jakob Baum gegründet und gehört zu den ältesten Geschäften am Hellweg. Zur Gründungszeit umfasste das Unternehmen eine Matratzenpolsterei und eine Bettfedernfabrik. Die Familie Baum lebte, wie damals üblich, über den Geschäftsräumen und prägte das Haus über mehrere Generationen."}]
                    },
                    {
                        tag: "p",
                        children: [{tag: "text", text: "Im frühen 20. Jahrhundert übernahm Jakobs Sohn Louis Baum das Geschäft. Mit der Machtübernahme der Nationalsozialisten verschärfte sich die Situation für jüdische Unternehmer*innen dramatisch. 1934 entschloss sich die Familie Baum zur Flucht in die USA. In dieser Situation übernahm Waldemar Hutt, der die Familie persönlich kannte, das Geschäft einschließlich der Mitarbeitenden. Beide Familien vereinbarten, dass das Unternehmen im Sinne der Familie Baum weitergeführt werden sollte. Trotz der Emigration blieb der Kontakt bestehen, das Verhältnis war freundschaftlich."}]
                    },
                    {
                        tag: "p",
                        children: [{tag: "text", text: "Im Zweiten Weltkrieg wurde das Gebäude bei einem Bombenangriff im Mai 1943 vollständig zerstört. Ab 1948 begann Waldemar Hutt gemeinsam mit seinem Sohn Hans mit dem Wiederaufbau. Über mehr als ein Jahrzehnt entstand schrittweise das heutige Haus: 1961 schließlich mit fünf Etagen und der bis heute prägenden roten Leuchtreklame am Westenhellweg."}]
                    },
                    {
                        tag: "p",
                        children: [{tag: "text", text: "Nach dem Krieg wurde offiziell bestätigt, dass die Übergabe des Geschäfts ordnungsgemäß erfolgt war. Deshalb durfte das Unternehmen weiterhin das Gründungsjahr 1869 führen. Heute leitet Heiko Hutt, Enkel von Waldemar Hutt, das Geschäft am Westenhellweg 107 erfolgreich in dritter Generation."}]
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_03/content/image_00.webp",
                        alt: "Betten Hutt auf dem Westenhellweg, Aufnahme des Bildes vermutlich nach 1952 (Stadtarchiv Dortmund).",
                        caption: {
                            caption: "Betten Hutt auf dem Westenhellweg, Aufnahme des Bildes vermutlich nach 1952",
                            src: "Stadtarchiv Dortmund"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_03/content/image_01.webp",
                        alt: "Werbung für die Firma Betten Hutt, Stadtarchiv Dortmund.",
                        caption: {
                            caption: "Werbung für die Firma Betten Hutt.",
                            src: "Stadtarchiv Dortmund"
                        }
                    },
                ]
            }, 
        }
    },
    {
        id: 24,
        type: "word-guessing-puzzle",
        title: "Bilderrätsel 4",
        requirements: [20],
        score: 3,
        data: {
            introduction: {
                data: [
                    { tag: "title", text: "Finde vier alteingesessene Geschäfte auf dem Westenhellweg, die seit über 100 Jahren bestehen und in Familientradition geführt werden. Löse dafür das Bilderrätsel. " },
                    { tag: "title", text: "Wenn du nicht weiterkommst, orientiere dich an den Geschäften auf der Straße." }
                ]
            },
            game: {
                questions: [
                    {
                        hints: [
                            { tag: "img", src: "/station_02/raetsel_04/game/image_00.webp", alt: "Rüschen" },
                            { tag: "text", text: { crossed: "sel", normal: " + chen" } },  
                            { tag: "text", text: { normal: "+" } },  
                            { tag: "img", src: "/station_02/raetsel_04/game/image_01.webp", alt: "Gebäck" },
                            { tag: "text", text: { crossed: "Ge", normal: " + ä=e" } },  
                        ],
                        solutions: ["Rüschenbeck"]
                    }
                ]
            },
            result: {
                questions: [
                    {
                        hints: [
                            {
                                tag: "img",
                                src: "/station_02/raetsel_04/game/image_00.webp",
                                alt: "Rüschen",
                            },
                            { 
                                tag: "text", 
                                text: { 
                                    crossed: "sel", 
                                    normal: " + chen" 
                                } 
                            },  
                            {
                                tag: "text",
                                text: {
                                    normal: "+"
                                }
                            },  
                            {
                                tag: "img",
                                src: "/station_02/raetsel_04/game/image_01.webp",
                                alt: "Gebäck",
                            },
                            {
                                tag: "text",
                                text: {
                                    crossed: "Ge",
                                    normal: " + ä=e"
                                }
                            },  
                        ],
                        solution: "Rüschenbeck",
                        solutionText: "Rüschen + (-Ge)b(ä=e)ck = Rüschenbeck"
                    }
                ],
                top: [],
                bottom: [
                    {
                        tag: "h2",
                        children: [{tag: "text", text: "Rüschenbeck: Goldschmiedekunst und Uhrmacherhandwerk vom Feinsten"}]
                    },
                    {
                        tag: "p",
                        children: [{tag: "text", text: "Juwelier Rüschenbeck wurde 1904 von Friedrich Wilhelm Rüschenbeck unter dem Namen „Zur Goldecke“ gegründet. Doch die Ladenfläche von 24 qm reichte nicht aus für das große Warenangebot. An der Reinoldistraße fand sich schließlich ein Laden mit größerer Verkaufsfläche. Hier konnten auch eigene Werkstätten untergebracht werden. In dem Geschäft arbeiteten fünf Uhrmacher und drei Goldschmiede."}]
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_04/content/image_00.webp",
                        alt: "Eröffnung des Schmuckwarengeschäfts samt Uhrmacher- und Goldschmiedewerkstatt an der Reinoldistraße 1904 (Sammlung Rüschenbeck)",
                        caption: {
                            caption: "Eröffnung des Schmuckwarengeschäfts samt Uhrmacher- und Goldschmiedewerkstatt an der Reinoldistraße 1904",
                            src: "Sammlung Rüschenbeck"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_04/content/image_01.webp",
                        alt: "Lebhaftes Treiben auf dem Westenhellweg, 1924 (Sammlung Rüschenbeck)",
                        caption: {
                            caption: "Lebhaftes Treiben auf dem Westenhellweg, 1924",
                            src: "Sammlung Rüschenbeck"
                        }
                    },
                    {
                        tag: "p",
                        children: [{tag: "text", text: "Im Zweiten Weltkrieg wurde das Geschäft in der Reinoldistraße zerstört. Ebenso ein Haus am Westenhellweg 45. Dieses hatte der neue Geschäftsinhaber, der Sohn Wilhelm Joseph Theodor Rüschenbeck, gekauft, um dort das Stammhaus des Geschäfts einzurichten."}]
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_04/content/image_02.webp",
                        alt: "Das zerstörte Geschäft Rüschenbeck in der Reinoldistraße 1943 (Sammlung Rüschenbeck).",
                        caption: {
                            caption: "Das zerstörte Geschäft Rüschenbeck in der Reinoldistraße 1943",
                            src: "Sammlung Rüschenbeck"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_04/content/image_03.webp",
                        alt: "Zerstörung des Westenhellwegs und des zukünftigen Stammhauses Westenhellweg Nr. 45 im Jahr 1943 (Sammlung Rüschenbeck).",
                        caption: {
                            caption: "Zerstörung des Westenhellwegs und des zukünftigen Stammhauses Westenhellweg Nr. 45 im Jahr 1943",
                            src: "Sammlung Rüschenbeck"
                        }
                    },
                    {
                        tag: "p",
                        children: [{tag: "text", text: "Doch erst 1949 konnte das Stammhaus am Westenhellweg 45 offiziell neu eröffnet werden. Es hatte ein eigenes Schmuckatelier und die damals größte Uhrenwerkstatt Westfalens. Heute gehört Rüschenbeck zu den größten Juwelieren Europas, wurde mehrmals ausgezeichnet und eröffnete zahlreiche Filialen an mehreren Standorten."}]
                    },
                    {
                        tag: "img",
                        src: "/station_02/raetsel_04/content/image_04.webp",
                        alt: "Offizielle Neueröffnung des Schmuckwarengeschäfts Rüschenbeck am Hellweg 45 (Sammlung Rüschenbeck).",
                        caption: {
                            caption: "Offizielle Neueröffnung des Schmuckwarengeschäfts Rüschenbeck am Hellweg 45",
                            src: "Sammlung Rüschenbeck"
                        }
                    },
                ]
            },
        }
    },
    // 30: S03 E00
    // TODO (Cedric) Ort ???
    {
        id: 30,
        type: "gps-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 1,
        data: {
            introduction: {
                text: "Begebe dich zum Hansaplatz, erst wenn deine Position korrekt ist, werden die Rätsel freigeschaltet.",
                informations: {
                    adress: "Hansaplatz",
                    transit: {
                        bus: {
                            station: "",
                            lines: []
                        },
                        subway: {
                            station: "",
                            lines: []
                        }
                    },
                    coordinates: "51.5134351005712, 7.464574873617459"
                }
            },
            game: {
                coordinates: {
                    lat: 51.5134351005712,
                    lon: 7.464574873617459
                }
            },
            result: {}
        }
    },
    {
        id: 31,
        type: "text-select-puzzle",
        title: "Lückentext",
        requirements: [30],
        score: 21,
        data: {
            introduction: {
                text: ["Wenn du mehr über die Innenausstattung und die im Kaufhaus angebotenen Waren erfahren möchtest, löse den folgenden Lückentext. Jeweils ein Begriff ist der richtige und muss in die freie Lücke eingesetzt werden."]
            },
            game: {
                content: [
                    { tag: "h2", children: [{ tag: "text", text: "Das Warenhaus Althoff - Ein Konsumtempel in Dortmund:"}] },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "text",
                                text: `Im Jahr 1904 eröffnete am Westenhellweg das von Theodor Althoff gegründete Warenhaus. Die Architektur war inspiriert vom berühmten Wertheim-Warenhaus in `
                            },
                            {
                                tag: "Select",
                                options: [
                                    { answer: "London", correct: false },
                                    { answer: "Paris", correct: false },
                                    { answer: "Berlin", correct: true },
                                ]
                            },
                            {
                                tag: "text",
                                text: `und wurde von Otto Engler entworfen. Mit einer Verkaufsfläche von 5000 m² und etwa 500 Mitarbeitenden war es das damals größte deutsche Warenhaus außerhalb Berlins. Fast`
                            },
                            {
                                tag: "Select",
                                options: [
                                    { answer: "10.000", correct: true },
                                    { answer: "100.000", correct: false },
                                    { answer: "1.000", correct: false },
                                ]
                            },
                            {
                                tag: "text",
                                text: `Menschen strömten am Eröffnungstag in das Warenhaus. Schon bald folgte ein Erweiterungsbau am Hansaplatz.`
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_03/raetsel_01/image_00.webp",
                        alt: "Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
                        caption: {
                            caption: "Warenhaus Althoff an der Hansastraße, Ecke Westenhellweg",
                            src: "Stadtarchiv Dortmund"
                        }
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "text",
                                text: `Neben Luxuswaren, wie teuren `
                            },
                            {
                                tag: "Select",
                                options: [
                                    { answer: "Autos", correct: false },
                                    { answer: "Edelsteinen", correct: false },
                                    { answer: "Schmuckstücken", correct: true },
                                ]
                            },
                            {
                                tag: "text",
                                text: `und einer großen Auswahl an Teppichen wurden auch Produkte des täglichen Bedarfs verkauft – sehr zum Ärger der Einzelhändler, die sich gegen die neuen Warenhäuser zusammenschlossen.`
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_03/raetsel_01/image_01.webp",
                        alt: "Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
                        caption: {
                            caption: "Teppichlager im Warenhaus Althoff",
                            src: "Stadtarchiv Dortmund"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_03/raetsel_01/image_02.webp",
                        alt: "Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
                        caption: {
                            caption: "Teppichlager im Warenhaus Althoff",
                            src: "Stadtarchiv Dortmund"
                        }
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "text",
                                text: `Eine Besonderheit war die Lebensmittelabteilung, die als erste ihrer Art in einem deutschen Warenhaus galt. Hier wurden neben Grundnahrungsmitteln, frischem Obst, teurem Champagner und Weinen, als Delikatesse geltende Hummer in Dosen und sogar lebende Tiere wie junge Tauben, Gänse und`
                            },
                            {
                                tag: "Select",
                                options: [
                                    { answer: "Aale", correct: true },
                                    { answer: "Schweine", correct: false },
                                    { answer: "Frösche", correct: false },
                                ]
                            },
                            {
                                tag: "text",
                                text: `verkauft.`
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_03/raetsel_01/image_03.webp",
                        alt: "Lebensmittelabteilung im Warenhaus Althoff (Sammlung Klaus Winter).",
                        caption: {
                            caption: "Lebensmittelabteilung im Warenhaus Althoff",
                            src: "Sammlung Klaus Winter"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_03/raetsel_01/image_04.webp",
                        alt: "Wein und Likörabteilung Warenhaus Althoff (Sammlung Klaus Winter).",
                        caption: {
                            caption: "Wein und Likörabteilung Warenhaus Althoff",
                            src: "Sammlung Klaus Winter"
                        }
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "text",
                                text: `Die Innenausstattung des Warenhauses war ebenso beeindruckend wie das Warenangebot: Wände aus`
                            },
                            {
                                tag: "Select",
                                options: [
                                    { answer: "Gold", correct: false },
                                    { answer: "Silber", correct: false },
                                    { answer: "Marmor", correct: true },
                                ]
                            },
                            {
                                tag: "text",
                                text: `, kunstvolle Verglasungen und elegante Leuchter aus Bronze sorgten für eine luxuriöse Atmosphäre. Im Modell-Salon „für die Dame“ konnten die neuesten Modetrends bewundert werden, während der sogenannte Erfrischungsraum mit einem neun Meter langen Buffet, einem Brunnen und Tischen aus Marmor sowie Lederstühlen, die Gäste zum Verweilen einlud.`
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_03/raetsel_01/image_05.webp",
                        alt: "Erfrischungsraum im Warenhaus Althoff (Stadtarchiv Dortmund).",
                        caption: {
                            caption: "Erfrischungsraum im Warenhaus Althoff",
                            src: "Stadtarchiv Dortmund"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_03/raetsel_01/image_06.webp",
                        alt: "Erfrischungsraum im Warenhaus Althoff (Stadtarchiv Dortmund).",
                        caption: {
                            caption: "Erfrischungsraum im Warenhaus Althoff",
                            src: "Stadtarchiv Dortmund"
                        }
                    },
                    { tag: "img", src: "/station_03/raetsel_01/image_07.webp", alt: "Außergewöhnliche Innenarchitektur: Der Lichthof im Warenhaus Althoff (Sammlung Klaus Winter).", caption: { caption: "Außergewöhnliche Innenarchitektur: Der Lichthof im Warenhaus Althoff", src: "Sammlung Klaus Winter" } },
                    { tag: "img", src: "/station_03/raetsel_01/image_08.webp", alt: "Kurzwaren Abteilung mit verschiedenem textilem Zubehör im Warenhaus Althoff (Sammlung Klaus Winter).", caption: { caption: "Kurzwaren Abteilung mit verschiedenem textilem Zubehör im Warenhaus Althoff", src: "Sammlung Klaus Winter" } },
                    {
                        tag: "p",
                        children: [
                            { tag: "text", text: "Besonders waren auch die modernen" },
                            { tag: "Select", options: [{ answer: "Toiletten", correct: false }, { answer: "Fahrstühle", correct: true }, { answer: "Umkleiden", correct: false }] },
                            {
                                tag: "text",
                                text: `mit ihren Kabinen aus silbergrauem Ahorn. Das Treppenhaus hingegen war mit aufwendigen Glasmalereien verziert. Im Jahr 1920 schloss sich das Warenhaus Althoff mit einem bekannten Warenhausunternehmen zusammen – ab 1936 war es unter dem Namen`
                            },
                            { tag: "Select", options: [{ answer: "Kardorf", correct: false }, { answer: "Karstadt", correct: true }, { answer: "Karwinkel", correct: false }] },
                            { tag: "text", text: "bekannt. Im Zweiten Weltkrieg wurde das Gebäude stark beschädigt, aber später wieder aufgebaut. Heute gehört das ehemalige Warenhaus Althoff zur Warenhauskette GALERIA. Diese entstand 2020 aus dem Zusammenschluss von Karstadt und Kaufhof." }
                        ]
                    },
                    { tag: "img", src: "/station_03/raetsel_01/image_09.webp", alt: "Der Erweiterungsbau des ehemaligen Warenhauses Althoff steht auch heute noch (Foto: Sophie Ullrich).", caption: { caption: "Der Erweiterungsbau des ehemaligen Warenhauses Althoff steht auch heute noch", src: "Sophie Ullrich" } }
                ]
            },
            result: {
                content: [
                    { tag: "h2", children: [{ tag: "text", text: "Das Warenhaus Althoff - Ein Konsumtempel in Dortmund:"}] },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "text",
                                text: `Im Jahr 1904 eröffnete am Westenhellweg das von Theodor Althoff gegründete Warenhaus. Die Architektur war inspiriert vom berühmten Wertheim-Warenhaus in `
                            },
                            {
                                tag: "Select",
                                options: [
                                    { answer: "London", correct: false },
                                    { answer: "Paris", correct: false },
                                    { answer: "Berlin", correct: true },
                                ]
                            },
                            {
                                tag: "text",
                                text: `und wurde von Otto Engler entworfen. Mit einer Verkaufsfläche von 5000 m² und etwa 500 Mitarbeitenden war es das damals größte deutsche Warenhaus außerhalb Berlins. Fast`
                            },
                            {
                                tag: "Select",
                                options: [
                                    { answer: "10.000", correct: true },
                                    { answer: "100.000", correct: false },
                                    { answer: "1.000", correct: false },
                                ]
                            },
                            {
                                tag: "text",
                                text: `Menschen strömten am Eröffnungstag in das Warenhaus. Schon bald folgte ein Erweiterungsbau am Hansaplatz.`
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_03/raetsel_01/image_00.webp",
                        alt: "Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
                        caption: {
                            caption: "Warenhaus Althoff an der Hansastraße, Ecke Westenhellweg",
                            src: "Stadtarchiv Dortmund"
                        }
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "text",
                                text: `Neben Luxuswaren, wie teuren `
                            },
                            {
                                tag: "Select",
                                options: [
                                    { answer: "Autos", correct: false },
                                    { answer: "Edelsteinen", correct: false },
                                    { answer: "Schmuckstücken", correct: true },
                                ]
                            },
                            {
                                tag: "text",
                                text: `und einer großen Auswahl an Teppichen wurden auch Produkte des täglichen Bedarfs verkauft – sehr zum Ärger der Einzelhändler, die sich gegen die neuen Warenhäuser zusammenschlossen.`
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_03/raetsel_01/image_01.webp",
                        alt: "Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
                        caption: {
                            src: "Stadtarchiv Dortmund"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_03/raetsel_01/image_02.webp",
                        alt: "Teppichlager im Warenhaus Althoff (Foto: Stadtarchiv Dortmund).",
                        caption: {
                            caption: "Beide Bilder: Teppichlager im Warenhaus Althoff",
                            src: "Stadtarchiv Dortmund"
                        }
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "text",
                                text: `Eine Besonderheit war die Lebensmittelabteilung, die als erste ihrer Art in einem deutschen Warenhaus galt. Hier wurden neben Grundnahrungsmitteln, frischem Obst, teurem Champagner und Weinen, als Delikatesse geltende Hummer in Dosen und sogar lebende Tiere wie junge Tauben, Gänse und`
                            },
                            {
                                tag: "Select",
                                options: [
                                    { answer: "Aale", correct: true },
                                    { answer: "Schweine", correct: false },
                                    { answer: "Frösche", correct: false },
                                ]
                            },
                            {
                                tag: "text",
                                text: `verkauft.`
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_03/raetsel_01/image_03.webp",
                        alt: "Lebensmittelabteilung im Warenhaus Althoff (Sammlung Klaus Winter).",
                        caption: {
                            caption: "Lebensmittelabteilung im Warenhaus Althoff",
                            src: "Sammlung Klaus Winter"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_03/raetsel_01/image_04.webp",
                        alt: "Wein und Likörabteilung Warenhaus Althoff (Sammlung Klaus Winter).",
                        caption: {
                            caption: "Wein und Likörabteilung Warenhaus Althoff",
                            src: "Sammlung Klaus Winter"
                        }
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "text",
                                text: `Die Innenausstattung des Warenhauses war ebenso beeindruckend wie das Warenangebot: Wände aus`
                            },
                            {
                                tag: "Select",
                                options: [
                                    { answer: "Gold", correct: false },
                                    { answer: "Silber", correct: false },
                                    { answer: "Marmor", correct: true },
                                ]
                            },
                            {
                                tag: "text",
                                text: `, kunstvolle Verglasungen und elegante Leuchter aus Bronze sorgten für eine luxuriöse Atmosphäre. Im Modell-Salon „für die Dame“ konnten die neuesten Modetrends bewundert werden, während der sogenannte Erfrischungsraum mit einem neun Meter langen Buffet, einem Brunnen und Tischen aus Marmor sowie Lederstühlen, die Gäste zum Verweilen einlud.`
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_03/raetsel_01/image_05.webp",
                        alt: "Erfrischungsraum im Warenhaus Althoff (Stadtarchiv Dortmund).",
                        caption: {
                            src: "Stadtarchiv Dortmund"
                        }
                    },
                    {
                        tag: "img",
                        src: "/station_03/raetsel_01/image_06.webp",
                        alt: "Erfrischungsraum im Warenhaus Althoff (Stadtarchiv Dortmund).",
                        caption: {
                            caption: "Beide Bilder: Erfrischungsraum im Warenhaus Althoff",
                            src: "Stadtarchiv Dortmund"
                        }
                    },
                    { tag: "img", src: "/station_03/raetsel_01/image_07.webp", alt: "Außergewöhnliche Innenarchitektur: Der Lichthof im Warenhaus Althoff (Sammlung Klaus Winter).", caption: { caption: "Außergewöhnliche Innenarchitektur: Der Lichthof im Warenhaus Althoff", src: "Sammlung Klaus Winter" } },
                    { tag: "img", src: "/station_03/raetsel_01/image_08.webp", alt: "Kurzwaren Abteilung mit verschiedenem textilem Zubehör im Warenhaus Althoff (Sammlung Klaus Winter).", caption: { caption: "Kurzwaren Abteilung mit verschiedenem textilem Zubehör im Warenhaus Althoff", src: "Sammlung Klaus Winter" } },
                    {
                        tag: "p",
                        children: [
                            { tag: "text", text: "Besonders waren auch die modernen" },
                            { tag: "Select", options: [{ answer: "Toiletten", correct: false }, { answer: "Fahrstühle", correct: true }, { answer: "Umkleiden", correct: false }] },
                            {
                                tag: "text",
                                text: `mit ihren Kabinen aus silbergrauem Ahorn. Das Treppenhaus hingegen war mit aufwendigen Glasmalereien verziert. Im Jahr 1920 schloss sich das Warenhaus Althoff mit einem bekannten Warenhausunternehmen zusammen – ab 1936 war es unter dem Namen`
                            },
                            { tag: "Select", options: [{ answer: "Kardorf", correct: false }, { answer: "Karstadt", correct: true }, { answer: "Karwinkel", correct: false }] },
                            { tag: "text", text: "bekannt. Im Zweiten Weltkrieg wurde das Gebäude stark beschädigt, aber später wieder aufgebaut. Heute gehört das ehemalige Warenhaus Althoff zur Warenhauskette GALERIA. Diese entstand 2020 aus dem Zusammenschluss von Karstadt und Kaufhof." }
                        ]
                    },
                    { tag: "img", src: "/station_03/raetsel_01/image_09.webp", alt: "Der Erweiterungsbau des ehemaligen Warenhauses Althoff steht auch heute noch (Foto: Sophie Ullrich).", caption: { caption: "Der Erweiterungsbau des ehemaligen Warenhauses Althoff steht auch heute noch", src: "Sophie Ullrich" } }
                ]
            }
        }
    },
    {
        id: 32,
        type: "single-choice-puzzle",
        title: "Quiz",
        requirements: [30],
        score: 3,
        data: {
            introduction: {
                data: [
                    { tag: "title", text: `In welchem Jahr wurde die erste Rolltreppe im Kaufhaus Karstadt, ehemals Warenhaus Althoff, eröffnet?` },
                    { tag: "img", src: "/station_03/raetsel_02/image_00.webp", alt: "Eröffnung der ersten Rolltreppe im Kaufhaus Karstadt, ehemals Warenhaus Althoff (Stadtarchiv Dortmund).", caption: { caption: "Eröffnung der ersten Rolltreppe im Kaufhaus Karstadt, ehemals Warenhaus Althoff", src: "Stadtarchiv Dortmund" }},
                ]
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
        requirements: [30],
        score: 21,
        data: {
            introduction: {
                data: [
                    { tag: "title", text: `Du siehst ein Inserat von Meyer & Günther aus der Dortmunder Zeitung von 1929. Das rechte Bild ist das Original. Klicke im linken Bild auf die sieben Unterschiede.` },
                ]
            },
            game: {
                path: "/station_03/raetsel_03/game"
            },
            result: {
                path: "/station_03/raetsel_03/game"
            }
        }
    },
    // 40: S04 E00
    // TODO (Cedric) Ort ???
    {
        id: 40,
        type: "gps-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 1,
        data: {
            introduction: {
                text: "Begebe dich zur Reinoldistraße, erst wenn deine Position korrekt ist, werden die Rätsel freigeschaltet.",
                informations: {
                    adress: "Reinoldistraße 6",
                    transit: {
                        bus: {
                            station: "",
                            lines: []
                        },
                        subway: {
                            station: "",
                            lines: []
                        }
                    },
                    coordinates: " 51.51574134185536, 7.467070721060602"
                }
            },
            game: {
                coordinates: {
                    lat:  51.51574134185536,
                    lon: 7.467070721060602
                }
            },
            result: {}
        }
    },
    {
        id: 41,
        type: "drag-drop-puzzle",
        title: "Wörter erraten",
        requirements: [40],
        score: 9,
        data: {
            introduction: {
                title: "In den Schaufensterbeschriftungen des Kolonialwarenladens fehlen Buchstaben. Ziehe die Buchstaben an die richtige Stelle und bilde die drei richtigen Wörter. Für jedes richtige Wort bekommst du 3 Punkte.",
                description: []
            },
            game: {
                path: "/station_04/raetsel_01/game",
                caption: ""
            },
            result: {
                img: "/station_04/raetsel_01/result/Background.webp",
                caption: "",
                scoreDescription: "Wörtern richtig"
            }
        }
    },
    {
        id: 42,
        type: "single-choice-puzzle",
        title: "Quiz",
        requirements: [40],
        score: 3,
        data: {
            introduction: {
                data: [
                    { tag: "title", text: `Welches Produkt gehörte NICHT zu den sogenannten Kolonialwaren?` },
                ]
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
    // 50: S05 E00
    // TODO (Cedric) Ort ???
    {
        id: 50,
        type: "gps-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 1,
        data: {
            introduction: {
                text: "Begebe dich zum Hafen, erst wenn deine Position korrekt ist, werden die Rätsel freigeschaltet.",
                informations: {
                    adress: "Speicherstraße 15",
                    transit: {
                        bus: {
                            station: "",
                            lines: []
                        },
                        subway: {
                            station: "",
                            lines: []
                        }
                    },
                    coordinates: "51.52578069810683, 7.445809382385741"
                }
            },
            game: {
                coordinates: {
                    lat: 51.52578069810683,
                    lon: 7.445809382385741
                }
            },
            result: {}
        }
    },
    {
        id: 51,
        type: "drag-drop-puzzle",
        title: "Zuordnungsspiel",
        requirements: [50],
        score: 15,
        data: {
            introduction: {
                title: "Hier, wo heute der Heimathafen ist, befand sich Anfang des 20. Jahrhunderts das Lager des Kolonialwarengroßhändlers Heinrich Schreer.",
                description: ["Du siehst einen Ausschnitt aus seiner Preisliste. Ziehe die Wörter an die richtige Stelle. "]
            },
            game: {
                path: "/station_05/raetsel_01/game",
                caption: ""
            },
            result: {
                img: "/station_05/raetsel_01/result/Result.webp",
                caption: "",
                scoreDescription: "Begriffen richtig erraten"
            }
        }
    },
    {
        id: 52,
        type: "drag-drop-puzzle",
        title: "Puzzle",
        requirements: [50],
        score: 12,
        data: {
            introduction: {
                title: "Setze das Logo des „Schreer-Kaffees“ aus den Einzelteilen richtig zusammen. Achtung: Nach dem Start kannst du die Vorlage nicht mehr sehen.",
                description: []
            },
            game: {
                path: "/station_05/raetsel_02/game",
                caption: "",
                introduction: true
            },
            result: {
                img: "/station_05/raetsel_02/game/Background.webp",
                caption: "",
            }
        }
    },
    {
        id: 53,
        type: "word-guessing-puzzle",
        title: "Suchaufgabe",
        requirements: [50],
        score: 3,
        data: {
            introduction: {
                data: [
                    {
                        tag: "title",
                        text: "Wie hießen die Inhaber der ehemaligen Kolonialwarenhandlung, die ihren Firmensitz hier am Hafen hatten? "
                    },
                    {
                        tag: "p",
                        text: "Suche in der Speicherstraße zwischen den Hausnummern 1 und 21 nach dem Namen und trage die Lösung in das Kästchen ein."
                    },
                ]
            },
            game: {
                questions: [
                    { solutions: ["Rosendahl", "Gebr. Rosendahl"] }
                ]
            },
            result: {
                questions: [
                    { 
                        hints: [
                            {
                                tag: "img",
                                src: "/station_05/raetsel_03/image_00.webp",
                                alt: "Foto: Sophie Ullrich",
                                caption: {
                                    caption: "",
                                    src: "Foto: Sophie Ullrich"
                                }
                            }
                        ],
                        solution: "Rosendahl" 
                    }
                ]
            }
        }
    },
    // 60: S06 E00
    // TODO (Cedric) Ort ???
    {
        id: 60,
        type: "gps-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 1,
        data: {
            introduction: {
                text: "Begebe dich zum Freiherr-vom-Stein-Platz, erst wenn deine Position korrekt ist, werden die Rätsel freigeschaltet.",
                informations: {
                    adress: "Steinstraße 6",
                    transit: {
                        bus: {
                            station: "",
                            lines: []
                        },
                        subway: {
                            station: "",
                            lines: []
                        }
                    },
                    coordinates: "51.520129044945186, 7.464537819122533"
                }
            },
            game: {
                coordinates: {
                    lat: 51.520129044945186,
                    lon: 7.464537819122533
                }
            },
            result: {}
        }
    },
    {
        id: 61,
        type: "text-select-puzzle",
        title: "Zuordnungsspiel",
        requirements: [60],
        score: 15,
        data: {
            introduction: {
                text: ["Ordne die Farbkombinationen den richtigen Filialketten zu.", "Es sind die aktuellen Logo-Farben von DM, EDEKA, H&M, C&A und LIDL."]
            },
            game: {
                content: [
                    {
                        tag: "img",
                        src: "/station_06/raetsel_01/image_00.svg",
                        alt: "Blau Rot Gelb",
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "Select",
                                options: [
                                    { answer: "DM", correct: false },
                                    { answer: "EDEKA", correct: false },
                                    { answer: "H&M", correct: false },
                                    { answer: "C&A", correct: false },
                                    { answer: "LIDL", correct: true },
                                ]
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_06/raetsel_01/image_01.svg",
                        alt: "Weiß Rot",
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "Select",
                                options: [
                                    { answer: "DM", correct: false },
                                    { answer: "EDEKA", correct: false },
                                    { answer: "H&M", correct: true },
                                    { answer: "C&A", correct: false },
                                    { answer: "LIDL", correct: false },
                                ]
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_06/raetsel_01/image_02.svg",
                        alt: "Weiß Blau Rot",
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "Select",
                                options: [
                                    { answer: "DM", correct: false },
                                    { answer: "EDEKA", correct: false },
                                    { answer: "H&M", correct: false },
                                    { answer: "C&A", correct: true },
                                    { answer: "LIDL", correct: false },
                                ]
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_06/raetsel_01/image_03.svg",
                        alt: "Blau Gelb",
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "Select",
                                options: [
                                    { answer: "DM", correct: false },
                                    { answer: "EDEKA", correct: true },
                                    { answer: "H&M", correct: false },
                                    { answer: "C&A", correct: false },
                                    { answer: "LIDL", correct: false },
                                ]
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_06/raetsel_01/image_04.svg",
                        alt: "Blau Gelb Rot Weiß",
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "Select",
                                options: [
                                    { answer: "DM", correct: true },
                                    { answer: "EDEKA", correct: false },
                                    { answer: "H&M", correct: false },
                                    { answer: "C&A", correct: false },
                                    { answer: "LIDL", correct: false },
                                ]
                            }
                        ]
                    },
                ]
            },
            result: {
                content: [
                    {
                        tag: "img",
                        src: "/station_06/raetsel_01/image_00.svg",
                        alt: "Blau Rot Gelb",
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "Select",
                                options: [
                                    { answer: "DM", correct: false },
                                    { answer: "EDEKA", correct: false },
                                    { answer: "H&M", correct: false },
                                    { answer: "C&A", correct: false },
                                    { answer: "LIDL", correct: true },
                                ]
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_06/raetsel_01/image_01.svg",
                        alt: "Weiß Rot",
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "Select",
                                options: [
                                    { answer: "DM", correct: false },
                                    { answer: "EDEKA", correct: false },
                                    { answer: "H&M", correct: true },
                                    { answer: "C&A", correct: false },
                                    { answer: "LIDL", correct: false },
                                ]
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_06/raetsel_01/image_02.svg",
                        alt: "Weiß Blau Rot",
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "Select",
                                options: [
                                    { answer: "DM", correct: false },
                                    { answer: "EDEKA", correct: false },
                                    { answer: "H&M", correct: false },
                                    { answer: "C&A", correct: true },
                                    { answer: "LIDL", correct: false },
                                ]
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_06/raetsel_01/image_03.svg",
                        alt: "Blau Gelb",
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "Select",
                                options: [
                                    { answer: "DM", correct: false },
                                    { answer: "EDEKA", correct: true },
                                    { answer: "H&M", correct: false },
                                    { answer: "C&A", correct: false },
                                    { answer: "LIDL", correct: false },
                                ]
                            }
                        ]
                    },
                    {
                        tag: "img",
                        src: "/station_06/raetsel_01/image_04.svg",
                        alt: "Blau Gelb Rot Weiß",
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "Select",
                                options: [
                                    { answer: "DM", correct: true },
                                    { answer: "EDEKA", correct: false },
                                    { answer: "H&M", correct: false },
                                    { answer: "C&A", correct: false },
                                    { answer: "LIDL", correct: false },
                                ]
                            }
                        ]
                    },
                ]
            }
        }
    },
    // 70: S07 E00
    // TODO (Cedric) Ort ???
    {
        id: 70,
        type: "gps-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 1,
        data: {
            introduction: {
                text: "Begebe dich zur Kampstraße, erst wenn deine Position korrekt ist, werden die Rätsel freigeschaltet.",
                informations: {
                    adress: "REWE Kampstraße",
                    transit: {
                        bus: {
                            station: "",
                            lines: []
                        },
                        subway: {
                            station: "",
                            lines: []
                        }
                    },
                    coordinates: "51.51540000001225, 7.466581904944825"
                }
            },
            game: {
                coordinates: {
                    lat: 51.51540000001225,
                    lon: 7.466581904944825
                }
            },
            result: {}
        }
    },
    {
        id: 71,
        type: "single-choice-puzzle",
        title: "Labyrinth",
        requirements: [70],
        score: 3,
        data: {
            introduction: {
                data: [
                    { tag: "title", text: "Finde den Weg, auf dem du die meisten Äpfel einsammelst." },
                    { tag: "img", src: "/station_07/image_00.webp" },
                ]
            },
            game: {
                answers: [
                    { id: 0, text: "Grün", isCorrect: false },
                    { id: 1, text: "Weiß", isCorrect: false },
                    { id: 2, text: "Gelb", isCorrect: false },
                    { id: 3, text: "Dunkelblau", isCorrect: false },
                    { id: 4, text: "Pink", isCorrect: true },
                    { id: 5, text: "Hellblau", isCorrect: false },
                ]
            },
            result: {
                answers: [
                    { id: 0, text: "Grün", isCorrect: false },
                    { id: 1, text: "Weiß", isCorrect: false },
                    { id: 2, text: "Gelb", isCorrect: false },
                    { id: 3, text: "Dunkelblau", isCorrect: false },
                    { id: 4, text: "Pink", isCorrect: true },
                    { id: 5, text: "Hellblau", isCorrect: false },
                ],
            }
        }
    },
    {
        id: 72,
        type: "word-guessing-puzzle",
        title: "Quizfrage",
        requirements: [70],
        score: 3,
        data: {
            introduction: {
                data: [
                    { tag: "title", text: "Wie viele Äpfel sind es?" },
                    { tag: "img", src: "/station_07/image_00.webp" },
                ]
            },
            game: {
                questions: [
                    { solutions: ["10", "Zehn"] }
                ]
            },
            result: {
                questions: [
                    { solution: "10" }
                ]
            }
        }
    },
    // 80: S08 E00
    // TODO (Cedric) Ort ???
    {
        id: 80,
        type: "gps-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 1,
        data: {
            introduction: {
                text: "Begebe dich zum Thalia, erst wenn deine Position korrekt ist, werden die Rätsel freigeschaltet.",
                informations: {
                    adress: "Westenhellweg 44",
                    transit: {
                        bus: {
                            station: "",
                            lines: []
                        },
                        subway: {
                            station: "",
                            lines: []
                        }
                    },
                    coordinates: "51.51420673594943, 7.4638271186997995"
                }
            },
            game: {
                coordinates: {
                    lat: 51.51420673594943,
                    lon: 7.4638271186997995
                }
            },
            result: {}
        }
    },
    {
        id: 81,
        type: "single-choice-puzzle",
        title: "Quizfrage 1",
        requirements: [80],
        score: 3,
        data: {
            introduction: {
                data: [
                    { tag: "title", text: "Welches Kaufhaus gibt es am Westenhellweg noch heute?" }
                ]
            },
            game: {
                answers: [
                    { id: 0, text: "Galeria", isCorrect: true },
                    { id: 1, text: "Horten", isCorrect: false },
                    { id: 2, text: "Neckermann", isCorrect: false },
                ]
            },
            result: {
                answers: [
                    { id: 0, text: "Galeria", isCorrect: true },
                    { id: 1, text: "Horten", isCorrect: false },
                    { id: 2, text: "Neckermann", isCorrect: false },
                ]
            }
        }
    },
    {
        id: 82,
        type: "single-choice-puzzle",
        title: "Quizfrage 2",
        requirements: [80],
        score: 3,
        data: {
            introduction: {
                data: [
                    { tag: "title", text: "Wann eröffnete das Kaufhaus Hertie an der Brückstraße/Hansastraße?" }
                ]
            },
            game: {
                answers: [
                    { id: 0, text: "1945", isCorrect: false },
                    { id: 1, text: "1955", isCorrect: true },
                    { id: 2, text: "1975", isCorrect: false },
                ]
            },
            result: {
                answers: [
                    { id: 0, text: "1945", isCorrect: false },
                    { id: 1, text: "1955", isCorrect: true },
                    { id: 2, text: "1975", isCorrect: false },
                ]
            }
        }
    },
    {
        id: 83,
        type: "single-choice-puzzle",
        title: "Quizfrage 3",
        requirements: [80],
        score: 3,
        data: {
            introduction: {
                data: [
                    { tag: "title", text: "Welche Besonderheit machte Hertie besonders attraktiv?" }
                ]
            },
            game: {
                answers: [
                    { id: 0, text: "Ein Café auf der Dachterrasse", isCorrect: true },
                    { id: 1, text: "Ein eigenes Kino", isCorrect: false },
                    { id: 2, text: "Ein Hallenbad", isCorrect: false },
                ]
            },
            result: {
                answers: [
                    { id: 0, text: "Ein Café auf der Dachterrasse", isCorrect: true },
                    { id: 1, text: "Ein eigenes Kino", isCorrect: false },
                    { id: 2, text: "Ein Hallenbad", isCorrect: false },
                ]
            }
        }
    },
    // 90: S09 E00
    // TODO (Cedric) Ort ???
    {
        id: 90,
        type: "gps-puzzle",
        title: "Station freischalten",
        requirements: [],
        score: 1,
        data: {
            introduction: {
                text: "Begebe dich zur Thier-Galerie, erst wenn deine Position korrekt ist, werden die Rätsel freigeschaltet.",
                informations: {
                    adress: "Thier-Galerie",
                    transit: {
                        bus: {
                            station: "",
                            lines: []
                        },
                        subway: {
                            station: "",
                            lines: []
                        }
                    },
                    coordinates: "51.51340212520424, 7.459321539954258"
                }
            },
            game: {
                coordinates: {
                    lat: 51.51340212520424,
                    lon: 7.459321539954258
                }
            },
            result: {}
        }
    },
    {
        id: 91,
        type: "word-guessing-puzzle",
        title: "Suchaufgabe 1",
        requirements: [90],
        score: 3,
        data: {
            introduction: {
                data: [
                    { tag: "title", text: "Zähle alle Rolltreppen in der Thier-Galerie." },
                    { tag: "p", text: "Eine Rolltreppe nach oben = 1, eine nach unten = 1." },
                    { tag: "p", text: "Trage die Gesamtzahl ein." }
                ]
            },
            game: {
                questions: [
                    { solutions: ["14"] }
                ]
            },
            result: {
                questions: [
                    { solution: "14" }
                ]
            }
        }
    },
    {
        id: 92,
        type: "word-guessing-puzzle",
        title: "Suchaufgabe 2",
        requirements: [90],
        score: 3,
        data: {
            introduction: {
                data: [
                    { tag: "title", text: "Zähle die Säulen am Eingang Westenhellweg der Thier-Galerie." },
                    { tag: "p", text: "Wie viele runde Säulen siehst du?" },
                    { tag: "p", text: "Trage die Gesamtzahl ein." }
                ]
            },
            game: {
                questions: [
                    { solutions: ["6"] }
                ]
            },
            result: {
                questions: [
                    { solution: "6" }
                ]
            }
        }
    },
    {
        id: 93,
        type: "word-guessing-puzzle",
        title: "Suchaufgabe 3",
        requirements: [], // TODO [90]
        score: 3,
        data: {
            introduction: {
                data: [
                    { tag: "title", text: "Zähle die Säulen am Eingang Westenhellweg der Thier-Galerie." },
                    { tag: "p", text: "Wie viele eckige Säulen siehst du?" },
                    { tag: "p", text: "Trage die Gesamtzahl ein." }
                ]
            },
            game: {
                questions: [
                    { solutions: ["2"] }
                ]
            },
            result: {
                questions: [
                    { solution: "2" }
                ]
            }
        }
    }
]

export default puzzles
export type { Puzzle }
