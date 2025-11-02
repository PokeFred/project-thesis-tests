import type { LayoutLoad } from "./$types"
import Game from "$stores"
import { get } from "svelte/store"
import { redirect } from "@sveltejs/kit"

export const load: LayoutLoad = async (): Promise<{}> => {
    //const game = get(Game)
    //if (!game.isRunning) redirect(303, "/")

    return {}
}
