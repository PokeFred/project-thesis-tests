import { dev } from "$app/environment"
import { goto } from "$app/navigation"

const ORIGIN: string = dev ? "http://localhost:3000" : "https://konsum-mkk.de"
const PREFIX: string = dev ? "/#" : "/einkaufsspuren/#"
const ASSET_PREFIX: string = dev ? "" : "/einkaufsspuren"

export function getBasePath(): string {
    return `${PREFIX}`
}

export function asset(path: string): string {
    return `${ORIGIN}${ASSET_PREFIX}/data${path}`
}

export async function sendTo(path: string): Promise<void> {
    await goto(`${PREFIX}${path}`)
}

export function navigateTo(path: string): void {
    window.location.href = `${ORIGIN}${PREFIX}${path}`
}
