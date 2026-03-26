/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
/// <reference types="@sveltejs/kit" />

import { build, files, version } from "$service-worker"

function isExcluded(file: string): boolean {
    return file.endsWith(".mp3") || file.endsWith(".htaccess")
}

const self: ServiceWorkerGlobalScope = globalThis.self as unknown as ServiceWorkerGlobalScope
const CACHE: string = `cache-${version}`
const ASSETS: string[] = [...build, ...files]
    .filter((element: string): boolean => !isExcluded(element))

async function addFilesToCache(): Promise<void> {
    const cache: Cache = await caches.open(CACHE)
    await cache.addAll(ASSETS)
}

async function deleteOldCaches(): Promise<void> {
    for (const key of await caches.keys()) {
        if (key !== CACHE) await caches.delete(key)
    }
}

// @ts-ignore
async function respond(event: FetchEvent): Promise<Response> {
    const url: URL = new URL(event.request.url)
    const cache: Cache = await caches.open(CACHE)

    if (ASSETS.includes(url.pathname)) {
        const response: Response | undefined = await cache.match(event.request)

        if (response) {
            return response
        }
    }

    try {
        const response: Response = await fetch(event.request)

        if (!(response instanceof Response)) {
            throw new Error("Error: invalid response from fetch.")
        }

        if ((response.status === 200) && !isExcluded(url.pathname)) {
            cache.put(event.request, response.clone())
        } else {
            return response
        }
    } catch (error) {
        const response: Response | undefined = await cache.match(event.request)

        if (response) return response
        else throw error
    }
}

self.addEventListener("install", (event: ExtendableEvent): void => {
    event.waitUntil(addFilesToCache())
})

self.addEventListener("activate", (event: ExtendableEvent): void => {
    event.waitUntil(deleteOldCaches())
})

self.addEventListener("fetch", (event: FetchEvent): void => {
    if (event.request.url.indexOf("http") === 0) return
    if (event.request.method !== "GET") return

    event.respondWith(respond(event))
})
