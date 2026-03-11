import type { PageLoad } from "./$types"
import Station from "$utils/station"
import type { Score } from "$utils/score"

type _Station = {
    id: number,
    title: string,
    score: Score
}

export const load: PageLoad = async (): Promise<{ stations: _Station[] }> => {
    return {
        stations: Station.getAll()
            .map((element: Station): _Station => {
                return {
                    id: element.getId(),
                    title: element.getTitle(),
                    score: element.getScore()
                }
            })
    }
}
