import { dev } from "$app/environment"
import { goto } from "$app/navigation"

const BASE_URL: string = "/"

function formatPath(raw: string): string {
    if (raw.length === 0) return "/"
    if (!raw.startsWith("/")) return "/"
    return raw
}

export function getBaseUrl(): string {
    return BASE_URL
}

/**
 * 
 * @param path 
 */
export async function sendTo(path: string): Promise<void> {
    await goto(`${BASE_URL}${formatPath(path)}`)
}

/**
 * 
 * @param path 
 */
export function navigateTo(path: string): void {
    window.location.href = `${BASE_URL}${formatPath(path)}`
}
