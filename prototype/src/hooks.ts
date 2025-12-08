import type { Reroute } from "@sveltejs/kit"

const translated: Record<string, string> = {
    "/app": "/app/s"
}

export const reroute: Reroute = ({ url }) => {
    let path: string = url.pathname
    if (path.endsWith("/")) path = path.slice(0, (path.length - 1))
    if (path in translated) return translated[path]
}
