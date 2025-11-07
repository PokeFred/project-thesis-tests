import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }): Promise<Response> => {
    event.locals = {}
    console.log(localStorage.getItem("A"))

    const response: Response = await resolve(event)
    response.headers.set("x-custom-header", "potato")

    return response
}
