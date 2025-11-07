import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ locals }): Promise<{}> => {
    console.log(locals)

    return {}
}
