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
    //     score: 0,
    //     chapters: [],
    //     puzzles: []
    // },
    {
        id: 1,
        tag: "Station 01",
        stitle: "Alter Markt",
        title: "Der mittelalterliche Markt, Handel und Handwerk in Dortmund",
        score: 21,
        chapters: [
                // {
                //     title: "",
                //     content: [
                //         { type: "title", content: "" },
                //         { type: "paragraph", content: "" },
                //         { type: "image", src: "", alt: "", caption: "" }
                //     ]
                // }
                {
                    title: "Märkte und Verkauf vom Mittelalter bis zur frühen Neuzeit",
                    content: [
                        { type: "paragraph", content: "Im Mittelalter waren städtische Wochenmärkte die Zentren der Lebensmittelversorgung. Dort gab es alles fürs tägliche Leben, ergänzt durch spezialisierte Märkte für Gebrauchsgegenstände oder bestimmte Lebensmittel, sowie Jahrmärkte und Messen. Entscheidend war die sichere Versorgung mit Lebensmitteln und Brennstoff - während Reiche Vorräte anlegen konnten, lebten viele ärmere Stadtbewohner:innen sprichwörtlich „von der Hand in den Mund“." },
                        { type: "paragraph", content: "Neben dem Wochenmarkt gab es spezialisierte Märkte. Außerdem fanden Jahrmärkte und Messen statt, die nicht nur der Versorgung dienten, sondern auch Unterhaltung boten." },
                        { type: "paragraph", content: "Handwerker verkauften ihre Produkte auf dem Markt oder produzierten nach Auftrag und verkauften ihre Waren direkt aus der Werkstatt, teils über ein einfaches Auslegebrett am Haus. Die Versorgung auf dem Land war meistens schlechter als in der Stadt. Hausierer zogen mit ihren Waren übers Land und boten sie Landbewohner:innen direkt an der Haustüre an. Zwischen dem 17. und 19. Jahrhundert richteten sich verstärkt polizeiliche Kontrollen und Verbote gegen diesen Wanderhandel." },
                        { type: "paragraph", content: "Erst im 18. Jahrhundert, mit wachsendem Warenangebot, entstanden spezialisierte Läden, wie zum Beispiel für Textilien. Mit der Gewerbefreiheit im 19. Jahrhundert entwickelte sich daraus ein immer vielfältigerer Kleinhandel." },
                        { type: "paragraph", content: "Bis ins 19. Jahrhundert hinein waren Städte eng mit ihrem Umland verflochten: gute oder schlechte Ernten spürte man sofort auf dem Markt. Erst die Industrialisierung vernetzte die Versorgung überregional und schließlich weltweit." }
                    ]
                },
                {
                    title: "Der Dortmunder Markt",
                    content: [
                        { type: "paragraph", content: "Dortmund besitzt eines der ältesten Marktrechte Westfalens: Bereits 990 ist ein Wochenmarkt urkundlich belegt. Im Jahr 1232 verlieh König Heinrich VII. der Stadt Dortmund das Recht, einen zweiten jährlichen Markt abzuhalten. Hier verkauften Menschen aus Landwirtschaft, Handwerk und Handel Lebensmittel, Wolle, Lederwaren oder Tuch. Die Stadtbevölkerung konnte so ihre Versorgung sichern." },
                        { type: "paragraph", content: "Der erste Dortmunder Marktplatz lag vermutlich an der Reinoldikirche, nahe dem damals ersten gebauten Rathaus. Durch den großen Stadtbrand von 1232 wurden jedoch sowohl ein Vorgängerbau der Reinoldikirche als auch dieses erste Rathaus zerstört. Einige Jahrzehnte später entstand die heutige Reinoldikirche und der Markt erhielt einen neuen Standort. Dafür legte man einen rechteckigen Platz mit rund 100 mal 60 Metern Fläche an. Von hier aus führten wichtige Straßenachsen in alle Teile Dortmunds und in die umliegende Region. Mit der Verlegung des Marktes und dem Bau des zweiten Rathauses im Jahr 1240 gewann Dortmund deutlich an Bedeutung als Handelsstadt. Immer mehr Kaufleute und eine wachsende Käuferschaft kamen in die Stadt." },
                        { type: "paragraph", content: "Nicht nur in räumlicher Hinsicht war der Markt das Zentrum der mittelalterlichen Stadt: Auch politisch und wirtschaftlich bildete er den Mittelpunkt Dortmunds. Hier stand das Rathaus, in dem der Rat der Reichsstadt tagte und Gericht hielt, Gäste empfing und Feste feierte. Am Markt befanden sich feste Verkaufsstände für Fleisch, Brot, Flachs, Fisch, Salz und viele weitere Waren. Straßennamen wie „Salzgasse“, „Schuhhof“ oder die Kneipe „Gänsemarkt“ zeugen noch heute davon." },
                        { type: "paragraph", content: "Damit das Marktgeschehen geordnet ablief, schrieb der Rat der Stadt feste Regeln vor: Der Verkauf war nur an bestimmten Tagen und ausschließlich an den zugewiesenen Plätzen erlaubt. Marktaufseher kontrollierten Maße, Gewichte und Qualität der Waren. So sorgten sie zum Beispiel auch dafür, dass keine verdorbenen Lebensmittel verkauft wurden." },
                        { type: "paragraph", content: "Wer verdächtigt wurde, mit gefälschten Gewichten zu handeln, musste sich an der Stadtwaage an der Ostseite des Platzes prüfen lassen. Fiel das Urteil negativ aus, drohte sofortige Bestrafung am „Trissel“ - einem erhöhten Korb direkt neben dem Brunnen, wo Verurteilte öffentlich zur Schau gestellt wurden. Diese entehrende Strafe wirkte nicht nur rechtlich, sondern auch sozial. Hinrichtungen hingegen fanden außerhalb der Stadtmauern statt." },
                        { type: "paragraph", content: "Östlich des Rathauses stand zudem der Freistuhl „Zum Spiegel“, der einzige innerhalb Dortmunds. Er war Teil der sogenannten Vemgerichtsbarkeit - einem mittelalterlichen Sondergerichtssystem in Westfalen, das der Wahrung des Landfriedens diente. Diese „Freigerichte“ tagten meist unter freiem Himmel und behandelten schwere Vergehen wie Mord, Raub oder Eidbruch. Während die meisten Gerichtsstätten außerhalb der Stadtmauern lagen, war der Freistuhl am Markt ein zentraler Ort des Dortmunder Rechtslebens. Im frühen 16. Jahrhundert wurde er aufgehoben; 1538 errichtete ein Kaufmann an seiner Stelle sein Haus." },
                        { type: "paragraph", content: "Bis in die frühe Neuzeit hinein spielte der Marktplatz eine zentrale Rolle im Stadtleben. Kriegszerstörungen im Zweiten Weltkrieg und die Umgestaltung der Innenstadt im 20. Jahrhundert veränderten zwar sein Aussehen, doch seine Funktion als lebendiges Zentrum blieb bestehen." },
                        { type: "paragraph", content: "Wer heute über den Wochenmarkt auf dem Hansaplatz oder über den Weihnachtsmarkt schlendert, erlebt ein Stück lebendige Tradition, die bis ins Mittelalter zurückreicht. Geblieben sind der direkte Kontakt zu den Händler:innen und die besondere Atmosphäre. Der große Unterschied: Während die Menschen damals auf den Markt angewiesen waren, ist er heute eher ein besonderes Erlebnis." }
                    ]
                },
                {
                    title: "Das Dortmunder Rathaus",
                    content: [
                        { type: "paragraph", content: "Das Rathaus, um 1240 errichtet und damit das älteste steinerne in Deutschland, war ursprünglich Sitz des gräflichen Stadtherrn. Es wurde jedoch bald vom städtischen Rat übernommen. Dieser war 1241 bereits so einflussreich geworden, dass er das Haus des Grafen am Marktplatz kaufen konnte." },
                        { type: "paragraph", content: "Das Rathaus erfüllte viele Funktionen: Im Untergeschoss lagerte Wein, außerdem befanden sich dort ein Gefangenen- und Folterkeller. Die Vorhalle diente als Ort des Markgerichts, in der Erdgeschosshalle befanden sich die Verkaufsräume der Tuchhändler, das sogenannte Gewandhaus. Dort boten die Dortmunder Tuchhändler ihre wertvollen Waren feil - eine Tätigkeit, die sie nicht nur ökonomisch, sondern auch politisch zu einer der einflussreichsten Gruppen der Stadt machte. Das Obergeschoss war Versammlungsraum des Rates, zugleich Ort für Sitzungen und Gerichtsverhandlungen, Empfänge und Feiern." },
                        { type: "paragraph", content: "In der Mitte des 16. Jahrhunderts erhielt das Dortmunder Rathaus zwei Erweiterungen: An der Ostseite entstand eine Schreiberei, an der Rückseite ein massiver Archivturm, in dem die wertvollsten Urkunden und Akten der Stadt aufbewahrt wurden. Der ursprünglich dreistufige Giebel wurde 1740 barock umgestaltet und prägte so das Bild des Marktplatzes bis ins 19. Jahrhundert." },
                        { type: "paragraph", content: "Als Dortmund 1803 seine Reichsfreiheit verlor, wirkte sich das auch auf das Stadtbild aus. Ruhm und Wohlstand der alten Reichsstadt verblassten und die Gelder für notwendige Instandsetzungen waren knapp bemessen. Das Rathaus verfiel zunehmend. Ein Abriss wurde erwogen, doch der Stadtbauinspektor Friedrich Kullrich (1821-1887) initiierte zwei Spendenaktionen in der Bürgerschaft, mit deren Hilfe das Gebäude in den Jahren 1897 bis 1899 restauriert und im Stil der Neo-Renaissance neu gestaltet wurde. Dabei ersetzte man die barocken Giebel durch neugotisch anmutende Stufengiebel und der Festsaal erhielt eine historisierende Ausstattung nach idealisierten Vorstellungen des Mittelalters. Anlass für die umfassende Umgestaltung war auch der Besuch Kaiser Wilhelms II., der am 11. August 1899 zur Eröffnung des Dortmund-Ems-Kanals in die Stadt kam." },
                        { type: "paragraph", content: "Im Zweiten Weltkrieg wurde das Rathaus stark beschädigt; die Ruine schließlich 1955 vollständig abgetragen." },
                        { type: "paragraph", content: "In den Jahren 1974/75 beschloss die Stadt den Bau eines neuen Rathauses. Der moderne Bau nach Plänen von Kronenberg + Lutter wurde 1989 eröffnet und steht direkt gegenüber am Friedensplatz." }
                    ]
                },
                {
                    title: "Der Hellweg in Dortmund",
                    content: [
                        { type: "paragraph", content: "Der Hellweg war eine der wichtigsten Fernstraßen des Mittelalters. Sein Name stammt vom niederdeutschen „helwech“ oder „heelwiäch“ und bedeutet „heiler, lichter, breiter Weg“. Schon früh bezeichnete man damit große Königs- und Heerstraßen." },
                        { type: "paragraph", content: "Er führte von den rheinischen Städten über Dortmund bis an die Weser und weiter nach Nordosteuropa. Hier kreuzte er zudem eine Route von Köln über Münster zu den Häfen an Nord- und Ostsee. An dieser Kreuzung, am heutigen Westen- und Ostenhellweg und der Brückstraße, entstand im 10. Jahrhundert eine Königspfalz. Auf Grund der besonderen Lage ließen sich dort viele Kaufleute und Handwerkstreibende nieder." },
                        { type: "paragraph", content: "Die Bedingungen am Hellweg waren jedoch alles andere als angenehm: Die Straße war eng, diente zugleich als Viehtriebweg und als Abwassergraben. Es war laut, schmutzig und stinkend. Trotzdem war der Hellweg die Lebensader der Stadt und wurde täglich von Kaufleuten, Reisenden, Pilgernden und Viehtreibenden genutzt." }
                    ]
                },
                {
                    title: "Handel und Handwerk in Dortmund",
                    content: [
                        { type: "paragraph", content: "Handel und Handwerk waren im Mittelalter in Zünften und Gilden organisiert. Zünfte waren ein Zusammenschluss von Handwerkern, die das gleiche Gewerbe ausübten. Durch den Zusammenschluss konnten Ausbildung, Qualität, Preise und die Zahl der Meisterbetriebe einheitlich geregelt werden." },
                        { type: "paragraph", content: "In Dortmund existierten sechs übergeordnete Zünfte - Gerber und Schuhmacher, Bäcker, Fleischer, Schmiede, Fettkrämer und Krämer - jeweils mit zahlreichen Spezialberufen wie Goldschmied, Nadelschmied oder Harnischmacher. 1260 schlossen sie sich zur „Sechsgilde“ zusammen.. Zünfte hatten neben der wirtschaftlichen auch eine soziale Funktion: Wenn ein Handwerker starb, kümmerte sich die Zunft um die Hinterbliebenen. Witwen konnten in manchen Fällen den Platz ihres Mannes übernehmen, ansonsten blieb die Mitgliedschaft Männern vorbehalten." },
                        { type: "paragraph", content: "Am Ostenhellweg stand das Gildenhaus, erbaut um 1400 und 1944 im Zweiten Weltkrieg zerstört. Es erinnerte an die Zeit, in der sich die Dortmunder Kaufleute in Gilden zusammenschlossen, um ihre Interessen zu vertreten." },
                        { type: "paragraph", content: "Dortmund wuchs bis ins 15. Jahrhundert immer mehr zu einem wichtigen Handelsstandort heran. Dazu trug neben der Lage auch ein besonderer Status bei: Die Stadt war eine freie Reichsstadt, besaß das königlich verliehene Kaufmannsrecht und war von Zöllen befreit. Sie war also unabhängig von Fürsten oder Bischöfen und die Bürgergemeinde galt rechtlich als eigene Gemeinschaft." },
                        { type: "paragraph", content: "Bereits im 14. Jahrhundert gehörte die Stadt, die mit damals rund 7.000 Einwohner:innen eine der größeren Mittelstädte darstellte, zum Bund der Hanse und wurde zu einer ihrer bedeutendsten westfälischen Hansestädte. Von hier aus unterhielten die Kaufleute enge Verbindungen in die Hansestädte des Nord- und Ostseeraums. Die bis heute existierende Hansastraße - die allerdings erst im 20. Jahrhundert gebaut wurde - erinnert an diese Blütezeit des hansischen Handels." }
                    ]
                },
                {
                    title: "Die Reinoldigilde",
                    content: [
                        { type: "paragraph", content: "In der sogenannten Reinoldigilde vereinigten sich Dortmunder Fernkaufleute, um ihre wirtschaftlichen Interessen zu vertreten und ihren Handel gemeinsam zu organisieren. Sie unterhielten im 13.-14. Jh. Handelsbeziehungen u. a. nach London, Brügge, Novgorod (heute Weliki Nowgorod), Tallinn, Riga, Danzig/Thorn, Krakau und Venedig. Mitglieder der Reinoldigilde stellten einen wesentlichen Teil der städtischen Elite - zeitweise konnten nur Reinoldigildner in den Rat gewählt werden." },
                        { type: "paragraph", content: "Das änderte sich erst im Jahre 1400, als die Zünfte nach einem Aufstand gegen den Stadtrat wegen Misswirtschaft ebenfalls die ersten Ratssitze erhielten." },
                        { type: "paragraph", content: "Die Gilde trug den Namen des Stadtpatrons Reinoldus (St. Reinoldi). Ihre Netzwerke verbanden Dortmund mit Nord- und Ostsee sowie mit dem westeuropäischen Handelsraum." },
                        { type: "paragraph", content: "So war die Reinoldigilde zugleich eng mit der Hanse verbunden, dem mächtigen Städtebund des nord- und westeuropäischen Handels. Über ihre Kaufleute war Dortmund in die hansischen Netzwerke eingebunden und profitierte von deren Privilegien und Schutz." },
                        { type: "paragraph", content: "Durch das Abhalten von Jahrmärkten und durch das Privileg des Stapelrecht, welches Kaufleute von außerhalb dazu verpflichtete, ihre Waren in der Stadt drei Tage zu günstigen Preisen anzubieten und dort zeitweise zu lagern, gelangten nicht nur Tuch, Metalle oder Salz, sondern auch Kapital und Informationen nach Dortmund. Die politische Rolle der Gilde zeigt, wie eng Welthandel und Stadtregierung verknüpft waren." }
                    ]
                }
            ],
        puzzles: [10, 11, 12, 13]
    },
    {
        id: 2,
        tag: "Station 02",
        stitle: "Westen- und Ostenhellweg",
        title: "Der Westen- und Ostenhellweg",
        score: 1,
        chapters: [
                {
                    title: "Kapitel 1: Der Hellweg - vom Handelsweg zur Einkaufsmeile",
                    content: [
                        { type: "paragraph", content: "Wie Du jetzt weißt, war der Hellweg schon im Mittelalter eine der wichtigsten Straßen für Dortmund. Ab dem späten 19. Jahrhundert wurde der Hellweg Schritt für Schritt modernisiert." },
                        { type: "paragraph", content: "Viele Fachwerkhäuser dienten zunächst nur als Wohnraum; später entstanden in den unteren Etagen Ladenlokale mit Schaufenstern, während die oberen Etagen Wohnraum blieben. 1878 entstand der erste asphaltierte Bürgersteig Dortmunds. Immer mehr Fachgeschäfte und Warenhäuser siedelten sich an. Besonders im Westenhellweg entwickelte sich die Straße durch neue Passagen und Cafés zu einer modernen Geschäftsstraße mit lebendigem Flanierleben." },
                        { type: "paragraph", content: "Im 20. Jahrhundert wandelte sich der Hellweg endgültig zur Einkaufs- und Flanierstraße - nun als Westen- und Ostenhellweg bezeichnet. Der Einzelhandel wurde immer spezialisierter: Lebensmittel, Eisenwaren, Tabak, Lederwaren, Schmuck, Porzellan und vieles mehr erhielten eigene Häuser. Die Straße wurde zur beliebtesten Einkaufsmeile Dortmunds, blieb aber eng: Fußgänger:innen mussten sich den Weg mit Autos und Straßenbahnen teilen." },
                        { type: "paragraph", content: "Bereits um 1912 strömten an Sonntagen zehntausende Menschen auf den Westenhellweg. Sie flanierten dort mit eleganten Equipagen - das sind stilvolle Kutschen oder Fuhrwerke - und bevölkerten die Straße mit dicht gepackten Einkaufstaschen, was den Hellweg zur lebhaften Einkaufsstraße machte." },
                        { type: "paragraph", content: "Durch den zunehmenden Verkehr, insbesondere durch die Straßenbahnen, wurde die Situation für Fußgänger:innen zunehmend schwieriger. Erst mit der Umgestaltung zur Fußgängerzone nach 1945 bekam der Hellweg sein heutiges Gesicht. Die Straße konnte so ihre Rolle als moderne Einkaufsmeile mit Wohlfühl-Atmosphäre festigen. Die allgemeinen" },
                        { type: "paragraph", content: "Entwicklungen des Einzelhandels führten im Laufe der letzten Jahrzehnte zu einer stärkeren Dominanz von Filialketten und Warenhauskonzernen, die dem Hellweg ein einheitlicheres Erscheinungsbild gaben." },
                        { type: "paragraph", content: "Der Hellweg hat sich im Laufe der Zeit vom mittelalterlichen Handelsweg über die turbulente Zeit des frühen 20. Jahrhunderts mit seinem regen Flair und vielfältigen Einzelhandel zu einer modernen Einkaufsstraße entwickelt, die auch heute noch ein beliebter Treffpunkt und das Herz Dortmunds ist." },
                        { type: "image", src: "/t/S01C01P01.png", alt: "", caption: "Postkarte von 1905: Westenhellweg, Poststempel vom 19.03.1907 (Stadtarchiv Dortmund)." },
                        { type: "image", src: "/t/S01C01P02.png", alt: "", caption: "Postkarte von 1907: Westenhellweg (Stadtarchiv Dortmund)." },
                        { type: "image", src: "/t/S01C01P03.png", alt: "", caption: "Postkarte: Westenhellweg und Brückstraße (Sammlung Wolfang Kienast)." },
                        { type: "image", src: "/t/S01C01P04.png", alt: "", caption: "Postkarte: Westen- und Ostenhellweg und Brückstraße (Stadtarchiv Dortmund)." },
                        { type: "image", src: "/t/S01C01P05.png", alt: "", caption: "Fotografie, vermutlich um 1915: Westenhellweg (Stadtarchiv Dortmund)." },
                        { type: "image", src: "/t/S01C01P06.png", alt: "", caption: "Postkarte, vermutlich 1903: Ostenhellweg, (Stadtarchiv Dortmund)." }
                    ]
                },
                {
                    title: "Kapitel 2: Einzelhandel auf dem Westenhellweg - schon seit über 100 Jahren!",
                    content: [
                        { type: "subtitle", content: "Tewes: Tradition seit 1824" },
                        { type: "paragraph", content: "Es war das Jahr 1824, als Goldschmied Carl Wilhelm Tewes in Dortmund sein Geschäft eröffnete. Laut Handelskammer ist es heute das älteste Familienunternehmen der Stadt. Damals lebte sogar noch Johann Wolfgang von Goethe. Wer weiß, vielleicht hätte er sich hier eine Taschenuhr ausgesucht." },
                        { type: "paragraph", content: "Bei der Gründung von Tewes zählte Dortmund nur etwa 6.000 Einwohner:innen, es war also ein überschaubares Städtchen. Mit der Industrialisierung und dem Abbau der Kohle kam der Reichtum. Bald wurde Tewes zur ersten Adresse des Dortmunder Großbürgertums und schaffte es, viertgrößtes Geschäft im ganzen Deutschen Kaiserreich (1871-1918) zu werden." },
                        { type: "paragraph", content: "1899 besuchte Kaiser Wilhelm II. Dortmund. Zu Ehren des Gastes stifteten die Dortmunder ein neues Ratssilber, darunter Carl Tewes, der zweikunstvoll gearbeitete Silberpokale, sogenannte Buckelbecher, beitrug. Auch zum 150., zum 175. und 200. Stadtjubiläum stiftete die Familie für die Stadt, zuletzt einen Silberleuchter durch Rudolf Tewes, Goldschmied, Gemmologe und Ururur-Enkel des Gründers, der das Geschäft in sechster Generation führt. Im Zweiten Weltkrieg wurde das Geschäft durch Bomben zerstört. Carl Georg Tewes wagte den Neuanfang am heutigen Standort, Westenhellweg 6. Später modernisierte sein Enkel Rudolf Tewes das Geschäft, verband alte Handwerkskunst mit neuen Ideen und machte Tewes zu einem der Top 100 Juwelier-Geschäfte Deutschlands." }
                    ]
                }
            ],
        puzzles: [20, 28, 29]
    }
]

export default stations
export type { Station }
