import type { LayoutLoad } from "./$types"
import { isRunning } from "$stores"
import { redirect } from "@sveltejs/kit"
import { getBaseUrl } from "$utils/url"

export const load: LayoutLoad = async (): Promise<{}> => {
    if (!isRunning()) redirect(303, getBaseUrl())

    return {}
}
