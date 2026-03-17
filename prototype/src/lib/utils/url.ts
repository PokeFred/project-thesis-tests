import { goto } from "$app/navigation"
import { resolve } from "$app/paths"

const BASE_URL: string = resolve("/")

export function getBaseUrl(): string {
    return ""
}

export function asset(path: string): string {
    return `/data/${path}`
}

export async function sendTo(path: string): Promise<void> {
    await goto(`${path}`)
}

export function navigateTo(path: string): void {
    window.location.href = `${window.location.origin}${path}`
}
