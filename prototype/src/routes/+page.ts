import { redirect } from "@sveltejs/kit"
import type { PageLoad } from "./$types"
import { dev } from '$app/environment';

export const load: PageLoad = async (): Promise<{}> => {
    redirect(303, dev ? "/app/stations" : "/project-thesis-tests/prototype/app/stations")
}
