import type { PageLoad } from "./$types"

type Chapter = { title: string, content: SectionNode[] | ParagraphNode[] }
type SectionNode = { type: "section" }
type ParagraphNode = { type: "paragraph", text: string }

export const load: PageLoad = async (): Promise<{ title: string, chapters: Chapter[] }> => {
    return {
        title: "Station 01: Der mittelalterliche Markt, Handel und Handwerk in Dortmund",
        chapters: [
            {
                title: "Kapitel 1: Märkte und Verkauf vom Mittelalter bis zur frühen Neuzeit",
                content: [
                    { type: "paragraph", text: "Im Mittelalter waren städtische Wochenmärkte die Zentren der Lebensmittelversorgung. Dort gab es alles fürs tägliche Leben, ergänzt durch spezialisierte Märkte für Gebrauchsgegenstände oder bestimmte Lebensmittel, sowie Jahrmärkte und Messen. Entscheidend war die sichere Versorgung mit Lebensmitteln und Brennstoff - während Reiche Vorräte anlegen konnten, lebten viele ärmere Stadtbewohner:innen sprichwörtlich „von der Hand in den Mund“." },
                    { type: "paragraph", text: "Neben dem Wochenmarkt gab es spezialisierte Märkte. Außerdem fanden Jahrmärkte und Messen statt, die nicht nur der Versorgung dienten, sondern auch Unterhaltung boten." },
                    { type: "paragraph", text: "Handwerker verkauften ihre Produkte auf dem Markt oder produzierten nach Auftrag und verkauften ihre Waren direkt aus der Werkstatt, teils über ein einfaches Auslegebrett am Haus. Die Versorgung auf dem Land war meistens schlechter als in der Stadt. Hausierer zogen mit ihren Waren übers Land und boten sie Landbewohner:innen direkt an der Haustüre an. Zwischen dem 17. und 19. Jahrhundert richteten sich verstärkt polizeiliche Kontrollen und Verbote gegen diesen Wanderhandel." },
                    { type: "paragraph", text: "Erst im 18. Jahrhundert, mit wachsendem Warenangebot, entstanden spezialisierte Läden, wie zum Beispiel für Textilien. Mit der Gewerbefreiheit im 19. Jahrhundert entwickelte sich daraus ein immer vielfältigerer Kleinhandel." },
                    { type: "paragraph", text: "Bis ins 19. Jahrhundert hinein waren Städte eng mit ihrem Umland verflochten: gute oder schlechte Ernten spürte man sofort auf dem Markt. Erst die Industrialisierung vernetzte die Versorgung überregional und schließlich weltweit." }
                ]
            },
            {
                title: "Kapitel 2: Der Dortmunder Markt",
                content: [
                    { type: "paragraph", text: "Dortmund besitzt eines der ältesten Marktrechte Westfalens: Bereits 990 ist ein Wochenmarkt urkundlich belegt. Im Jahr 1232 verlieh König Heinrich VII. der Stadt Dortmund das Recht, einen zweiten jährlichen Markt abzuhalten. Hier verkauften Menschen aus Landwirtschaft, Handwerk und Handel Lebensmittel, Wolle, Lederwaren oder Tuch. Die Stadtbevölkerung konnte so ihre Versorgung sichern." }
                ]
            }
        ]
    }
}

export const prerender: "auto" | boolean = false
export const ssr: boolean = false
