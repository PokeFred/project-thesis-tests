import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ params }): Promise<{ identifier: string, station: string, title: string }> => {
    console.log(params)
    return {
        identifier: params.puzzle,
        station: params.station,
        title: ""
    }
}

export const prerender: "auto" | boolean = false
export const ssr: boolean = false
