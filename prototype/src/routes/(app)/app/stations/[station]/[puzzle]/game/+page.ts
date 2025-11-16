import type { PageLoad } from "./$types"
import Config from "$config"

export const load: PageLoad = async ({ params }): Promise<{ identifier: string, station: string, title: string }> => {
    const puzzle = Config.stations
        .filter((element): boolean => element.identifier === params.station)
        .map((e) => e.puzzles)
        .flat(1)
        .filter((element): boolean => element.identifier === params.puzzle)[0]

    return {
        identifier: puzzle.identifier,
        station: params.station,
        title: puzzle.name
    }
}
