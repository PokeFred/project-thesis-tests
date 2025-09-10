import { redirect } from "@sveltejs/kit"
import type { PageLoad } from "./$types"

export const load: PageLoad = async (): Promise<{}> => {
    redirect(303, "/project-thesis-tests/prototype/app/stations")
}
