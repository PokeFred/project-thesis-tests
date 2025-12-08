import type { LayoutLoad } from "./$types"
import { isRunning } from "$stores"
import { redirect } from "@sveltejs/kit"

export const load: LayoutLoad = async (): Promise<{}> => {
    if (!isRunning()) redirect(303, "/")

    return {}
}
