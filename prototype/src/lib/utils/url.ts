import { goto } from "$app/navigation"
import { resolve } from "$app/paths"

const BASE_URL: string = resolve("/")

export function getBaseUrl(): string {
    return BASE_URL
}

/**
 * 
 * @param path 
 */
export async function sendTo(path: string): Promise<void> {
    await goto(`${BASE_URL}${path}`)
}

/**
 * 
 * @param path 
 */
export function navigateTo(path: string): void {
    window.location.href = `http://localhost:3000${path}` // TODO (cedric): URL
}
