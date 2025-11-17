import type { PageLoad } from "./$types"
import { error } from "@sveltejs/kit"
//import pkg from "./package.json" with { type: "json" }
import * as pkg from "$app/environment"

export const load: PageLoad = async (): Promise<{}> => {
    //error(400, { message: "ggg" })
    console.log(pkg)

    return {}
}
