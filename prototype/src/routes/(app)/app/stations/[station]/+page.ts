import type { PageLoad } from "./$types"
import Config from "$config"

type Chapter = { title: string, content: SectionNode[] | ParagraphNode[] }
type SectionNode = { type: "section" }
type ParagraphNode = { type: "paragraph", text: string }

export const load: PageLoad = async ({ params }): Promise<{ title: string, completion: number, chapters: any[] }> => {
    const station = Config.stations.filter((e): boolean => e.identifier === params.station)[0]

    return {
        title: station.stitle,
        completion: 50,
        chapters: station.chapters
    }
}

export const prerender: "auto" | boolean = false
export const ssr: boolean = false
