import type { PageLoad } from "./$types"
import config from "$config"
import type { _Station } from "./Station"

export const load: PageLoad = async (): Promise<{ completion: number, stations: _Station[] }> => {
    return {
        completion: 50,
        stations: config.stations
            .map((element: any): _Station => {
                return {
                    identifier: element.identifier,
                    name: element.stitle,
                    score: {
                        current: 0,
                        max: 1
                    },
                    state: "OPEN"
                }
            })
    }
}
